import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Page as PageCommon } from '../components/Page/index';

import routes from './routes';

export default function App(props?: { title?: string, platform?: 'desktop' | 'mobile' }) {
    const Page = PageCommon[props.platform || 'desktop']();
    return <Page title={ props.title || 'Yandex house' }>
        <Switch>
            { routes.map((route, i) => <Route key={i} {...route} /> ) }
        </Switch>
    </Page>
}
