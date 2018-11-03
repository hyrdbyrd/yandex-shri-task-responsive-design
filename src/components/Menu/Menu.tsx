import * as React from 'react';
import { Link } from 'react-router-dom';

import '../Navigation/Navigation.sss';

// Menu-part - Header
export function MenuHeader() {
    return (
        <ul className='navigation-list navigation-list_footer'>
            <li className='navigation-list__item navigation-list__item_footer'>
                <Link className='link' to='/'>
                    Сводка
                </Link>
            </li>
            <li className='navigation-list__item navigation-list__item_footer'>
                <a className='link'>
                    Устройства
                </a>
            </li>
            <li className='navigation-list__item navigation-list__item_footer'>
                <a className='link'>
                    Сценарии
                </a>
            </li>
            <li className='navigation-list__item navigation-list__item_footer'>
                <Link className='link' to={{ pathname: '/videos' }}>
                    Видеонаблюдение
                </Link>
            </li>
        </ul>
    )
};

// Menu-part - Footer
export function MenuFooter() {
    return (
        <ul className='navigation-list navigation-list_footer'>
            <li className='navigation-list__item navigation-list__item_footer'>
                <a className='link'>
                    Помощь
                </a>
            </li>
            <li className='navigation-list__item navigation-list__item_footer'>
                <a className='link'>
                    Обратная связь
                </a>
            </li>
            <li className='navigation-list__item navigation-list__item_footer'>
                <a className='link'>
                    Разработчикам
                </a>
            </li>
            <li className='navigation-list__item navigation-list__item_footer'>
                <a className='link'>
                    Условия использования
                </a>
            </li>
            <li className='navigation-list__item navigation-list__item_footer'>
                <a className='link' href='assets/license.pdf'>
                    Авторские права
                </a>
            </li>
        </ul>
    )
}
