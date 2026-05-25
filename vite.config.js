import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(),
        Sitemap({
            hostname: 'https://thrivesportpositive.com',
            dynamicRoutes: [
                '/methode',
                '/prix',
                '/sport',
                '/evaluation',
                '/booking',
                '/zones',
                '/a-propos',
                '/pack/performance',
                '/pack/avance',
                '/pack/essential',
                '/pack/diagnostic'
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
