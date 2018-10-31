import * as React from 'react';
import { render } from 'react-dom';

import { Event } from '../Event/Event';
import { IEvent } from '../Event/Event.d';

import * as DB from './events.json';

// Options
const events: IEvent[] = DB.events;

export default function EventPage() {
    return <div className='events'>
        { events && events.map((obj: IEvent, i: number) => <Event key={i} obj={obj} />) }
    </div>;
}

// render(
//     <EventPage />,
//     document.querySelector('.app')
// );
