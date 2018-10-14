const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8000;

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
    .use('/streams/:path/:source', cors())
    .use('/video', cors())
    .get('/video', (req, res) => { res.render('video'); })
    .use('/events', require('./routes/pagination'))
    .use((req, res, next) => {
        const error = new Error('Ошибка :(');
        error.status = 404;
        next(error);
    })
    .use((error, req, res, next) => {
        const title = error.status || 400;
        const text = error.message;
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
