// Source d'acquisition — utilisée par src/lib/formulaires.js.
//
// La table `public.waitlist` est lue et qualifiée dans l'espace super admin de
// l'app THRIVE. Ici on ne fait qu'écrire une ligne, une seule fois, en `anon`.

// ── Source d'acquisition ────────────────────────────────────────────────────
//
// Ce qui permet de savoir si l'inscrit vient du QR code imprimé, de la bio
// Instagram ou du site. Normalisé vers quatre valeurs : une URL bricolée ne
// doit pas créer un canal fantôme dans les statistiques.

export function normalizeSource(raw) {
    const v = (raw ?? '').trim().toLowerCase();
    if (!v) return 'direct';
    if (v.startsWith('qr')) return 'qr';
    if (v.startsWith('insta') || v === 'ig') return 'insta';
    if (v === 'site' || v === 'web' || v === 'website') return 'site';
    return 'direct';
}

export function readSource(search) {
    const params = new URLSearchParams(search || '');
    return normalizeSource(params.get('source') ?? params.get('utm_source'));
}
