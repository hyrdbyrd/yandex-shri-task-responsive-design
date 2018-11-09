import { Event as EventCommon } from '../../common/Event/Event';
import { IEventProps } from '../../common/Event/Event.d';

import './Event.sss';
import { EventDataBlock } from './Data/Data';

import { withRegistry, Registry } from '@bem-react/di';

const EventReg = new Registry({ id: 'Event' });
EventReg.set('EventDataBlock', EventDataBlock);

export const Event = withRegistry<IEventProps>(EventReg)(EventCommon);
