import * as React from 'react';

import { IEventData } from '../Event.d';
import { RegistryConsumer } from '@bem-react/di';
import { withBemMod, compose } from '@bem-react/core';

export type EventDataProps = {
    obj: IEventData,
    type: string,
}

export class EventDataBlock extends React.Component<EventDataProps> {
    constructor(props: EventDataProps) {
        super(props);
    }

    render() {
        const { obj: data, type } = this.props;

        return <RegistryConsumer>
            { regs => {
                const EventReg = regs['Data'];

                const Stats = EventReg.get('Stats');
                const Temperature = EventReg.get<{obj: IEventData}>('Temperature');
                const Music = EventReg.get<{obj: IEventData}>('Music');
                const Buttons = EventReg.get<{obj: IEventData}>('Buttons');
                const Image = EventReg.get('Image');

                if (type === 'stats') {
                    return <Stats />;
                } else if (type === 'thermal') {
                    return <Temperature obj={data } />
                } else if (type === 'music') {
                    return <Music obj={data } />
                } else if (type === 'fridge') {
                    return <Buttons obj={data } />
                } else if (type === 'cam') {
                    return <Image />
                } else {
                    return <div></div>
                }
            } }
        </RegistryConsumer>
    }
}
