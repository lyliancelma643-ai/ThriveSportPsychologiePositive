// ─────────────────────────────────────────────────────────────────────────────
//  THRIVE Sport Positive — Configuration centralisée de la page Prix
//
//  Pour modifier les prix ou les features :
//  → Modifiez UNIQUEMENT ce fichier.
//  → Les textes sont dans src/locales/fr/translation.json (clés "pricing.*")
//  → Le composant src/pages/Prix.jsx lit automatiquement ces valeurs.
// ─────────────────────────────────────────────────────────────────────────────

// ── Palettes de couleurs par pack ─────────────────────────────────────────────
//    Toutes héritent du design system #1B263B / #C5A059 / #8F9779
export const PACK_THEMES = {
    diagnostic: {
        accent: '#8F9779',         // vert sage
        accentLight: '#8F977915',
        accentBorder: '#8F977940',
        iconBg: '#8F977918',
    },
    essential: {
        accent: '#1B263B',         // bleu marine
        accentLight: '#1B263B0D',
        accentBorder: '#1B263B30',
        iconBg: '#1B263B12',
    },
    advanced: {
        accent: '#C5A059',         // or — pack recommandé
        accentLight: '#C5A05912',
        accentBorder: '#C5A05970',
        iconBg: '#C5A05918',
    },
    performance: {
        accent: '#1B263B',         // bleu marine profond
        accentLight: '#1B263B0D',
        accentBorder: '#1B263B40',
        iconBg: '#1B263B12',
    },
};

// ── Données des packs ──────────────────────────────────────────────────────────
export const PRICING_DATA = [
    {
        id: 'diagnostic',
        price: 397,
        sessions: 2,
        isRecommended: false,
        isEntry: true,
        // Clés i18n des features (src/locales/.../translation.json → pricing.diagnostic.*)
        featureKeys: ['f0', 'f1', 'f2', 'f3'],
    },
    {
        id: 'essential',
        price: 1497,
        sessions: 13,
        isRecommended: false,
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4'],
    },
    {
        id: 'advanced',
        price: 1997,
        sessions: 13,
        isRecommended: true,   // ← pack mis en avant visuellement
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'],
    },
    {
        id: 'performance',
        price: 2497,
        sessions: 13,
        isRecommended: false,
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10'],
    },
];

// ── Livrables concrets (section preuves) ──────────────────────────────────────
//    id = suffixe de la clé i18n  pricing.proof.{id}_title / _desc / _pack
export const PROOF_ITEMS = [
    { id: 'scorecard',    icon: 'BarChart2', packs: 'Tous les packs' },
    { id: 'rapport',      icon: 'FileText',  packs: 'Tous les packs' },
    { id: 'observations', icon: 'Eye',       packs: 'Essential → Performance' },
    { id: 'callParent',   icon: 'Phone',     packs: 'Avancé & Performance' },
    { id: 'cahier',       icon: 'BookOpen',  packs: 'Performance' },
    { id: 'pilotage',     icon: 'Compass',   packs: 'Performance' },
];

// ── Questions FAQ ─────────────────────────────────────────────────────────────
//    id = suffixe de la clé i18n pricing.faq.{id}_q / _a
export const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'];

// ── Étapes de montée en gamme ──────────────────────────────────────────────────
export const UPGRADE_STEPS = [
    { id: 'diagnostic', color: '#8F9779' },
    { id: 'essential',  color: '#1B263B' },
    { id: 'advanced',   color: '#C5A059' },
    { id: 'performance',color: '#1B263B' },
];
