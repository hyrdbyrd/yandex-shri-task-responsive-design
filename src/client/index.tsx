import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

interface IWindow extends Window { PLATFORM: 'desktop' | 'mobile'; }
const WINDOW = window as IWindow;

hydrate(
    <BrowserRouter>
        <App platform={ WINDOW.PLATFORM } />
    </BrowserRouter>,
    document.querySelector('.app')
);
