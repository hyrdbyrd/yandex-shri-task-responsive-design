import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/// <reference path='Platform.d.ts' />

hydrate(
    <BrowserRouter>
        <App platform={ window.PLATFORM } />
    </BrowserRouter>,
    document.querySelector('.app')
);
