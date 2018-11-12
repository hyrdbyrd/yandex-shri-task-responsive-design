import * as React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.sss';
import { cn } from '@bem-react/classname';

const cnNavList = cn('NavigationList');

// Menu-part - Header
export function MenuHeader() {
    const item = cnNavList('Item', { block: 'header' });

    const list: Array<{ title: string, href: string, isReactLink: boolean }> = [
        { title: 'Сводка', href: '/', isReactLink: true },
        { title: 'Устройства', href: '#', isReactLink: false },
        { title: 'Сценарии', href: '#', isReactLink: false },
        { title: 'Видеонаблюдение', href: '/videos', isReactLink: true },
    ];

    // Generate the list
    return <ul className={cnNavList({ block: 'header' })}>
        { list.map((obj, key) => (
            <li key={key} className={item}>
                { obj.isReactLink ?
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

    // Generate the list
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
