import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Page } from './Page/Page';
import routes from './routes';

export function App() {
    return <Page>
        <Switch>
            { routes.map((route, i) => <Route key={i} {...route} /> ) }
        </Switch>
    </Page>
}
