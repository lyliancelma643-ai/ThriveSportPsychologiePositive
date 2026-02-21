import fs from 'fs/promises';
import path from 'path';

// Dossiers et fichiers à ignorer pour ne pas surcharger le fichier texte
const IGNORE_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.gemini']);
const IGNORE_FILES = new Set(['.DS_Store', 'package-lock.json', 'generate_context.js', 'gemini-context.txt']);
const IGNORE_EXTS = new Set([
    '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.webp',
    '.woff', '.woff2', '.ttf', '.eot',
    '.mp4', '.webm', '.pdf', '.zip'
]);

const OUTPUT_FILE = 'gemini-context.txt';

async function scanDirectory(dirPath, outputFileHandle) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            if (!IGNORE_DIRS.has(entry.name)) {
                await scanDirectory(fullPath, outputFileHandle);
            }
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();

            if (!IGNORE_FILES.has(entry.name) && !IGNORE_EXTS.has(ext)) {
                try {
                    const content = await fs.readFile(fullPath, 'utf8');
                    const relativePath = path.relative(process.cwd(), fullPath);

                    await outputFileHandle.write(`\n\n================================================================================\n`);
                    await outputFileHandle.write(`Fichier: ${relativePath}\n`);
                    await outputFileHandle.write(`================================================================================\n\n`);
                    await outputFileHandle.write(content);
                } catch (error) {
                    console.error(`Erreur lors de la lecture du fichier ${fullPath}:`, error.message);
                }
            }
        }
    }
}

async function main() {
    try {
        const outputFileHandle = await fs.open(OUTPUT_FILE, 'w');
        console.log(`Génération du fichier de contexte : ${OUTPUT_FILE}...`);

        // Commence à scanner depuis le dossier actuel (la racine du projet)
        await scanDirectory(process.cwd(), outputFileHandle);

        await outputFileHandle.close();
        console.log(`\nSuccès ! Tout le code du site a été regroupé dans le fichier "${OUTPUT_FILE}".`);
        console.log(`Vous pouvez maintenant donner ce fichier "${OUTPUT_FILE}" à Gemini pour une analyse complète.`);
    } catch (error) {
        console.error('Une erreur est survenue :', error);
    }
}

main();
