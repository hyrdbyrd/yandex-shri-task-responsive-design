import * as express from 'express';
import * as cors from 'cors';

import { Application, Request, Response, NextFunction  } from 'express';

import * as React from 'react';
import { StaticRouter } from 'react-router-dom';

import { renderToString } from 'react-dom/server';
import { resolve } from 'path';

import { toHtml } from './html';

const PORT: number = 8000;
const app: Application = express();

app
    .use('/cams', cors(), express.static(resolve('./streams')))
    .use(express.static(resolve('./dist')))
    .get('*', (req: Request, res: Response) => {
        let platform: 'desktop' | 'mobile' = 'desktop';
        let bundleName = 'bundle@desktop.js';
        if (/Android|iPhone|iPad|iPod|Opera Mini/.test(req.headers['user-agent'])) {
            platform = 'mobile';
            bundleName = 'bundle@mobile.js';
        }

        const App = require(`../components/${platform}/App`).App;

        const block = renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        );

        res.send(toHtml({ block, bundleName }));
    })
    .use((error: Error, req: Request, res: Response, next: NextFunction) => {
        res.send(`${error.message}\n${error.stack}`);
    });

app.listen(PORT, () => { console.log(`Server is listening ${PORT} port`) });
