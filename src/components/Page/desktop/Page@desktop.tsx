import { Page as PageCommon } from '../Page';

import './Page@desktop.sss';

import { Registry, withRegistry } from '@bem-react/di';

import { Header } from '../../Header/desktop/Header@desktop';
import { Footer } from '../../Footer/desktop/Footer@desktop';
import { Content } from '../../Content/Content';
import '../../Content/Content@desktop.sss'

const PageRegistry = new Registry({ id: 'Page' });

PageRegistry.set('Footer', Footer);
PageRegistry.set('Content', Content)
PageRegistry.set('Header', Header);

export const Page = withRegistry(PageRegistry)(PageCommon);
