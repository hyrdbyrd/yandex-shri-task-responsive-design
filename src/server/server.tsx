import * as express from 'express';
import * as React from 'react';

import { renderToString } from 'react-dom/server';
import { resolve } from 'path';

import { toHtml } from './html';
import EventPage from './../components/Pages/Events';

const PORT: number = 3000;
const app: express.Application = express();

app.use(express.static(resolve('./dist')));

app.get('/events', (req: express.Request, res: express.Response) => {
    const block = renderToString(<EventPage />);

    const html: string = toHtml({ block, title: 'Hello world?'});
    res.send(html);
});

app.listen(PORT, () => { console.log(`Server is listening ${PORT} port`) });
