import * as React from 'react';

import './Footer@simple.sss';

// Get Menu-part
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const BodyCN = cn('Body');
const FooterCN = cn('Footer');

// Static block
export function Footer() {
    return (
        <RegistryConsumer>
            { regs => {
                const Footer = regs[FooterCN()].get(BodyCN());
                return <Footer />;
            } }
        </RegistryConsumer>
    );
}
