import * as React from 'react';

import { IEvent } from '../Event/Event.d';

import * as DB from './events.json';

// Options
const events: IEvent[] = DB.events;

import { Event } from './../Event/Event';

export default function EventPage(props?: { platform?: 'desktop' | 'mobile' }) {

    return <div className='events'>
        { events && events.map((obj: IEvent, i: number) => <Event key={i} obj={obj} />) }
    </div>;
}
