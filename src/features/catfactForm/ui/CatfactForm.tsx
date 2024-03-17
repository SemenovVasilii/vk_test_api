import './CatfactForm.scss'
import {
    Button,
    Spinner,
    Textarea
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useCatfactQuery } from '../hooks';
import { FC, useCallback, useEffect, useRef } from 'react';

const CatfactForm: FC = () => {

    const { data, isLoading, refetch } = useCatfactQuery()
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleClick = useCallback(async () => {
        await refetch()
    }, [refetch])

    useEffect(() => {
        const textArea = textAreaRef.current
        const value = textArea?.value
        const endOfFirstLetter: any = value?.indexOf(' ')
        textArea?.focus()
        textArea?.setSelectionRange(endOfFirstLetter + 1, endOfFirstLetter)
    }, [data])

    return (
        <div className='catfactform'>
            <div className="catfactform__row">
                {isLoading ?
                    <Spinner size="large" />
                    :
                    <>
                        <div className='catfactform__data'>
                            <Textarea placeholder='Нажмите на кнопку' className='data__textarea' value={data?.fact} getRef={textAreaRef} />
                        </div>
                        <Button className='catfactform__button' onClick={() => handleClick()}>Получить факт</Button>
                    </>
                }
            </div>
        </div>
    )
}

export { CatfactForm }
