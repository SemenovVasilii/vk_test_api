import { useRef, useState, FC, useCallback } from 'react'
import { SubmitHandler } from "react-hook-form"
import {
    Button,
    Spinner,
    Text,
    Card
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './AgifyForm.scss'
import { useQueryClient } from '@tanstack/react-query';
import { useAgifyQuery, useAgifyForm } from '../hooks';

type FormValues = {
    name: string
}

const AgifyForm: FC = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useAgifyForm()
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const currentName = watch('name')
    const [prevName, setPrevName] = useState<string>('')
    const queryClient = useQueryClient()
    const { data, isLoading, refetch } = useAgifyQuery(currentName)

    const onSubmit: SubmitHandler<FormValues> = useCallback(async () => {
        queryClient.cancelQueries({ queryKey: ['user'] })
        if (currentName !== prevName) await refetch()
        setPrevName(currentName)
    }, [currentName, prevName, queryClient, refetch]);

    const onSubmitWithDelay = useCallback((e: { preventDefault: () => void }) => {
        e?.preventDefault()
        clearTimeout(timeoutRef.current!);
        handleSubmit(onSubmit)();
    }, [handleSubmit, onSubmit]);

    const handleChange = useCallback(() => {
        clearTimeout(timeoutRef.current!);
        timeoutRef.current = setTimeout(() => {
            handleSubmit(onSubmit)();
        }, 3000);
    }, [handleSubmit, onSubmit]);

    return (
        <form onSubmit={onSubmitWithDelay} className='agifyform'>
            <div className="agifyform__column">
                <div className="agifyform__row">
                    <div className="agifyform__request">
                        <input {...register("name")} className='request__input' onKeyUp={handleChange} placeholder={'Введите имя пользователя'} />
                    </div>
                    <Button type='submit' className='agifyform__button'>Отправить запрос</Button>
                </div>
                {errors.name && <p className='agifyform__error'>{errors.name.message}</p>}
                <Card mode='shadow' className='agifyform__data' >
                    {isLoading ?
                        <Spinner size="large" />
                        :
                        <>
                            {data?.age ?
                                <Text className='data__text'>Возраст пользователя {data?.name}: {data?.age}</Text>
                                :
                                <Text className='data__text'>Введите имя пользователя и ожидайте 3 секунду или нажмите на кнопку</Text>
                            }
                        </>
                    }
                </Card>
            </div>
        </form >
    )
}

export { AgifyForm }
