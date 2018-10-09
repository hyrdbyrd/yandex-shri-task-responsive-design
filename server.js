const express = require('express');
const app = express();
const cors = require('cors');

const events = require('./events.json').events;
events.sort((a, b) => {
    a = a.time.slice(0, 5).split(':');
    b = b.time.slice(0, 5).split(':');
    a = a[0] * 60 + a[1];
    b = b[0] * 60 + b[1];
    return b - a; 
});

const PORT = process.env.PORT || 8000;

app.set('view engine', 'pug');
app.set('views', './src/views/components/pages');

app
    .use((req, res, next) => {
        res.locals.origin = req.hostname;
        next();
    })
    .use(cors())
    .use(express.static('./dist'))
    .get('/', (req, res) => {
        res.render('events', { events });
    })
    .get('/video', (req, res) => {
        res.render('video');
    })
    .listen(PORT, err => {
        if (err) {
            console.error(err);
        }

        console.log(`Server listening ${PORT} port`);
    });