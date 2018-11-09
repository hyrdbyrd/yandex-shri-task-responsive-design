import * as React from 'react';

import './Footer.sss';

// Get Menu-part
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { Footer as FooterCommon } from '../../common/Footer/Footer';

const FooterRegistry = new Registry({ id: cn('Footer')() });
FooterRegistry.set('Body', Body);

// Static block
function Body() {
    return (
        <footer className='media-desktop'></footer>
    );
}

export const Footer = withRegistry(FooterRegistry)(FooterCommon);
