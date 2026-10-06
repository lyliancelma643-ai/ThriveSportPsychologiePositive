// ─────────────────────────────────────────────────────────────────────────────
//  THRIVE Sport Positive — source unique des prix et de l'offre
//
//  Pour modifier un prix, une date ou un état de lancement :
//  → Modifiez UNIQUEMENT ce fichier.
//  → Les textes sont dans src/locales/{fr,en}/translation.json (clés "pricing.*"
//    et "commun.*") ; les montants y arrivent par interpolation ({{…}}).
//
//  Source : spec page Prix / Offres B2C du 6 octobre 2026 (gamme V3 du 2 oct.).
//    · THRIVE Groupe       600 $ fondateur · 650 $ régulier
//    · THRIVE Individuel 1 500 $ fondateur · 1 950 $ régulier
//    · THRIVE Complet    2 000 $ fondateur · 2 450 $ régulier
//    · THRIVE Maison     32,50 $ / mois ou 299 $ / an, 1 mois d'essai
//  Les prix réguliers sont PROPOSÉS : Lylian les confirme avant le 17 oct.
//  THRIVE n'est pas inscrit à la TPS/TVQ : aucun prix n'affiche de taxe.
// ─────────────────────────────────────────────────────────────────────────────

import { APP_SIGNUP_URL } from '../lib/appUrl';

// ── Prix ──────────────────────────────────────────────────────────────────────
export const PRIX = {
    groupe:     { fondateur: 600,  versementFondateur: 300, regulier: 650,  versementRegulier: 325 },
    individuel: { fondateur: 1500, versementFondateur: 750, regulier: 1950, versementRegulier: 975 },
    complet:    { fondateur: 2000, regulier: 2450,
                  versementsFondateur: [750, 750, 250, 250], versementsRegulier: [975, 975, 250, 250] },
    maison:     { mensuel: 32.5, annuel: 299, essaiMois: 1, essaiCodePartenaireMois: 2 },
    // Passerelles : le total payé ne dépasse jamais le prix du Complet.
    passerelles: {
        individuelVersComplet: { fondateur: 500,  regulier: 500 },
        groupeVersComplet:     { fondateur: 1400, regulier: 1800 },
    },
    // Remises proposées le 3 oct., non validées (textes masqués, voir AFFICHAGE).
    remises: { fratriePourcent: 10, parrainageCredit: 50 },
};

// ── États de lancement (spec §8) — modifiés à la main par Lylian ─────────────
export const ETAT_LANCEMENT = 'prelancement'; // 'prelancement' | 'lance' | 'regulier'
export const VAGUE_FONDATRICE = { dateDepart: 'samedi 14 novembre 2026', dateDepartEn: 'Saturday, November 14, 2026', statut: 'ouverte' }; // 'ouverte' | 'complete' | 'en_cours'
export const PROCHAINE_VAGUE = { dateDepart: null, dateDepartEn: null, prix: PRIX.groupe.regulier }; // rempli à l'annonce (prévue le 12 déc.)
export const PLACES_FONDATRICES = { total: 6, restantes: 6, dateLimite: '31 janvier 2027', dateLimiteEn: 'January 31, 2027' };
export const MAISON_LANCEMENT = { date: '9 novembre 2026', dateEn: 'November 9, 2026' };
// [À CONFIRMER : URL exacte d'inscription] — aujourd'hui la création de compte
// de l'app web (https://app.thrivesportpositive.com/login?mode=signup en prod).
export const URL_MAISON = APP_SIGNUP_URL;
export const AFFICHAGE = {
    maisonMobileDispo: false,      // iPhone/Android prévus en janvier
    afficherCodePartenaire: false, // true quand les codes existent
    afficherFratrie: false, afficherPlaceSolidaire: false, afficherParrainage: false,
};

// Ce que les états impliquent pour l'affichage.
const enRegulier = ETAT_LANCEMENT === 'regulier';
export const GROUPE_FONDATEUR = !enRegulier && VAGUE_FONDATRICE.statut === 'ouverte';
export const PLACES_FONDATRICES_OUVERTES = !enRegulier && PLACES_FONDATRICES.restantes > 0;
export const MAISON_EN_VENTE = ETAT_LANCEMENT !== 'prelancement';
// Le bloc « Pourquoi un prix fondateur ? » et la FAQ 13 disparaissent en régulier.
export const AFFICHER_FONDATEUR = !enRegulier;

// ── Format d'un montant ───────────────────────────────────────────────────────
//    Espace insécable avant « $ » et espace fine insécable entre les milliers,
//    pour qu'aucun prix ne se coupe sur deux lignes.
export function formatPrix(montant, lang = 'fr') {
    const decimales = Number.isInteger(montant) ? 0 : 2;
    const options = { minimumFractionDigits: decimales, maximumFractionDigits: decimales };
    if (lang?.startsWith('en')) {
        return `$${montant.toLocaleString('en-CA', options)}`;
    }
    const nombre = montant.toLocaleString('fr-CA', options).replace(/[\s  ]/g, ' ');
    return `${nombre} $`;
}

// ── Montants interpolés dans les traductions ──────────────────────────────────
//    Chaque clé est utilisable dans translation.json sous la forme {{clé}}.
export function prixVars(lang = 'fr') {
    const en = lang?.startsWith('en');
    const f = (m) => formatPrix(m, lang);
    const g = PRIX.groupe, i = PRIX.individuel, c = PRIX.complet, m = PRIX.maison;
    const groupeCourant = GROUPE_FONDATEUR ? g.fondateur : g.regulier;
    const groupeVersement = GROUPE_FONDATEUR ? g.versementFondateur : g.versementRegulier;
    const versementsComplet = PLACES_FONDATRICES_OUVERTES ? c.versementsFondateur : c.versementsRegulier;
    return {
        groupeFondateur: f(g.fondateur), groupeRegulier: f(g.regulier),
        groupeVersementFondateur: f(g.versementFondateur), groupeVersementRegulier: f(g.versementRegulier),
        groupeVersement: f(groupeVersement), groupePrix: f(groupeCourant),
        individuelFondateur: f(i.fondateur), individuelRegulier: f(i.regulier),
        individuelVersementFondateur: f(i.versementFondateur), individuelVersementRegulier: f(i.versementRegulier),
        individuelVersement: f(PLACES_FONDATRICES_OUVERTES ? i.versementFondateur : i.versementRegulier),
        completFondateur: f(c.fondateur), completRegulier: f(c.regulier),
        completVersementIndividuel: f(versementsComplet[0]), completVersementGroupe: f(versementsComplet[2]),
        completPlaceGroupe: f(versementsComplet[2] + versementsComplet[3]),
        completSepareFondateur: f(i.fondateur + g.fondateur), completSepareRegulier: f(i.regulier + g.regulier),
        maisonMensuel: f(m.mensuel), maisonAnnuel: f(m.annuel),
        maisonEconomie: f(Math.round(m.mensuel * 12 - m.annuel)),
        maisonEssaiMois: m.essaiMois, maisonEssaiPartenaireMois: m.essaiCodePartenaireMois,
        passerelleIndividuelComplet: f(PRIX.passerelles.individuelVersComplet[PLACES_FONDATRICES_OUVERTES ? 'fondateur' : 'regulier']),
        placesTotal: PLACES_FONDATRICES.total, placesRestantes: PLACES_FONDATRICES.restantes,
        dateLimite: en ? PLACES_FONDATRICES.dateLimiteEn : PLACES_FONDATRICES.dateLimite,
        dateDepart: en ? VAGUE_FONDATRICE.dateDepartEn : VAGUE_FONDATRICE.dateDepart,
        dateProchaineVague: (en ? PROCHAINE_VAGUE.dateDepartEn : PROCHAINE_VAGUE.dateDepart) || '',
        dateMaison: en ? MAISON_LANCEMENT.dateEn : MAISON_LANCEMENT.date,
        fratriePourcent: PRIX.remises.fratriePourcent, parrainageCredit: f(PRIX.remises.parrainageCredit),
    };
}

// ── Palettes de couleurs par programme ────────────────────────────────────────
//    Toutes héritent du design system #1B263B / #C5A059 / #8F9779
//    Les identifiants sont internes : essayer = THRIVE Individuel,
//    autres = THRIVE Complet, moment = THRIVE Maison, groupe = THRIVE Groupe.
export const PACK_THEMES = {
    groupe: {
        accent: '#C5A059',         // Or (programme phare)
        accentLight: '#C5A0590D',
        accentBorder: '#C5A05940',
        iconBg: '#C5A05912',
    },
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
//    Ordre d'affichage : prix croissant, Groupe (produit phare, mis en avant)
//    en premier, Complet en dernier comme ancre haute. THRIVE Maison
//    (isEntry) s'affiche dans l'encart horizontal sous les trois cartes.
//    id         : identifiant interne (clés i18n pricing.{id}.*, thèmes).
//    programme  : valeur ?programme= transmise à la liste d'attente
//                 (src/lib/waitlist.js) — null quand elle n'en a pas.
//    sessions   : nombre mis en valeur sur la carte (absent pour Maison).
//    noteKey / billingKey : texte « sous le prix » et texte des versements,
//                 choisis selon l'état de lancement.
//    action     : 'booking'  → la réservation de l'appel (liste d'attente)
//                 'attente'  → vague complète : rejoindre la liste d'attente
//                 'waitlist' → être prévenu du lancement (liste d'attente)
//                 'signup'   → l'essai gratuit dans l'app web (URL_MAISON)
export const PRICING_DATA = [
    {
        id: 'groupe',
        programme: null, // [À FAIRE] la liste d'attente n'a pas encore de valeur pour le Groupe
        path: '/methode', // pas encore de page produit dédiée au Groupe
        price: GROUPE_FONDATEUR ? PRIX.groupe.fondateur : PRIX.groupe.regulier,
        sessions: 13,
        // Vague fondatrice complète et prochaine date pas encore annoncée :
        // le bouton propose la liste d'attente.
        action: GROUPE_FONDATEUR || PROCHAINE_VAGUE.dateDepart ? 'booking' : 'attente',
        noteKey: GROUPE_FONDATEUR ? 'price_note'
            : (PROCHAINE_VAGUE.dateDepart ? 'price_note_prochaine' : 'price_note_attente'),
        billingKey: 'billing',
        isRecommended: true,   // ← produit phare, mis en avant visuellement
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
    },
    {
        id: 'essayer',
        programme: 'essayer',
        path: '/programmes/oser-essayer',
        price: PLACES_FONDATRICES_OUVERTES ? PRIX.individuel.fondateur : PRIX.individuel.regulier,
        sessions: 13,
        action: 'booking',
        noteKey: PLACES_FONDATRICES_OUVERTES ? 'price_note' : 'price_note_regulier',
        billingKey: 'billing',
        isRecommended: false,
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
    },
    {
        id: 'autres',
        programme: 'autres',
        path: '/programmes/aller-vers-les-autres',
        price: PLACES_FONDATRICES_OUVERTES ? PRIX.complet.fondateur : PRIX.complet.regulier,
        sessions: 26,
        action: 'booking',
        noteKey: PLACES_FONDATRICES_OUVERTES ? 'price_note' : 'price_note_regulier',
        billingKey: 'billing',
        isRecommended: false,
        isEntry: false,
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5'],
    },
    {
        id: 'moment',
        programme: null,
        path: '/programmes/le-moment-qui-compte',
        price: PRIX.maison.mensuel,
        action: MAISON_EN_VENTE ? 'signup' : 'waitlist',
        noteKey: 'price_note',
        billingKey: MAISON_EN_VENTE ? 'billing' : 'billing_prelancement',
        isRecommended: false,
        isEntry: true,         // ← badge « Pour commencer ce soir », encart horizontal
        featureKeys: ['f0', 'f1', 'f2', 'f3', 'f4'],
    },
];

// ── Ce qui protège le parent (section paiement et garantie) ──────────────────
//    id = suffixe de la clé i18n  pricing.proof.{id}_title / _desc / _pack
export const PROOF_ITEMS = [
    { id: 'paiement',  icon: 'Wallet' },
    { id: 'garantie',  icon: 'Shield' },
    ...(AFFICHER_FONDATEUR ? [{ id: 'fondateur', icon: 'Compass' }] : []),
    { id: 'mesure',    icon: 'BarChart2' },
    { id: 'essai',     icon: 'Clock' },
    { id: 'non',       icon: 'FileText' },
];

// ── Questions FAQ (ordre de priorité de la spec §7) ──────────────────────────
//    id = suffixe de la clé i18n pricing.faq.{id}_q / _a
//    La question 13 (prix fondateur) disparaît en état régulier.
export const FAQ_KEYS = [
    'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10',
    'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20',
].filter(k => AFFICHER_FONDATEUR || k !== 'q13');

// ── De l'appel à la dernière séance ───────────────────────────────────────────
export const UPGRADE_STEPS = [
    { id: 'appel',       color: '#1B263B' },
    { id: 'inscription', color: '#C5A059' },
    { id: 'seance1',     color: '#1B263B' },
    { id: 'seance2',     color: '#C5A059' },
    { id: 'seance7',     color: '#1B263B' },
    { id: 'seance13',    color: '#C5A059' },
];

// ── Remises (proposées le 3 oct., non validées) — masquées par défaut ────────
//    Textes prêts : pricing.remises.{fratrie,place_solidaire,parrainage}.
export const REMISES = [
    { id: 'fratrie',         visible: AFFICHAGE.afficherFratrie },
    { id: 'place_solidaire', visible: AFFICHAGE.afficherPlaceSolidaire },
    { id: 'parrainage',      visible: AFFICHAGE.afficherParrainage },
].filter(r => r.visible);
