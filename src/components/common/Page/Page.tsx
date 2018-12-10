import * as React from 'react';

import './Page.sss';
import { IContentProps } from '../Content/Content';

// Components
import { RegistryConsumer } from '@bem-react/di';

export class Page extends React.Component<IContentProps> {
    render() {
        return <RegistryConsumer>
                { regs => {
                    const Page = regs['Page'];

                    // This can be mobile or desktop version.
                    // Header use Registries too.
                    // Footer use Registries too.
                    const Header = Page.get('Header');
                    const Content = Page.get<IContentProps>('Content');
                    const Footer = Page.get('Footer');

                    return <div className='Main'>
                        <Header />
                        <Content>
                            { this.props.children }
                        </Content>
                        <Footer />
                    </div>;
                } }
            </RegistryConsumer>;
    }
}
