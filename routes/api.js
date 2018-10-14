const express = require('express');
const router = new express.Router();

const fs = require('fs');
const path = require('path');

const config = require('./statuses.json');

router
    .get('/', (req, res, next) => {
        fs.readFile(path.resolve(__dirname, './../events.json'), (err, data) => {
            if (err) {
                throw err;
            }

            data = JSON.parse(data.toString());
            let types = req.query.type;

            if (types) {
                types = types.split(':');

                // For queries like info:
                // or critical:
                // or :info
                types = types.filter(val => val.length > 0);
    
                if (!types.every(type => config.types.indexOf(type) + 1)) {
                    res.status(400);
                    next(new Error('Плохой запрос :('));
                    return;
                }
    
                let isCorrectType = new RegExp(`(${types.join('|')})`);
                data.events = data.events.filter(obj => isCorrectType.test(obj.type));
            }

            res.send(data);
        });
    })
    .use((error, req, res, next) => {
        const title = 400;
        const text = error.message;
        res.render('content', { title, text });
        next();
    });

module.exports = router;