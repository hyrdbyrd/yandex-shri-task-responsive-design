// React-imports
import * as React from 'react';

// BEM-imports
import { cn, classnames } from '@bem-react/classname';

import './Header.sss';

// Import menu-parts
import { RegistryConsumer } from '@bem-react/di';

export class Header extends React.Component<{}, { isOpen: boolean }> {
    render() {
        const cnHeader = cn('Header');

        return (
            <header className={classnames(cnHeader(), 'Section')}>
                <RegistryConsumer>
                    {
                        regs => {
                            const Body = regs[cnHeader()].get(cn('Body')());
                            return <Body />;
                        }
                    }
                </RegistryConsumer>
            </header>
        )
    }
}
