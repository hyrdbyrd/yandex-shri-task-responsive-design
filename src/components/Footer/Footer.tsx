import * as React from 'react';

// Get Menu-part
import { MenuFooter } from './../Menu/Menu';

// Static block
export function Footer() {
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
    )
}
