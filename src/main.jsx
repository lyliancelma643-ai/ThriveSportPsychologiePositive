import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
// Polices auto-hébergées (aucun appel à Google Fonts : plus rapide, et rien ne
// part vers un tiers à l'ouverture de la page — Loi 25).
import '@fontsource/figtree/latin-400.css';
import '@fontsource/figtree/latin-500.css';
import '@fontsource/figtree/latin-600.css';
import '@fontsource/figtree/latin-700.css';
import '@fontsource/instrument-serif/latin-400.css';
import '@fontsource/instrument-serif/latin-400-italic.css';
import './styles.css';

// Pas de mesure pendant le prérendu (Puppeteer / HeadlessChrome).
const estPrerendu = typeof navigator !== 'undefined' && /HeadlessChrome|Puppeteer/i.test(navigator.userAgent);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            {!estPrerendu && <Analytics />}
        </HelmetProvider>
    </React.StrictMode>,
);
