import { Router, Request, Response, NextFunction, RequestParamHandler } from 'express';

declare interface IEvents {
    type: string;
}

declare interface IStatuses {
    events: IEvents[];
}

import { readFile, readFileSync } from 'fs';
import { resolve } from 'path';

// All correct types
const config = JSON.parse(readFileSync(resolve(__dirname, './statuses.json')).toString());

function sendEvents(req: Request, res: Response, next: NextFunction) {
    readFile(resolve(__dirname, './../events.json'), (err: Error, data: Buffer) => {
        if (err) {
            throw err;
        }

        // Parse db
        const result: IStatuses = JSON.parse(data.toString());
        let types = req.query.type;

        // If has type
        if (types) {
            types = types.split(':');

            // For queries like info:
            // or critical:
            // or :info
            types = types.filter((val) => val.length > 0);

            if (types.some((type) => !((config as any).types.indexOf(type) + 1))) {
                res.status(400);
                next(new Error('Плохой запрос :('));
                return;
            }

            result.events = result
                .events
                .filter((obj) => types.some((type) => type === obj.type));
        }

        res.send(result);
    });
}

export const routerApi: Router = Router()
    .get('/', sendEvents)
    .post('/', sendEvents);
