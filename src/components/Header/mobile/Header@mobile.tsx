// React-imports
import * as React from 'react';
import { Link } from 'react-router-dom';

// BEM-imports
import { cn } from '@bem-react/classname';

import { Header as HeaderCommon } from '../Header';
import './Header@mobile.sss';

// Import menu-parts
import { MenuHeader, MenuFooter } from '../../Menu/Menu';
import { Registry, withRegistry } from '@bem-react/di';

export class Body extends React.Component<{}, { isOpen: boolean }> {
    state = {
        isOpen: false
    };

    // Burger-toggler
    private onClickMenu() {
        this.setState((state) => ({ isOpen: !state.isOpen }));
        document.body.classList.toggle('no-overflow');
    }

    render() {
        return (
            <div className='container header__container'>
                <Link to={{ pathname: '/events' }}>
                    <img className='header__logo' src='assets/logo.svg'/>
                </Link>
                <img className='media-mobile burger' src='assets/i_burger.svg' onClick={ this.onClickMenu.bind(this) }/>
                <nav className={`navigation navigation_header ${this.state.isOpen ? 'navigation_header_active' : ''}`}>
                    <div className='navigation_header-wrapper'>
                        <MenuHeader />
                        <MenuFooter />
                    </div>
                </nav>
            </div>
        )
    }
}

const HeaderRegistry = new Registry({ id: cn('Header')() });
HeaderRegistry.set('Body', Body);

export const Header = withRegistry(HeaderRegistry)(HeaderCommon);
