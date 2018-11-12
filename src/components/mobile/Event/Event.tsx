import { Event as EventCommon } from '../../common/Event/Event';
import { IEventProps } from '../../common/Event/Event.d';

import './Event.sss';

import { withRegistry, Registry } from '@bem-react/di';

const EventReg = new Registry({ id: 'Event' });
EventReg.set('Temperature', require('./Data/Temperature/Temperature').Temperature)
EventReg.set('Buttons', require('./Data/Buttons/Buttons').Buttons)
EventReg.set('Stats', require('./Data/Stats/Stats').Stats)
EventReg.set('Music', require('./Data/Music/Music').Music)
EventReg.set('Image', require('./Data/Image/Image').Image)


export const Event = withRegistry<IEventProps>(EventReg)(EventCommon);
