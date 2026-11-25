import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
    // Racine absolue : avec './', une URL à deux niveaux (/programmes/…)
    // chargeait /programmes/assets/… et recevait du HTML à la place du CSS/JS.
    base: '/',
    plugins: [
        react(),
        Sitemap({
            hostname: 'https://thrivesportpositive.com',
            // '/' est ajoutée par le plugin (ne pas la répéter ici) ; garder cette liste identique à prerender.js.
            dynamicRoutes: [
                '/maison',
                '/programmes',
                '/programmes/groupe',
                '/programmes/individuel',
                '/methode',
                '/a-propos',
                '/partenaires',
                '/appel',
                '/confidentialite',
                '/conditions'
            ],
            changefreq: 'monthly',
            priority: 0.8,
            generateRobotsTxt: false // On a déjà créé notre robots.txt sur mesure
        })
    ],
    server: {
        host: true, // Exposes the server to the network (crucial for iPad access)
    },
});
