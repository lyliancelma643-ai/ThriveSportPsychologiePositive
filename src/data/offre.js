// ─────────────────────────────────────────────────────────────────────────────
//  THRIVE Sport Positive — LA SEULE SOURCE des prix, faits chiffrés et réglages
//  du site. Aucun prix, aucune date, aucun nombre ne doit être écrit ailleurs.
//
//  Source : coffre « Cerveau THRIVE » — Gamme V3, Registre des décisions
//  (8, 13, 14, 15 et 17 nov. 2026), Prix_Paiement_Garantie.
//  Mis à jour le 24 nov. 2026.
//
//  Pour changer un prix : modifiez la valeur ici, rien d'autre.
// ─────────────────────────────────────────────────────────────────────────────

const env = import.meta.env || {};

// ── Entreprise ───────────────────────────────────────────────────────────────
export const ENTREPRISE = {
    nom: 'THRIVE Sport Positive',
    raisonSociale: 'THRIVE Sport Positive inc.', // statuts déposés au REQ le 16 nov. 2026
    courriel: 'info@thrivesportpositive.com',
    // [À CONFIRMER par Lylian] — numéro repris de l'ancien site.
    telephone: '(263) 362-2030',
    telephoneHref: 'tel:+12633622030',
    ville: 'Montréal',
    // Lieu des séances : jamais le nom d'un centre sans entente écrite.
    lieu: 'Sur le Plateau-Mont-Royal, à Montréal. Le lieu exact vous est confirmé à l’inscription.',
    quartiers: ['Plateau-Mont-Royal', 'Mile End', 'Outremont', 'Westmount'],
    site: 'https://thrivesportpositive.com',
    lancement: 'janvier 2027',
};

// ── Taxes ────────────────────────────────────────────────────────────────────
//  Décision du 1er nov. : rien d'affiché sous 30 000 $ de ventes.
//  ⚠️ Inscription TPS/TVQ prévue en décembre avec le comptable : dès qu'elle est
//  faite, remplacez cette ligne par 'Taxes applicables en sus.' (ou le texte
//  validé par le comptable).
export const NOTE_TAXES = 'Aucune taxe à ajouter.';

// ── Garantie (formulation décidée, à ne pas reformuler) ──────────────────────
export const GARANTIE =
    'Si vous arrêtez après la séance 2, les versements déjà faits vous sont remboursés.';

// ── Paiement des programmes ──────────────────────────────────────────────────
export const PAIEMENT_PROGRAMMES =
    '2 versements égaux : au début de la séance 1, puis au début de la séance 7. Rien n’est prélevé avant la séance 1.';

// ── THRIVE Maison (l'application) ────────────────────────────────────────────
export const MAISON = {
    nom: 'THRIVE Maison',
    accroche: 'Le moment qui compte',
    slogan: 'Moins de temps, plus de bons moments.',
    mascotte: 'Cabri',
    dureeActivite: '10 minutes',
    semaines: 13,
    activites: 53, // nombre réellement présent dans l'app au 18 nov. 2026
    ages: '8 à 17 ans',
    // Freemium (décision du 15 nov.)
    gratuit: '1 activité par semaine, pendant les 13 semaines',
    premium: 'Les 3 activités de chaque semaine et les compléments',
    prixMensuel: 14.99,
    prixAnnuel: 99,
    essaiPremium: '1 mois offert',
    // « Décembre gratuit » : tout est ouvert gratuitement jusqu'à cette date.
    // Le bandeau disparaît tout seul le lendemain.
    toutGratuitJusquAu: '2026-12-31',
    // 'beta'  → l'app est en bêta : le bouton ouvre le formulaire « Recevoir
    //           mon accès » (/maison#acces), Lylian envoie l'invitation.
    // 'ouvert'→ le bouton mène à l'inscription web et aux magasins d'applications.
    statut: env.VITE_MAISON_STATUT || 'beta',
    appStoreUrl: env.VITE_APP_STORE_URL || null,
    googlePlayUrl: env.VITE_GOOGLE_PLAY_URL || null,
};

// ── Programmes en présentiel ─────────────────────────────────────────────────
export const OFFRE_FONDATRICE = {
    active: true,
    finLe: '31 mars 2027', // « 600 $ les 3 premiers mois » de 2027
    texte: 'Offre fondatrice : THRIVE Groupe à 600 $ et le premier mois de THRIVE Maison premium offert, pour toute inscription avant le 31 mars 2027.',
};

export const PROGRAMMES = {
    groupe: {
        id: 'groupe',
        nom: 'THRIVE Groupe',
        accroche: 'Aller vers les autres',
        path: '/programmes/groupe',
        badge: 'Programme phare',
        prix: 650,
        prixFondateur: 600, // affiché tant que OFFRE_FONDATRICE.active
        seances: 13,
        dureeSeance: '60 min',
        enfantsMax: 4,
        resume: '13 ateliers sportifs multisports de 60 minutes, à 4 enfants maximum.',
        waitlistPack: 'ALLER_VERS_LES_AUTRES',
    },
    individuel: {
        id: 'individuel',
        nom: 'THRIVE Individuel',
        accroche: 'Oser essayer',
        path: '/programmes/individuel',
        prix: 1500,
        seances: 13,
        dureeSeance: '60 min',
        resume: '13 séances en tête-à-tête de 60 minutes, au rythme de votre enfant.',
        waitlistPack: 'OSER_ESSAYER',
    },
    complet: {
        id: 'complet',
        nom: 'THRIVE Complet',
        accroche: 'On commence seul, on finit avec les autres',
        path: '/programmes/individuel#complet',
        prix: 2000,
        seances: 13,
        resume: 'THRIVE Individuel d’abord, puis l’entrée dans la prochaine vague de THRIVE Groupe.',
        waitlistPack: null,
    },
};

// Prix affiché du Groupe selon l'offre fondatrice.
export const prixGroupe = () =>
    OFFRE_FONDATRICE.active ? PROGRAMMES.groupe.prixFondateur : PROGRAMMES.groupe.prix;

// ── Appel de découverte ──────────────────────────────────────────────────────
export const APPEL = {
    duree: '15 min',
    // Lien Cal.com de l'événement de 15 min (ex. « thrive-sport-positive/15min »).
    // Tant qu'il est vide, la page /appel affiche le formulaire de rappel.
    calLink: env.VITE_CAL_LINK || '',
};

// ── Langue ───────────────────────────────────────────────────────────────────
//  Le site est en français. L'anglais reste caché tant que 100 % des textes
//  ne sont pas traduits (à réactiver avant toute publicité à Westmount).
export const AFFICHER_ANGLAIS = env.VITE_SHOW_EN === 'true';

// ── Utilitaires d'affichage ──────────────────────────────────────────────────
export const formatPrix = (n) => {
    const entier = Number.isInteger(n);
    return new Intl.NumberFormat('fr-CA', {
        minimumFractionDigits: entier ? 0 : 2,
        maximumFractionDigits: 2,
    }).format(n) + ' $';
};

export const decembreGratuitActif = (aujourdHui = new Date()) => {
    const fin = new Date(MAISON.toutGratuitJusquAu + 'T23:59:59-05:00');
    return aujourdHui <= fin;
};
