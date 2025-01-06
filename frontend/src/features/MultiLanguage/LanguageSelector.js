// src/features/MultiLanguage/LanguageSelector.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className="language-selector">
            <label htmlFor="language">Select Language:</label>
            <select id="language" onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="fr">French</option>
                {/* Add more languages as needed */}
            </select>
        </div>
    );
};

export default LanguageSelector;
