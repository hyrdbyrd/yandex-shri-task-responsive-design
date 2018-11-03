import { Page as PageCommon } from '../Page';

import './Page@mobile.sss';

import { Registry, withRegistry } from '@bem-react/di';

import { Header } from '../../Header/Header@mobile';
import { Footer } from '../../Footer/Footer@mobile';
import { Content } from '../../Content/Content';
import '../../Content/Content@mobile.sss';

const PageRegistry = new Registry({ id: 'Page' });

PageRegistry.set('Footer', Footer);
PageRegistry.set('Content', Content)
PageRegistry.set('Header', Header);

export const Page = withRegistry(PageRegistry)(PageCommon);
