import './Catfact.scss'
import { MainHeader, CatfactMain } from '../../widgets'
import {
    Panel,
    NavIdProps,
    Separator
} from '@vkontakte/vkui';
import { FC } from 'react';

const Catfact: FC<NavIdProps> = ({ id }) => {
    return (
        <Panel id={id}>
            <MainHeader />
            <Separator />
            <CatfactMain />
        </Panel>
    )
}

export { Catfact }
