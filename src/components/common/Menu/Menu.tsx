import * as React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.sss';
import { cn } from '@bem-react/classname';

const cnNavList = cn('NavigationList');

// Menu-part - Header
export function MenuHeader() {
    const item = cnNavList('Item', { block: 'header' });

    const list: Array<{ title: string, href: string, isLink: boolean }> = [
        { title: 'Сводка', href: '/', isLink: true },
        { title: 'Устройства', href: '#', isLink: false },
        { title: 'Сценарии', href: '#', isLink: false },
        { title: 'Видеонаблюдение', href: '/videos', isLink: true },
    ];

    return <ul className={cnNavList({ block: 'header' })}>
        { list.map((obj, key) => (
            <li key={key} className={item}>
                { obj.isLink ?
                    <Link className='Link' to={obj.href}>
                        { obj.title }
                    </Link> :
                    <a className='Link' href={obj.href}>
                        { obj.title }
                    </a>
                }
            </li>
        )) }
    </ul>;
};

// Menu-part - Footer
export function MenuFooter() {
    const item = cnNavList('Item', { block: 'footer' });

    const list: Array<{ title: string, href: string }> = [
        { title: 'Помощь', href: '#' },
        { title: 'Обратная связь', href: '#' },
        { title: 'Разработчикам', href: '#' },
        { title: 'Условия использования', href: '#' },
        { title: 'Авторские права', href: 'assets/license.pdf' },
    ];

    return <ul className={cnNavList({ block: 'footer' })}>
        { list.map((obj, key) => (
            <li key={key} className={item}>
                <a className='Link' href={obj.href}>
                    { obj.title }
                </a>
            </li>
        )) }
    </ul>;
}
