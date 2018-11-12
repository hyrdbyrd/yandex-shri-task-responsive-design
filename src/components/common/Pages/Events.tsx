import * as React from 'react';

import { IEvent, IEventProps } from '../Event/Event.d';
import * as DB from './events.json';

// Options
const events: IEvent[] = DB.events;
import { RegistryConsumer } from '@bem-react/di';

export function EventPage() {
    return (
        <>
            <div className='Content-Title'>Лента событий</div>
            <div className='Events'>
                {events && (
                    <RegistryConsumer>
                        {regs => {
                            // Or desktop or mobile version
                            const Event = regs['Page'].get<IEventProps>('Event');
                            return events.map((obj: IEvent, i: number) => <Event className='Event' key={i} {...obj} />)
                        }}
                    </RegistryConsumer>
                )}
            </div>
        </>
    );
}
