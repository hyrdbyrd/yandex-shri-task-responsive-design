import { EventPage as EventPageCommon } from '../../common/Pages/Events';
import { Registry, withRegistry } from '@bem-react/di';
import { Event } from '../Event/Event';

const PageReg = new Registry({ id: 'Page' });
PageReg.set('Event', Event);

export const EventPage = withRegistry(PageReg)(EventPageCommon);
