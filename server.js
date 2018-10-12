const express = require('express');
const app = express();
const cors = require('cors');

const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
// const events = require('./events.json').events;

app.set('view engine', 'pug');
app.set('views', './src/views/components/pages');

app
    .use((req, res, next) => {
        res.locals.origin = req.hostname;
        next();
    })
    .use('/api/events', require('./routes/api'))
    .use('/status', require('./routes/status'))
    .use('/streams/:path/:source', cors())
    .use(express.static('./dist'))
    .get('/', (req, res) => {
        fs
            .createReadStream(path.join(__dirname, './events.json'))
            .on('data', data => 
                res.render('events', { events: (JSON.parse(data.toString()).events) } )
            );
    })
    .use('/video', cors())
    .get('/video', (req, res) => { res.render('video'); })
    .get((error, req, res, next) => {
        const title = req.locals.title || 'Ошибка :(';
        const text = req.locals.text || 'Вы забрели куда-то не туда';

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