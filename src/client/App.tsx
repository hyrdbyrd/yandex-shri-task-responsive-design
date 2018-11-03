import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Page as Cons } from '../components/Page/index';
const Page = Cons.desktop();

import routes from './routes';

export default function App(props?: { title?: string }) {
    return <Page title={ props.title || 'Yandex house' }>
        <Switch>
            { routes.map((route, i) => <Route key={i} {...route} /> ) }
        </Switch>
    </Page>
}
