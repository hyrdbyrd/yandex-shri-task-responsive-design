import * as React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.sss';

// Menu-part - Header
export function MenuHeader() {
    return (
        <ul className='NavigationList NavigationList_block_header'>
            <li className='NavigationList-Item NavigationList-Item_block_header'>
                <Link className='Link' to='/'>
                    Сводка
                </Link>
            </li>
            <li className='NavigationList-Item NavigationList-Item_block_header'>
                <a className='Link'>
                    Устройства
                </a>
            </li>
            <li className='NavigationList-Item NavigationList-Item_block_header'>
                <a className='Link'>
                    Сценарии
                </a>
            </li>
            <li className='NavigationList-Item NavigationList-Item_block_header'>
                <Link className='Link' to={{ pathname: '/videos' }}>
                    Видеонаблюдение
                </Link>
            </li>
        </ul>
    )
};

// Menu-part - Footer
export function MenuFooter() {
    return (
        <ul className='NavigationList NavigationList_block_footer'>
            <li className='NavigationList-Item NavigationList-Item_block_footer'>
                <a className='Link'>
                    Помощь
                </a>
            </li>
            <li className='NavigationList-Item NavigationList-Item_block_footer'>
                <a className='Link'>
                    Обратная связь
                </a>
            </li>
            <li className='NavigationList-Item NavigationList-Item_block_footer'>
                <a className='Link'>
                    Разработчикам
                </a>
            </li>
            <li className='NavigationList-Item NavigationList-Item_block_footer'>
                <a className='Link'>
                    Условия использования
                </a>
            </li>
            <li className='NavigationList-Item NavigationList-Item_block_footer'>
                <a className='Link' href='assets/license.pdf'>
                    Авторские права
                </a>
            </li>
        </ul>
    )
}
