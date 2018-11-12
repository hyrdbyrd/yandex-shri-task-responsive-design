import * as React from 'react';

import './Event.sss';
import { IEventProps } from './Event.d';

import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import { EventDataProps } from './Data/Data';

export class Event extends React.Component<IEventProps> {
    constructor(props: IEventProps) {
        super(props);
    }

    render() {
        return <RegistryConsumer>
            {regs => {
                const { props: event } = this;

                const cnBlock = cn(event.className);
                const cnEmpty = cn('Empty');

                const isCritical = event.type === 'critical';
                const postfix = isCritical ? '-white' : '';

                const EventDataBlock = regs['Event'].get<EventDataProps>('EventDataBlock');

                const eventDescBlock = event.description ? <div className={cnBlock('Description')}>
                    { event.description }
                </div> : null;

                const eventDataBlock = event.data ? <div className={cnBlock('Data')}>
                    <EventDataBlock obj={ event.data } type={ event.icon } />
                </div> : null;

                return <div className={cnBlock({ type: event.type, size: event.size })}>
                    <div className={cnEmpty()}>
                        <img className={cnBlock('Nav', ['Cross'])} src={`assets/cross${postfix}.svg`}/>
                    </div>
                    <header className={cnBlock('Header')}>
                        <div className={cnBlock() + 'Intro'}>
                            <img className={cnBlock('Icon')} src={`assets/${event.icon + postfix}.svg`}/>
                            <div className={cnBlock('Title')} data-title={ event.title }>
                                { event.title }
                            </div>
                        </div>
                        <div className={cnBlock() + 'Desc'}>
                            <div className={cnBlock('Source')}>
                                { event.source }
                            </div>
                            <div className={cnBlock('Time')}>
                                { event.time }
                            </div>
                        </div>
                    </header>
                    {
                        (event.description || event.data) &&
                            <div className={cnBlock('Content')}>
                                { eventDescBlock }
                                { eventDataBlock }
                            </div>
                    }
                    <div className={cnEmpty()}>
                        <img className={ cnBlock('Nav', ['Slide'])} src={`assets/next${postfix}.svg`} />
                    </div>
                </div>;
            }}
        </RegistryConsumer>;
    }
}
