// React-imports
import * as React from 'react';

// BEM-imports
import { cn } from '@bem-react/classname';

import './Header@simple.sss';

// Import menu-parts
import { RegistryConsumer } from '@bem-react/di';

export class Header extends React.Component<{}, { isOpen: boolean }> {
    render() {
        return (
            <header className='header section'>
                <RegistryConsumer>
                    {
                        regs => {
                            const Body = regs[cn('Header')()].get(cn('Body')());
                            return <Body />;
                        }
                    }
                </RegistryConsumer>
            </header>
        )
    }
}
