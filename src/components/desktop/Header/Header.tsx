// React-imports
import * as React from 'react';

import { Header as HeaderCommon } from '../../common/Header/Header';

// BEM-imports
import { cn } from '@bem-react/classname';
import './Header.sss';

// Import menu-parts
import { MenuHeader } from '../../common/Menu/Menu';
import { Registry, withRegistry } from '@bem-react/di';

const cnHeader = cn('Header');
const cnNavigation = cn('Navigation');

export const Nav: React.SFC = () => <MenuHeader />;

const HeaderRegistry = new Registry({ id: cnHeader() });
HeaderRegistry.set(cnNavigation(), Nav);

export const Header = withRegistry(HeaderRegistry)(HeaderCommon);
