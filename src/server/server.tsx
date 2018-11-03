import * as express from 'express';
import * as cors from 'cors';

import { Application, Request, Response, NextFunction  } from 'express';

import * as React from 'react';
import { StaticRouter } from 'react-router-dom';

import { renderToString } from 'react-dom/server';
import { resolve } from 'path';

import { toHtml } from './html';

import App from './../client/App';

const PORT: number = 3000;
const app: Application = express();

app
    .use('/cams', cors(), express.static(resolve('./streams')))
    .use(express.static(resolve('./dist')))
    .get('*', (req: Request, res: Response) => {
        let platform: 'desktop' | 'mobile' = 'desktop';
        if (/Android|iPhone|iPad|iPod|Opera Mini/.test(req.headers['user-agent']) || true) {
            platform = 'mobile';
        }

        const context = {};

        const block = renderToString(
            <StaticRouter location={req.url} context={context}>
                <App platform={platform} />
            </StaticRouter>
        );

        res.send(toHtml({ block, title: 'Yandex Дом', platform }));
    })
    .use((error: Error, req: Request, res: Response, next: NextFunction) => {
        res.send(`${error.message}\n${error.stack}`);
    });

app.listen(PORT, () => { console.log(`Server is listening ${PORT} port`) });
