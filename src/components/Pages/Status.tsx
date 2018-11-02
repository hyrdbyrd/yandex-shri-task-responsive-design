import * as React from 'react';

import Page from '../Page/Page';


export default function StatusPage(props?: { status?: string }) {
    return <Page title={ props.status || '404 - page not found' } />;
}
