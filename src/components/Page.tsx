// Import frameworks
import * as React from 'react';
import { render } from 'react-dom';

// Import options and stylesheet
import './Page.sss';
import * as DB from './events.json';

// Components
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';

import { Event } from './Event/Event';
import { IEvent } from './Event/Event.d';

// Options
const events: IEvent[] = DB.events;

render(
    (
        <div className='main'>
            <Header />
            <Content title='Лента событий'>
                <div className='events'>
                    { events && events.map((obj: IEvent, i: number) => <Event key={i} obj={obj} />) }
                </div>
            </Content>
            <Footer />
        </div>
    ),
    document.querySelector('.app')
);
