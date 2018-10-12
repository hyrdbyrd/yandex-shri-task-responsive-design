const express = require('express');
const router = new express.Router();

// Get time from 19[7-9][0-9] year :)
const startTime = Date.now();

router.get('/', (req, res) => {
    // Returns time as "hh:mm:ss"
    const newTime = (new Date(
        // Returns the time elapsed since 
        // the server was opened as milliseconds
        Date.now() - startTime
    )).toLocaleTimeString();

    console.log(newTime);

    res.render('content', { 
        title: 'Статус сервера', 
        text: `Прошло времени с момента запуска сервера ${newTime}` 
    });
});

module.exports = router;