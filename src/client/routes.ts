import EventPage from '../components/Pages/Events';
import VideoPage from '../components/Pages/Videos';

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
