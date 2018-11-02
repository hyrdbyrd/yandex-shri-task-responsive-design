import * as express from 'express';
import * as cors from 'cors';

import { Application, Request, Response, NextFunction  } from 'express';

import * as React from 'react';
import { StaticRouter } from 'react-router-dom';

import { renderToString } from 'react-dom/server';
import { resolve } from 'path';

import { toHtml } from './html';

import EventPage from './../components/Pages/Events';
import StatusPage from './../components/Pages/Status';

import App from './../client/App';

const PORT: number = 3000;
const app: Application = express();

app
    .use('/cams', cors(), express.static(resolve('./streams')))
    .use(express.static(resolve('./dist')))
    .get('/events', (req: Request, res: Response) => {
        res.send(toHtml({ block: renderToString(<EventPage />)}));
    })
    .get('*', (req: Request, res: Response, next: NextFunction) => {
        const block = renderToString(
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        );

        res.send(toHtml({ block, title: 'Yandex Дом' }));
    })
    .use((req: Request, res: Response, next: NextFunction) => {
        next(new Error('404 - page not found'));
    })
    .use((error: Error, req: Request, res: Response, next: NextFunction) => {
        res.send(toHtml({ block: renderToString(<StatusPage status={error.message} />), title: error.message }))
    });

app.listen(PORT, () => { console.log(`Server is listening ${PORT} port`) });
