import * as React from 'react';

import './Event.sss';
import { IEventProps } from './Event.d';

// @bem-react imports
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import { compose, withBemMod } from '@bem-react/core';

// Types and block import
import { EventDataBlock } from './Data/Data';
import { ButtonsType } from './Data/Buttons/Buttons';
import { ImageType } from './Data/Image/Image';
import { GraphType } from './Data/Stats/Stats';
import { TemperatureType } from './Data/Temperature/Temperature';
import { MusicType } from './Data/Music/Music';
import { cnEvent as cnBlock } from '../Pages/Events';

export class Event extends React.Component<IEventProps> {
    constructor(props: IEventProps) {
        super(props);
    }

    render() {
        return <RegistryConsumer>
            {regs => {
                const { props: event } = this;

                // Classnames
                const cnEmpty = cn('Empty');

                // Is critical? Get white image. Else standart icon.
                const postfix = event.type === 'critical' ? '-white' : '';

                // Import blocks from registry
                const EventReg = regs['Event'];
                const Stats = EventReg.get('Stats') as GraphType;
                const Music = EventReg.get('Music') as MusicType;
                const Image = EventReg.get('Image') as ImageType;
                const Buttons = EventReg.get('Buttons') as ButtonsType;
                const Temperature = EventReg.get('Temperature') as TemperatureType;

                // Set DataBlock (if correct type), else, return Base (EventDataBLock)
                const DataBlock = compose(
                    withBemMod('Buttons', { type: 'fridge' }, Buttons),
                    withBemMod('Image', { type: 'cam' }, Image),
                    withBemMod('Stats', { type: 'stats' }, Stats),
                    withBemMod('Temperature', { type: 'thermal' }, Temperature),
                    withBemMod('Music', { type: 'music' }, Music)
                )(EventDataBlock);

                const eventDescBlock = event.description ? <div className={cnBlock('Description')}>
                    { event.description }
                </div> : null;

                const eventDataBlock = event.data ? <div className={cnBlock('Data')}>
                    { <DataBlock {...event.data} type={event.icon} /> }
                </div> : null;

                return <div className={event.className}>
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
                    { (event.description || event.data) &&
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
