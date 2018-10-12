const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const events = require('./events.json').events;

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