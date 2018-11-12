import * as React from 'react';

import './Footer.sss';

// Get Menu-part
import { MenuFooter } from '../../common/Menu/Menu';
import { cn } from '@bem-react/classname';

// Static block
export function Footer() {
    const cnFooter = cn('Footer');
    const cnNav = cn('Navigation');

    return (
        <footer className={cnFooter(null, ['Section', 'MediaDesktop'])}>
            <div className={cnFooter('Container', ['Container'])}>
                <MenuFooter />
                <nav className={cnNav({ block: 'footer' })}>
                    <div className='Copyright'>
                        &copy; 2001-2017 ООО «Яндекс»
                    </div>
                </nav>
            </div>
        </footer>
    );
}
