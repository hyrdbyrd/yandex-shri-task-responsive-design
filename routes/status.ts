import { Router, Request, Response } from 'express';

// Get time of start server
const startTime: Date = new Date();

export const routerStatus: Router = Router().get('/', (req: Request, res: Response) => {
    // Returns time as "hh:mm:ss"
    const newTime: Date = new Date(
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
