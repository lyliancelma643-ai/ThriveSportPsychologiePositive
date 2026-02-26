import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(),
        Sitemap({
            hostname: 'https://thrivetutorpositive.com',
            dynamicRoutes: [
                '/methode',
                '/programmes',
                '/sport',
                '/evaluation',
                '/booking',
                '/zones',
                '/a-propos'
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
