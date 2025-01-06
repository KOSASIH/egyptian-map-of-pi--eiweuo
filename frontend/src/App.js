// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                {routes}
            </div>
        </Router>
    );
};

export default App;
