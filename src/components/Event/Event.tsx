import * as React from 'react';

import './Event@simple.sss';

import { Music } from './Music/Music';
import { Temperature } from './Temperature/Temperature';
import { Buttons } from './Buttons/Buttons';
import { Image } from './Image/Image';

import { IEvent, IEventData } from './Event.d';

export class EventDataBlock extends React.Component<{obj: IEventData, type: string}> {
    constructor(props: {obj: IEventData, type: string}) {
        super(props);
    }

    render() {
        const { obj: data, type } = this.props;
        let res = <div></div>;

        if (type === 'stats') {
            res = <img src='assets/Richdata.svg' />
        } else if (type === 'thermal') {
            res = <Temperature obj={ data } />
        } else if (type === 'music') {
            res = <Music obj={ data } />
        } else if (type === 'fridge') {
            res = <Buttons obj={ data } />
        } else if (type === 'cam') {
            res = <Image />
        }

        return res;
    }
}

export class Event extends React.Component<{obj: IEvent}> {
    constructor(props: {obj: IEvent}) {
        super(props);
    }

    render() {
        const { obj: event } = this.props;

        const isCritical = event.type === 'critical';
        const postfix = isCritical ? '-white' : '';

        const eventDescBlock = event.description ? <div className="event__description">
            { event.description }
        </div> : null;

        const eventDataBlock = event.data ? <div className="event__data">
            <EventDataBlock obj={ event.data } type={ event.icon } />
        </div> : null;

        return (
            <div className={`event event_size_${event.size} event_type_${event.type}`}>
                <div className='empty empty_cross'>
                    <img className='event__nav cross' src={`assets/cross${postfix}.svg`}/>
                </div>
                <header className='event__header'>
                    <div className='event-intro'>
                        <img className='event__icon' src={`assets/${event.icon + postfix}.svg`}/>
                        <div className='event__title' data-title={ event.title }>
                            { event.title }
                        </div>
                    </div>
                    <div className="event-desc">
                        <div className="event__source">
                            { event.source }
                        </div>
                        <div className="event__time">
                            { event.time }
                        </div>
                    </div>
                </header>
                {
                    (event.description || event.data) &&
                        <div className="event__content">
                            { eventDescBlock }
                            { eventDataBlock }
                        </div>
                }
                <div className='empty empty_slide'>
                    <img className='event__nav slide' src={`assets/next${postfix}.svg`} />
                </div>
            </div>
        );
    }
}
