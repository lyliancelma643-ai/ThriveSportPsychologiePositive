// ─────────────────────────────────────────────────────────────────────────────
//  THRIVE Sport Positive — Configuration centralisée de la page Prix
//
//  Pour modifier les prix ou les features :
//  → Modifiez UNIQUEMENT ce fichier.
//  → Les textes sont dans src/locales/fr/translation.json (clés "pricing.*")
//  → Le composant src/pages/Prix.jsx lit automatiquement ces valeurs.
//
//  Source de vérité produit : la matrice de droits de l'app
//  (docs/segmentation-forfaits.md du monorepo) — 3 forfaits, prix one-shot
//  pour le parcours de 13 séances : Essentiel 1 700 $ · Avancé 2 000 $ ·
//  Performance 2 500 $. Le pack Diagnostic est retiré de l'offre.
// ─────────────────────────────────────────────────────────────────────────────

// ── Palettes de couleurs par pack ─────────────────────────────────────────────
//    Toutes héritent du design system #1B263B / #C5A059 / #8F9779
export const PACK_THEMES = {
    essential: {
        accent: '#B07D4B',         // Véritable Bronze premium
        accentLight: '#B07D4B0D',
        accentBorder: '#B07D4B30',
        iconBg: '#B07D4B12',
    },
    advanced: {
        accent: '#94A3B8',         // Argent — pack recommandé
        accentLight: '#94A3B812',
        accentBorder: '#94A3B870',
        iconBg: '#94A3B818',
    },
    performance: {
        accent: '#C5A059',         // Or
        accentLight: '#C5A0590D',
        accentBorder: '#C5A05940',
        iconBg: '#C5A05912',
    },
};

// ── Données des packs ──────────────────────────────────────────────────────────
export const PRICING_DATA = [
    {
        id: 'essential',
        price: 1700,
        sessions: 13,
        isRecommended: false,
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'],
    },
    {
        id: 'advanced',
        price: 2000,
        sessions: 13,
        isRecommended: true,   // ← pack mis en avant visuellement
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'],
    },
    {
        id: 'performance',
        price: 2500,
        sessions: 13,
        isRecommended: false,
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'],
    },
];

// ── Livrables concrets (section preuves) ──────────────────────────────────────
//    id = suffixe de la clé i18n  pricing.proof.{id}_title / _desc / _pack
export const PROOF_ITEMS = [
    { id: 'scorecard',    icon: 'BarChart2', packs: 'Tous les packs' },
    { id: 'rapport',      icon: 'FileText',  packs: 'Tous les packs' },
    { id: 'observations', icon: 'Eye',       packs: 'Avancé & Performance' },
    { id: 'lsss',         icon: 'Compass',   packs: 'Avancé & Performance' },
    { id: 'messagerie',   icon: 'Phone',     packs: 'Performance' },
    { id: 'export',       icon: 'BookOpen',  packs: 'Performance' },
];

// ── Questions FAQ ─────────────────────────────────────────────────────────────
//    id = suffixe de la clé i18n pricing.faq.{id}_q / _a
export const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'];

// ── Étapes de montée en gamme ──────────────────────────────────────────────────
export const UPGRADE_STEPS = [
    { id: 'essential',  color: '#1B263B' },
    { id: 'advanced',   color: '#C5A059' },
    { id: 'performance',color: '#1B263B' },
];
