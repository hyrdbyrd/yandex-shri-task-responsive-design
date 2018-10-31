import * as express from 'express';

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { resolve } from 'path';

import { toHtml } from './html';
import Page from './components/Page/Page';

const PORT: number = 3000;
const app: express.Application = express();

app.use(express.static(resolve(__dirname, '../../dist/static')));

app.get('/', (req: express.Request, res: express.Response) => {
    const block = renderToString(<Page>
        <div>Hello world!</div>
    </Page>);

    const html: string = toHtml({ block, title: 'Hello world?'});
    res.send(html);
});

app.listen(PORT, () => { console.log(`Server is listening ${PORT} port`) });
