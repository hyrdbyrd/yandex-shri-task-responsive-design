import * as React from 'react';
import './Page@simple.sss';
import { IContentProps } from '../Content/Content'

// Components
import { RegistryConsumer } from '@bem-react/di';

export class Page extends React.Component<IContentProps> {
    render() {
        return <RegistryConsumer>
                { regs => {
                    const Page = regs['Page'];

                    const Header = Page.get('Header');
                    const Content = Page.get<IContentProps>('Content');
                    const Footer = Page.get('Footer');

                    return <div className='main'>
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
