// src/features/MultiLanguage/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to the Egyptian Map of Pi",
            // Add more English translations here
        },
    },
    ar: {
        translation: {
            welcome: "مرحبًا بكم في خريطة بي المصرية",
            // Add more Arabic translations here
        },
    },
    fr: {
        translation: {
            welcome: "Bienvenue sur la carte égyptienne de Pi",
            // Add more French translations here
        },
    },
    // Add more languages as needed
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // Default language
        fallbackLng: "en", // Fallback language
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
