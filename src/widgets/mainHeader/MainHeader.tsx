import './MainHeader.scss'
import {
    Group,
    Button
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { FC } from 'react';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const MainHeader: FC = () => {
    const routeNavigator = useRouteNavigator();

    return (
        <Group className="header">
            <div className="header__row">
                <Button size='l' className='header__task1' onClick={() => routeNavigator.backToFirst()}>Catfact</Button>
                <Button size='l' className='header__task2' onClick={() => routeNavigator.push('/getAge')}>Agify</Button>
            </div>
        </Group>
    )
}

export { MainHeader }