import './Agify.scss';
import { MainHeader, AgifyMain } from '../../widgets';
import {
    Panel,
    NavIdProps,
    Separator
} from '@vkontakte/vkui';
import { FC } from 'react';

const Agify: FC<NavIdProps> = ({ id }) => {
    return (
        <Panel id={id}>
            <MainHeader />
            <Separator />
            <AgifyMain />
        </Panel>
    )
}

export { Agify }
