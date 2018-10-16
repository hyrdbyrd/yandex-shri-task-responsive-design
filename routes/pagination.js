const fs = require('fs');
const path = require('path');

const express = require('express');

const router = express.Router();
const eventsPath = path.resolve(__dirname, '../events.json');

router
    .get('/', (req, res) => {
        fs.readFile(eventsPath, (err, data) => {
            if (err) {
                throw err;
            }

            res.render('events', { events: JSON.parse(data.toString()) });
        });
    })
    .get('/:pagination', (req, res) => {
        fs.readFile(eventsPath, (err, data) => {
            if (err) {
                throw err;
            }
            
            // Get user GET url
            let slice = req.params.pagination;
            // Parse our db
            const newEvents = JSON.parse(data.toString());


            // Format data
            slice = slice ? slice.split(':').filter(val => !isNaN(+val)) : [];

            // If not get "to"
            if (!slice[1]) slice[1] = newEvents.events.length;
            // If not get "from"
            if (!slice[0]) slice[0] = 0;
            // If has get, try minus one
            else slice[0] -= slice[0] - 1 < 0 ? 0 : 1;

            // Format to object
            slice = { from: slice[0], to: slice[1] };

            // If "from" bigger than "to"
            if (slice.from > slice.to) {
                [slice.from, slice.to] = [slice.to, slice.from];
            }

            newEvents.events = newEvents.events.slice(slice.from, slice.to);
            if (newEvents.events.length === 0) {
                res.render('events', { events: JSON.parse(data.toString()) });
            } else {
                res.render('events', { events: newEvents });
            }
        });
    });

module.exports = router;