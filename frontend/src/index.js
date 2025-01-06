// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Global styles
import './features/MultiLanguage/i18n'; // Import i18n configuration for multi-language support

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
