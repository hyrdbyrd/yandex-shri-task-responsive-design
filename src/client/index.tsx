import * as React from 'react';
import { hydrate } from 'react-dom';
import EventPage from '../components/Pages/Events';

hydrate(
    <EventPage />,
    document.querySelector('.app')
);
