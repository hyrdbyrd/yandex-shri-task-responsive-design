import { EventPage } from './Pages/Events';
import { VideoPage } from './Pages/Videos';

const routes = [
    {
        path: '/events',
        component: EventPage,
        exact: true
    },
    {
        path: '/videos',
        component: VideoPage,
        exact: true
    }
];

export default routes;
