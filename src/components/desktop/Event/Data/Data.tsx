import { EventDataBlock as EventDataBlockCommon, EventDataProps } from '../../../common/Event/Data/Data';
import { Registry, withRegistry } from '@bem-react/di';

const DataReg = new Registry({ id: 'Data' });

DataReg.set('Buttons', require('./Buttons/Buttons').Buttons)
DataReg.set('Temperature', require('./Temperature/Temperature').Temperature)
DataReg.set('Stats', require('./Stats/Stats').Stats)
DataReg.set('Music', require('./Music/Music').Music)
DataReg.set('Image', require('./Image/Image').Image)

export const EventDataBlock = withRegistry<EventDataProps>(DataReg)(EventDataBlockCommon);
