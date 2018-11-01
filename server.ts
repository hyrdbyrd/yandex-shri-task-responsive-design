import * as express from 'express';
import * as cors from 'cors';

import { Application, Response, Request, NextFunction } from 'express';

import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { compileFile } from 'pug';

import * as events from './events.json';

const pathToFlux: string = join(__dirname, 'src/views/components/pages/');
const files: { [key: string]: { html: string, scripts?: string[] } } = {};
readdirSync(pathToFlux).forEach(file => {
    files[file.slice(0, file.length - 4)] = {
        html: compileFile(join(pathToFlux, file))({ events }),
        scripts: ['bundle.js']
    }
});

files.video.scripts.push('media.js');

const app: Application = express();

import { routerStatus } from './routes/status';
import { routerApi } from './routes/api';
import { routerPagination } from './routes/pagination';

const PORT: number | string = process.env.PORT || 8000;

app.set('view engine', 'pug');
app.set('views', './src/views/components/pages');

app
    .use(express.static('./dist'))
    .use((req: Request, res: Response, next: NextFunction) => {
        res.locals.origin = `${req.protocol}://${req.hostname}${PORT ? ':' + PORT : ''}`;
        next();
    })
    .use('/status', routerStatus)
    .use('/api/events', routerApi)
    .use('/events', routerPagination)
    .use('/flux/:layout', (req: Request, res: Response, next: NextFunction) => {
        const { layout } = req.params;
        if (layout in files) {
            res.send(files[layout]);
        } else {
            next(new Error('Meh?'));
        }
    })
    .use('/flux', (req: Request, res: Response) => { res.render('flux', { title: 'Flux' }); })
    .use(cors())
    .use('/cams', express.static('./streams'), cors())
    .get('/video', (req, res) => { res.render('video'); })
    .use((req: Request, res: Response, next: NextFunction) => {
        const error = {
            message: 'Ошибка :(',
            status: 404
        };

        next(error);
    })
    .use((error: Error, req: Request, res: Response, next: NextFunction) => {
        const title: number = req.statusCode || 400;
        const text: string = error.message;

        res.status(title);
        res.render('content', { title, text });
        next();
    });

app.listen(PORT, (err: Error) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listening ${PORT} port`);
});
