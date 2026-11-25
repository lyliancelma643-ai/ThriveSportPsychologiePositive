import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';
import { AFFICHER_ANGLAIS } from './data/offre';

// Le site est en français. L'anglais reste installé mais caché tant que
// AFFICHER_ANGLAIS (src/data/offre.js) est faux : la langue est alors forcée.
// Quand l'anglais sera réactivé, la détection prend le relais, limitée au
// paramètre d'URL (?lng=en) puis au choix mémorisé — jamais à la langue du
// navigateur.
const resources = {
    fr: { translation: translationFR },
    en: { translation: translationEN },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: AFFICHER_ANGLAIS ? undefined : 'fr',
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en'],
        nonExplicitSupportedLngs: true,
        debug: false,
        detection: {
            order: ['querystring', 'localStorage'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false, // React échappe déjà
        },
    });

export default i18n;
