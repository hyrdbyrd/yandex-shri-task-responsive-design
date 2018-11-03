// React-imports
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header as HeaderCommon } from './Header';

// BEM-imports
import { cn } from '@bem-react/classname';

import './Header@desktop.sss';

// Import menu-parts
import { MenuHeader } from './../Menu/Menu';
import { Registry, withRegistry } from '@bem-react/di';


const cnHeader = cn('Header');


class Body extends React.Component {
    render() {
        return (
            <div className='container header__container'>
                <Link to={{ pathname: '/events' }}>
                    <img className='header__logo' src='assets/logo.svg'/>
                </Link>
                <nav className={`navigation navigation_header`}>
                    <div className='navigation_header-wrapper'>
                        <MenuHeader />
                    </div>
                </nav>
            </div>
        )
    }
}

const HeaderRegistry = new Registry({ id: cnHeader() });
HeaderRegistry.set('Body', Body);

export const Header = withRegistry(HeaderRegistry)(HeaderCommon);
