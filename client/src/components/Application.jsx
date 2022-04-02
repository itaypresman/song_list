import React from 'react';
import { Routes, Route } from 'react-router';
import Upload from './pages/Upload/index.jsx';
import List from './pages/List/index.jsx';


export default function () {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={ <Upload /> }/>
                <Route path='/songs' element={ <List /> }/>
            </Routes>
        </React.Fragment>
    );
}
