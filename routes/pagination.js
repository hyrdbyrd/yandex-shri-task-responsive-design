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
            
            let pags = req.params.pagination;
            pags = pags ? pags.split(':').filter(val => !isNaN(+val)) : [];

            const newEvents = JSON.parse(data.toString());

            if (pags.length < 2) {
                res.render('events', { events: newEvents } );
            } else {
                pags[0] -= 1;

                if (pags[0] < 0) pags[0] = 0; 
                if (pags[1] < 0) pags[1] = 0;

                if (pags[0] > pags[1]) {
                    [pags[0], pags[1]] = [pags[1], pags[0]]
                }

                newEvents.events = newEvents.events.slice(pags[0], pags[1]);
                if (newEvents.events.length === 0) {
                    res.render('events', { events: JSON.parse(data.toString()) });
                } else {
                    res.render('events', { events: newEvents });
                }
            }
        });
    });

module.exports = router;