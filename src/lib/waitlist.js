// Liste d'attente — logique partagée par la page publique.
//
// La table `public.waitlist` est lue et qualifiée dans l'espace super admin de
// l'app THRIVE. Ici on ne fait qu'écrire une ligne, une seule fois, en `anon`.

import { supabase } from './supabase';

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

// ── Validation ──────────────────────────────────────────────────────────────
//
// Volontairement permissive : on refuse ce qui est manifestement faux, pas ce
// qui est inhabituel. Un faux négatif ici coûte un prospect.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export function validate({ prenom, email, telephone }) {
    const errors = {};

    if ((prenom ?? '').trim().length < 2) {
        errors.prenom = 'Indiquez votre prénom.';
    }
    if (!EMAIL_RE.test((email ?? '').trim())) {
        errors.email = 'Cette adresse courriel ne semble pas valide.';
    }
    // On compte les chiffres, pas les caractères : « (514) 000-0000 » et
    // « +1 514 000 0000 » doivent tous les deux passer.
    if ((telephone ?? '').replace(/\D/g, '').length < 8) {
        errors.telephone = 'Indiquez un numéro de téléphone valide.';
    }

    return errors;
}

// ── Inscription ─────────────────────────────────────────────────────────────

/**
 * Dépose une inscription. Renvoie { ok: true } quand la personne est sur la
 * liste — y compris si elle y était déjà.
 */
export async function joinWaitlist({ prenom, email, telephone, source }) {
    const { error } = await supabase.from('waitlist').insert({
        first_name: prenom.trim(),
        email: email.trim().toLowerCase(),
        phone: telephone.trim(),
        source,
        // Consentement recueilli par la mention affichée sous le bouton
        // d'envoi : en réservant sa place, la personne accepte d'être
        // recontactée à ce sujet (Loi 25).
        consent: true,
    });

    // 23505 = violation de l'index unique sur lower(email) : déjà inscrit. On
    // affiche la confirmation normale — lui dire « vous y êtes déjà » ne lui
    // apporte rien et ajoute de la friction sur une action qu'il vient de faire.
    if (error && error.code !== '23505') {
        return { ok: false, error };
    }

    return { ok: true };
}
