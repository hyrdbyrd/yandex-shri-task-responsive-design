import * as React from 'react';
import './Page@simple.sss';

// Components
import { RegistryConsumer } from '@bem-react/di';

export class Page extends React.Component<{ title?: string }> {
    render() {
        return <RegistryConsumer>
                { regs => {
                    const Page = regs['Page'];

                    const Header = Page.get('Header');
                    const Content: any = Page.get('Content');
                    const Footer = Page.get('Footer');

                    return <div className='main'>
                        <Header />
                        <Content title={ this.props.title || 'Yandex Дом' }>
                            { this.props.children }
                        </Content>
                        <Footer />
                    </div>;
                } }
            </RegistryConsumer>;
    }
}
