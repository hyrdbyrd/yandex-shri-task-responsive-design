import * as React from 'react';
// Import stylesheet
import './../Navigation/Navigation.sss';

// Menu-part - Header
export function MenuHeader() {
    return (
        <ul className='navigation-list navigation-list_footer'>
            <li className='navigation-list__item navigation-list__item_footer'>
                <a className='link'>
                    Сводка
                </a>
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
                <a className='link' href='/video'>
                    Видеонаблюдение
                </a>
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
