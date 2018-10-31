import * as React from 'react';

// Import menu-parts
import { MenuHeader, MenuFooter } from './../Menu/Menu';

export class Header extends React.Component<{}, { isOpen: boolean }> {
    state = {
        isOpen: false
    };

    // Burger-toggler
    private onClickMenu() {
        // this.setState((state) => ({ isOpen: !state.isOpen }));
        // body.classList.toggle('no-overflow');
    }

    render() {
        return (
            <header className='header section'>
                <div className='container header__container'>
                    <a href='/events'>
                        <img className='header__logo' src='assets/logo.svg'/>
                    </a>
                    <img className='media-mobile burger' src='assets/i_burger.svg' onClick={ this.onClickMenu.bind(this) }/>
                    <nav className={`navigation navigation_header ${this.state.isOpen ? 'navigation_header_active' : ''}`}>
                        <div className='navigation_header-wrapper'>
                            <MenuHeader />
                            <div className='media-mobile'>
                                <MenuFooter />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
