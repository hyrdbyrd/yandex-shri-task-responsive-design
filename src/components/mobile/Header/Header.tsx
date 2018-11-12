// React-imports
import * as React from 'react';

// BEM-imports
import { cn, classnames } from '@bem-react/classname';

import { Header as HeaderCommon } from '../../common/Header/Header';
import './Header.sss';

// Import menu-parts
import { Registry, withRegistry } from '@bem-react/di';
import { MenuHeader, MenuFooter } from '../../common/Menu/Menu';

const cnNavigation = cn('Navigation');
export class Nav extends React.Component<{}, { isOpen: boolean }> {
    state = {
        isOpen: false
    };

    // Burger-toggler
    private onClickMenu() {
        this.setState((state) => ({ isOpen: !state.isOpen }));
        document.body.classList.toggle('no-overflow');
    }

    render() {
        return <>
            <img
                className='Burger MediaMobile'
                src='assets/i_burger.svg'
                onClick={ this.onClickMenu.bind(this) }
            />
            <nav className={classnames(cnNavigation({ active: this.state.isOpen }), cnNavigation({ block: 'header' }))}>
                <div className={cnNavigation({ block: 'header' }) + '-Wrapper'}>
                    <MenuHeader />
                    <MenuFooter />
                </div>
            </nav>
        </>
    }

}

const HeaderRegistry = new Registry({ id: 'Header' });
HeaderRegistry.set(cnNavigation(), Nav);

export const Header = withRegistry(HeaderRegistry)(HeaderCommon);
