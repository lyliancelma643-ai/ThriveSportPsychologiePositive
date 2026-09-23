// ─────────────────────────────────────────────────────────────────────────────
//  THRIVE Sport Positive — Configuration centralisée de la page Prix
//
//  Pour modifier les prix ou les features :
//  → Modifiez UNIQUEMENT ce fichier.
//  → Les textes sont dans src/locales/fr/translation.json (clés "pricing.*")
//  → Le composant src/pages/Prix.jsx lit automatiquement ces valeurs.
//
//  Source de vérité produit : fiches produit verrouillées du 20 septembre 2026
//  (Parties 1 à 4) — 3 programmes, prix affichés « + tx » :
//    · Oser essayer          1 500 $ + tx  · 13 séances 1:1
//    · Aller vers les autres 2 000 $ + tx  · 13 séances 1:1 + 13 en groupe
//    · Le moment qui compte     15 $ + tx  toutes les 2 semaines (abonnement)
//  Les anciens packs Essentiel / Avancé / Performance sont retirés de l'offre.
// ─────────────────────────────────────────────────────────────────────────────

// ── Palettes de couleurs par programme ────────────────────────────────────────
//    Toutes héritent du design system #1B263B / #C5A059 / #8F9779
export const PACK_THEMES = {
    essayer: {
        accent: '#B07D4B',         // Bronze
        accentLight: '#B07D4B0D',
        accentBorder: '#B07D4B30',
        iconBg: '#B07D4B12',
    },
    autres: {
        accent: '#94A3B8',         // Argent
        accentLight: '#94A3B812',
        accentBorder: '#94A3B870',
        iconBg: '#94A3B818',
    },
    moment: {
        accent: '#C5A059',         // Or
        accentLight: '#C5A0590D',
        accentBorder: '#C5A05940',
        iconBg: '#C5A05912',
    },
};

// ── Données des programmes ─────────────────────────────────────────────────────
//    Ordre d'affichage : programme approfondi à gauche, programme principal au
//    centre (mis en avant), l'abonnement « à la maison » à droite.
//    sessions : nombre mis en valeur sur la carte (absent pour l'abonnement).
//    action   : où mène le bouton d'action principal de la carte.
//      'booking' → la réservation (liste d'attente, comme l'onglet Réservation)
//      'signup'  → la création de compte dans l'app web
export const PRICING_DATA = [
    {
        id: 'autres',
        path: '/programmes/aller-vers-les-autres',
        price: 2000,
        sessions: 26,
        action: 'booking',
        isRecommended: false,
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
    },
    {
        id: 'essayer',
        path: '/programmes/oser-essayer',
        price: 1500,
        sessions: 13,
        action: 'booking',
        isRecommended: true,   // ← programme principal, mis en avant visuellement
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
    },
    {
        id: 'moment',
        path: '/programmes/le-moment-qui-compte',
        price: 15,
        action: 'signup',
        isRecommended: false,
        isEntry: true,         // ← badge « À la maison ! »
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
    },
];

// ── Ce qui protège le parent (section preuves) ────────────────────────────────
//    id = suffixe de la clé i18n  pricing.proof.{id}_title / _desc / _pack
export const PROOF_ITEMS = [
    { id: 'decouverte', icon: 'Compass' },
    { id: 'garantie',   icon: 'Shield' },
    { id: 'versements', icon: 'Wallet' },
    { id: 'mesure',     icon: 'BarChart2' },
    { id: 'book',       icon: 'BookOpen' },
    { id: 'essai',      icon: 'Clock' },
];

// ── Questions FAQ ─────────────────────────────────────────────────────────────
//    id = suffixe de la clé i18n pricing.faq.{id}_q / _a
export const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'];

// ── Par où commencer ───────────────────────────────────────────────────────────
export const UPGRADE_STEPS = [
    { id: 'moment',  color: '#1B263B' },
    { id: 'essayer', color: '#C5A059' },
    { id: 'autres',  color: '#1B263B' },
];
