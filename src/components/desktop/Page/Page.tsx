import { Page as PageCommon } from '../../common/Page/Page';

import { Registry, withRegistry } from '@bem-react/di';

import './Page.sss';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';

const PageRegistry = new Registry({ id: 'Page' });

PageRegistry.set('Footer', Footer);
PageRegistry.set('Content', Content)
PageRegistry.set('Header', Header);

export const Page = withRegistry(PageRegistry)(PageCommon);
