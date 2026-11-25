import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import './i18n';
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
