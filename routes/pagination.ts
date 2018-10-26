import { Router, Request, Response } from 'express';

declare interface IEvents {
    type: string;
}

declare interface IStatuses {
    events: IEvents[];
}

import { readFile } from 'fs';
import { resolve } from 'path';

const eventsPath: string = resolve(__dirname, '../events.json');

export const routerPagination: Router = Router()
    .get('/', (req: Request, res: Response) => {
        readFile(eventsPath, (err: Error, data: Buffer | string) => {
            if (err) {
                throw err;
            }

            res.render('events', { events: JSON.parse(data.toString()) });
        });
    })
    .get('/:pagination', (req: Request, res: Response) => {
        readFile(eventsPath, (err: Error, data: Buffer | string) => {
            if (err) {
                throw err;
            }

            // Get user GET url
            let str: string = req.params.pagination;
            // Parse our db
            const newEvents: IStatuses = JSON.parse(data.toString());

            // Format data
            const parts: number[] = str ? str.split(':').filter((val) => !isNaN(+val)).map(Number) : [];

            // If not get "to"
            if (!parts[1]) parts[1] = newEvents.events.length;
            // If not get "from"
            if (!parts[0]) parts[0] = 0;
            // If has get, try minus one
            else parts[0] -= parts[0] - 1 < 0 ? 0 : 1;

            // Format to object
            const slice = { from: parts[0], to: parts[1] };

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
