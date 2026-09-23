// URL de l'application THRIVE (espace membre / connexion / création de compte).
// Configurable via la variable d'env Vite VITE_APP_URL ; sinon app locale en dev,
// app déployée sur Vercel en production.
export const APP_URL = import.meta.env.VITE_APP_URL
    || (import.meta.env.PROD ? 'https://app.thrivesportpositive.com' : 'http://localhost:3001');

export const APP_LOGIN_URL = `${APP_URL}/login`;

// L'app n'a pas de route d'inscription dédiée : la création de compte est un
// onglet de /login. `mode=signup` est ignoré aujourd'hui (le parent clique sur
// « Créer un compte ») et ouvrira l'onglet directement si l'app le lit un jour.
export const APP_SIGNUP_URL = `${APP_LOGIN_URL}?mode=signup`;
