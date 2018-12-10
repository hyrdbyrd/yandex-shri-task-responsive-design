import * as express from 'express';
import * as cors from 'cors';

import { Application, Response, Request, NextFunction } from 'express';

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
