import * as React from 'react';

import './Footer@desktop.sss';

// Get Menu-part
import { MenuFooter } from '../../Menu/Menu';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { Footer as FooterCommon } from '../Footer';

const FooterRegistry = new Registry({ id: cn('Footer')() });
FooterRegistry.set('Body', Body);

// Static block
function Body() {
    return (
        <footer className='footer section media-desktop'>
            <div className='footer-container container'>
                <MenuFooter />
                <nav className='navigation navigation_footer'>
                    <div className='copyright'>
                        &copy; 2001-2017 ООО «Яндекс»
                    </div>
                </nav>
            </div>
        </footer>
    );
}

export const Footer = withRegistry(FooterRegistry)(FooterCommon);
