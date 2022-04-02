import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Application from './components/Application.jsx';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <Provider store={ store }>
            <Application/>
        </Provider>
    </BrowserRouter>
);
