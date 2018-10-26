import express from 'express';
import cors from 'cors';

const app = express();

const PORT: string = process.env.PORT || '8000';

app.set('view engine', 'pug');
app.set('views', './src/views/components/pages');

app
    .use(express.static('./dist'))
    .use((req, res, next) => {
        res.locals.origin = `${req.protocol}://${req.hostname}${PORT ? ':' + PORT : ''}`;
        next();
    })
    .use('/status', require('./routes/status'))
    .use('/api/events', require('./routes/api'))
    .use('/events', require('./routes/pagination'))
    .use(cors())
    .use('/cams', express.static('./streams'), cors())
    .get('/video', (req, res) => { res.render('video'); })
    .use((req, res, next) => {

        const error = {
            message: 'Ошибка :(',
            status: 404
        }
        next(error);
    })
    .use((error, req, res, next) => {
        const title: number = error.status || 400;
        const text: number = error.message;
        res.status(title);
        res.render('content', { title, text });
        next();
    });

app.listen(PORT, err => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listening ${PORT} port`);
});
