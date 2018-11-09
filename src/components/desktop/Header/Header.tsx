// React-imports
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header as HeaderCommon } from '../../common/Header/Header';

// BEM-imports
import { cn, classnames } from '@bem-react/classname';

import './Header.sss';

// Import menu-parts
import { MenuHeader } from '../../common/Menu/Menu';
import { Registry, withRegistry } from '@bem-react/di';

const cnHeader = cn('Header');

class Body extends React.Component {
    render() {
        return (
            <div className={classnames('Container', cnHeader('Container'))}>
                <Link to={{ pathname: '/events' }}>
                    <img className={cnHeader('Logo')} src='assets/logo.svg'/>
                </Link>
                <nav className={`Navigation Navigation_header`}>
                    <div className='Navigation_header-wrapper'>
                        <MenuHeader />
                    </div>
                </nav>
            </div>
        )
    }
}

const HeaderRegistry = new Registry({ id: cnHeader() });
HeaderRegistry.set('Body', Body);

export const Header = withRegistry(HeaderRegistry)(HeaderCommon);
