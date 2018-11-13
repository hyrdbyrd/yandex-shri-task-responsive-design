import * as React from 'react';

import { IEvent, IEventProps } from '../Event/Event.d';
import * as DB from './events.json';

// Options
const events: IEvent[] = DB.events;
import { RegistryConsumer } from '@bem-react/di';
import { compose, withBemMod } from '@bem-react/core';
import { cn } from '@bem-react/classname';

export const cnCard = cn('Event');

export function EventPage() {
    return <>
        <div className='Content-Title'>Лента событий</div>
        <div className='Events'>
            {events && (
                <RegistryConsumer>
                    {regs => {
                        // Or desktop or mobile version
                        const EventCommon = regs['Page'].get<IEventProps>(cnCard());
                        const Event = compose(
                            withBemMod<IEventProps>(cnCard(), { size: 's' }),
                            withBemMod<IEventProps>(cnCard(), { size: 'm' }),
                            withBemMod<IEventProps>(cnCard(), { size: 'l' }),
                            withBemMod<IEventProps>(cnCard(), { type: 'info' }),
                            withBemMod<IEventProps>(cnCard(), { type: 'critical' }),
                        )(EventCommon);

                        return events.map((obj: IEvent, i: number) => <Event key={i} {...obj} />)
                    }}
                </RegistryConsumer>
            )}
        </div>
    </>;
}
