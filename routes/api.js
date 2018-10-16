const express = require('express');
const router = new express.Router();

const fs = require('fs');
const path = require('path');

// All correct types
const config = require('./statuses.json');
function sendEvents(req, res, next) {
    fs.readFile(path.resolve(__dirname, './../events.json'), (err, data) => {
        if (err) {
            throw err;
        }

        // Parse db
        data = JSON.parse(data.toString());
        let types = req.query.type;

        // If has type
        if (types) {
            types = types.split(':');

            // For queries like info:
            // or critical:
            // or :info
            types = types.filter(val => val.length > 0);

            if (types.some(type => !(config.types.indexOf(type) + 1))) {
                res.status(400);
                next(new Error('Плохой запрос :('));
                return;
            }

            data.events = data.events.filter(obj => types.some(type => type === obj.type));
        }

        res.send(data);
    });
}

router
    .get('/', (req, res, next) => {
        sendEvents(req, res, next);
    })
    .post('/', (req, res, next) => {
        sendEvents(req, res, next);
    });

module.exports = router;