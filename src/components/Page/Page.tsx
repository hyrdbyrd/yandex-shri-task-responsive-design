import * as React from 'react';
// import './Page.sss';

// Components
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';

export default class Page extends React.Component {
    render() {
        return <div className='main'>
        <Header />
        <Content title='Лента событий'>
            { this.props.children }
        </Content>
        <Footer />
    </div>;
    }
}
