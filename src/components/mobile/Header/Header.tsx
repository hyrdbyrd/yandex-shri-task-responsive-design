// React-imports
import * as React from 'react';
import { Link } from 'react-router-dom';

// BEM-imports
import { cn } from '@bem-react/classname';

import { Header as HeaderCommon } from '../../common/Header/Header';
import './Header.sss';

const cnHeader = cn('Header');

// Import menu-parts
import { MenuHeader, MenuFooter } from '../../common/Menu/Menu';
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
        const cnNavigation = cn('Navigation_header');
        return (
            <div className={cnHeader('Container', ['Container'])}>
                <Link to={{ pathname: '/events' }}>
                    <img className={cnHeader('Logo')} src='assets/logo.svg'/>
                </Link>
                <img className='MediaMobile Burger' src='assets/i_burger.svg' onClick={ this.onClickMenu.bind(this) }/>
                <nav className={`Navigation ${cnNavigation()} ${cnNavigation({ active: this.state.isOpen })}`}>
                    <div className={`${cnNavigation()}-wrapper`}>
                        <MenuHeader />
                        <MenuFooter />
                    </div>
                </nav>
            </div>
        )
    }
}

const HeaderRegistry = new Registry({ id: cnHeader() });
HeaderRegistry.set('Body', Body);

export const Header = withRegistry(HeaderRegistry)(HeaderCommon);
