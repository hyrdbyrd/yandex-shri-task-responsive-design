const express = require('express');
const router = new express.Router();

const fs = require('fs');
const path = require('path');

const config = require('./statuses.json');

router.get('/', (req, res) => {
    fs.readFile(path.resolve(__dirname, './../events.json'), (err, data) => {
        if (err) {
            throw err;
        }

        data = JSON.parse(data.toString());
        let types = req.query.type || [];

        if (types) {
            types = types.split(':');
        }

        if (!types.every(type => config.types.indexOf(type) + 1)) {
            res.status(400);
            return;
        }

        types.forEach(type => {
            data = data.events.filter(obj => obj.type === type);
        });

        res.send(data);
    });
});

module.exports = router;