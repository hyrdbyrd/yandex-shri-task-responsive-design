const express = require('express');
const router = new express.Router();

// Get time of start server
const startTime = new Date();

router.get('/', (req, res) => {
    // Returns time as "hh:mm:ss"
    const newTime = new Date(
        // Returns the time elapsed since 
        // the server was opened as milliseconds
        Date.now() - startTime.getTime()
    );

    newTime.setHours((new Date()).getHours() - startTime.getHours());

    res.render('content', { 
        title: 'Статус сервера', 
        text: `Прошло времени с момента запуска сервера ${newTime.toLocaleTimeString()}` 
    });
});

module.exports = router;