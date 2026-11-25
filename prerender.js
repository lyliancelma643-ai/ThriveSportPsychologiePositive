import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Les routes prérendues = le plan du site (docs/REFONTE-2026-11.md).
// Les anciennes URL (/prix, /liste-attente, /booking…) sont des 301 dans
// vercel.json : on ne les prérend pas. Garder cette liste identique à
// `dynamicRoutes` (+ '/') dans vite.config.js.
const routes = [
    '/',
    '/maison',
    '/programmes',
    '/programmes/groupe',
    '/programmes/individuel',
    '/methode',
    '/a-propos',
    '/partenaires',
    '/appel',
    '/confidentialite',
    '/conditions',
];

// index.html contient des balises <meta> statiques (description, Open Graph,
// Twitter). Une fois la page rendue, react-helmet-async ajoute les siennes
// (attribut data-rh) SANS retirer les statiques : les robots de partage lisent
// alors la première, celle de l'accueil. On retire donc les doublons statiques
// quand une version Helmet existe.
function dedoublonnerMeta(html) {
    const cle = (tag) => {
        const m = tag.match(/\s(?:name|property)="([^"]+)"/);
        return m ? m[1] : null;
    };
    const metas = html.match(/<meta\b[^>]*>/g) || [];
    const gerees = new Set(metas.filter((t) => /\sdata-rh="true"/.test(t)).map(cle).filter(Boolean));
    let resultat = html;
    for (const tag of metas) {
        const k = cle(tag);
        if (k && gerees.has(k) && !/\sdata-rh="true"/.test(tag)) {
            resultat = resultat.replace(tag, '');
        }
    }
    return resultat;
}

async function prerender() {
    console.log('Starting prerender process...');

    // Serve the dist directory locally
    const app = express();
    app.use(express.static(path.join(__dirname, 'dist')));

    // Fallback for SPA to ensure React Router handles the route client-side during Puppeteer's visit
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });

    const server = app.listen(0, async () => {
        const port = server.address().port;
        const baseUrl = `http://localhost:${port}`;
        console.log(`Local server started at ${baseUrl}`);

        try {
            let browser;
            if (process.env.VERCEL) {
                console.log('Running on Vercel - Using @sparticuz/chromium');
                const chromium = (await import('@sparticuz/chromium')).default;
                browser = await puppeteer.launch({
                    args: chromium.args,
                    defaultViewport: chromium.defaultViewport,
                    executablePath: await chromium.executablePath(),
                    headless: chromium.headless,
                    ignoreHTTPSErrors: true,
                });
            } else {
                console.log('Running locally - Using local Puppeteer');
                browser = await puppeteer.launch({
                    headless: "new",
                    args: ['--no-sandbox', '--disable-setuid-sandbox']
                });
            }

            for (const route of routes) {
                console.log(`Prerendering ${route}...`);
                const page = await browser.newPage();

                // Wait for network idle to ensure React has mounted and Helmet has updated the head
                await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' });

                // Get the complete HTML code
                let html = dedoublonnerMeta(await page.content());

                // Remove the script that injects the React app if you want true static, 
                // but since we want hydration, we keep it!

                // Determine output path
                let destPath;
                if (route === '/') {
                    destPath = path.join(__dirname, 'dist', 'index.html');
                } else {
                    destPath = path.join(__dirname, 'dist', route, 'index.html');
                }

                // Ensure directory exists
                const dir = path.dirname(destPath);
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }

                // Write HTML to file
                fs.writeFileSync(destPath, html);
                console.log(`Saved ${destPath}`);

                await page.close();
            }

            await browser.close();
            console.log('Prerender complete! All pages are static and SEO-friendly.');
        } catch (error) {
            console.error('Error during prerendering:', error);
            process.exit(1);
        } finally {
            server.close();
        }
    });
}

prerender();
