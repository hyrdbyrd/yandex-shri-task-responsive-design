import * as React from 'react';

import { IEvent, IEventProps } from '../Event/Event.d';
import * as DB from './events.json';

// Options
const events: IEvent[] = DB.events;
import { RegistryConsumer } from '@bem-react/di';
import { compose, withBemMod } from '@bem-react/core';

export function EventPage() {
    return <>
        <div className='Content-Title'>Лента событий</div>
        <div className='Events'>
            {events && (
                <RegistryConsumer>
                    {regs => {
                        // Or desktop or mobile version
                        const EventCommon = regs['Page'].get<IEventProps>('Event');
                        const Event = compose(
                            withBemMod<IEventProps>('Event', { size: 's' }),
                            withBemMod<IEventProps>('Event', { size: 'm' }),
                            withBemMod<IEventProps>('Event', { size: 'l' }),
                            withBemMod<IEventProps>('Event', { type: 'info' }),
                            withBemMod<IEventProps>('Event', { type: 'critical' }),
                        )(EventCommon);

                        return events.map((obj: IEvent, i: number) => <Event key={i} {...obj} />)
                    }}
                </RegistryConsumer>
            )}
        </div>
    </>;
}
