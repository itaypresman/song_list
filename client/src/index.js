import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Application from './components/Application.jsx';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <Application/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);
