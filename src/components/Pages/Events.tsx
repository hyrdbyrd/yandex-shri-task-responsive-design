import * as React from 'react';

import { IEvent } from '../Event/Event.d';

import * as DB from './events.json';

// Options
const events: IEvent[] = DB.events;
import { Event as EventPlatfs } from '../Event/index';

type EventPageProps = { staticContext: { platform: 'desktop' | 'mobile' } };

export default function EventPage(props?: EventPageProps) {
    if (props.staticContext) {
        const Event = EventPlatfs[props.staticContext.platform]();
        return [
            <div className='content__title' key={1}>Лента событий</div>,
            <div className='events' key={2}>
                { events && events.map((obj: IEvent, i: number) => <Event key={i} obj={obj} />) }
            </div>
        ];
    } else {
        const Event = EventPlatfs[window.PLATFORM]();
        return [
            <div className='content__title' key={1}>Лента событий</div>,
            <div className='events' key={2}>
                { events && events.map((obj: IEvent, i: number) => <Event key={i} obj={obj} />) }
            </div>
        ]
    }
}
