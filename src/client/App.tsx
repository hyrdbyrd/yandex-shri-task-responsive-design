import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

export default function App() {
    return <Switch>
        { routes.map((route, i) => <Route key={i} {...route} /> ) }
    </Switch>
}
