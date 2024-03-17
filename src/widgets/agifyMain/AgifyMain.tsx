import './AgifyMain.scss'
import { AgifyForm } from '../../features'
import { FC } from 'react'
import { Group } from '@vkontakte/vkui';

const AgifyMain: FC = () => {
    return (
        <Group className='agifymain'>
            <AgifyForm />
        </Group>
    )
}

export { AgifyMain }
