import { Page as PageCommon } from '../Page';


import { Registry, withRegistry } from '@bem-react/di';

import './Page@desktop.sss';
import { Header } from '../../Header/desktop/Header@desktop';
import '../../Content/Content@desktop.sss'
import { Content } from '../../Content/Content';
import { Footer } from '../../Footer/desktop/Footer@desktop';

const PageRegistry = new Registry({ id: 'Page' });

PageRegistry.set('Footer', Footer);
PageRegistry.set('Content', Content)
PageRegistry.set('Header', Header);

export const Page = withRegistry(PageRegistry)(PageCommon);
