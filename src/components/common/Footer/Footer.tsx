import * as React from 'react';

import './Footer.sss';

// Get Menu-part
import { MenuFooter } from '../../common/Menu/Menu';

// Static block
export function Footer() {
    return (
        <footer className='Footer Section MediaDesktop'>
            <div className='Container Footer-Container'>
                <MenuFooter />
                <nav className='Navigation Navigation_block_footer'>
                    <div className='Copyright'>
                        &copy; 2001-2017 ООО «Яндекс»
                    </div>
                </nav>
            </div>
        </footer>
    );
}
