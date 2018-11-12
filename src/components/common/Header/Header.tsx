// React-imports
import * as React from 'react';

// BEM-imports
import { cn } from '@bem-react/classname';

import './Header.sss';

// Import menu-parts
import { RegistryConsumer } from '@bem-react/di';
import { Link } from 'react-router-dom';

export class Header extends React.Component<{}, { isOpen: boolean }> {
    render() {
        const cnHeader = cn('Header');
        const cnNavigation = cn('Navigation')

        return (
            <header className={cnHeader(null, ['Section'])}>
                <RegistryConsumer>
                    {regs => {
                        const HeaderReg = regs[cnHeader()];
                        const Nav = HeaderReg.get(cnNavigation());

                        return <div className={cnHeader('Container', ['Container'])}>
                            <Link to={{ pathname: '/events' }}>
                                <img className={cnHeader('Logo')} src='assets/logo.svg'/>
                            </Link>
                            <Nav />
                        </div>;
                    }}
                </RegistryConsumer>
            </header>
        )
    }
}
