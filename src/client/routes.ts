import EventPage from '../components/Pages/Events';
import VideoPage from '../components/Pages/Videos';

const routes = [
    {
        path: '/events',
        component: EventPage as any,
        exact: true
    },
    {
        path: '/videos',
        component: VideoPage as any,
        exact: true
    }
];

export default routes;
