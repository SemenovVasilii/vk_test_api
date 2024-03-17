import './CatfactMain.scss'
import { CatfactForm } from '../../features'
import { FC } from 'react'
import { Group } from '@vkontakte/vkui';

const CatfactMain: FC = () => {
    return (
        <Group className='catfactmain'>
            <CatfactForm />
        </Group>
    )
}

export { CatfactMain }
