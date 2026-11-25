// Formulaires du site → table Supabase `public.waitlist`.
//
// Colonnes écrites (voir docs/REFONTE-2026-11.md, section Formulaires) :
//   first_name, email, phone ('' permis), source, pack (NULL ou valeur de la
//   contrainte CHECK), call_preference (NULL ou valeur permise), notes,
//   consent = true.
// JAMAIS de child_*, age_group : aucune donnée sur l'enfant (Loi 25).

import { supabase } from './supabase';
import { normalizeSource } from './waitlist';
import { lireAttribution } from './attribution';
import { PROGRAMMES } from '../data/offre';
import { FORMULAIRES } from '../content/textes';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const MOMENTS_PERMIS = ['matin', 'midi', 'apres-midi', 'soir', 'fin-de-semaine', 'peu-importe'];
const MESSAGE_MAX = 500;

const texte = (v) => (v ?? '').toString().trim();
// Une seule ligne lisible : on aplatit les retours à la ligne et on retire le séparateur « · ».
const uneLigne = (v) => texte(v).replace(/\s*[\r\n]+\s*/g, ' ').replace(/\s·\s/g, ' - ');

/**
 * Valide les champs d'une demande. Renvoie un objet d'erreurs { champ: message }
 * (vide si tout est valide). Les messages viennent de FORMULAIRES.erreurs.
 *
 * @param {object} champs  { prenom, email, telephone, organisation, consentement, ... }
 * @param {object} options { telephoneRequis = true, organisationRequise = false,
 *                           consentementRequis = false }
 */
export function validerDemande(champs = {}, options = {}) {
    const { telephoneRequis = true, organisationRequise = false, consentementRequis = false } = options;
    const E = FORMULAIRES.erreurs;
    const erreurs = {};

    if (texte(champs.prenom).length < 2) erreurs.prenom = E.prenom;
    if (!EMAIL_RE.test(texte(champs.email))) erreurs.email = E.email;

    // On compte les chiffres : « (514) 000-0000 » et « +1 514 000 0000 » passent.
    const chiffres = texte(champs.telephone).replace(/\D/g, '').length;
    if (telephoneRequis ? chiffres < 8 : texte(champs.telephone) && chiffres < 8) {
        erreurs.telephone = E.telephone;
    }
    if (organisationRequise && texte(champs.organisation).length < 2) {
        erreurs.organisation = E.organisation;
    }
    if (consentementRequis && !champs.consentement) erreurs.consentement = E.consentement;

    return erreurs;
}

// notes : type=… · intérêt=… · code=… · utm=source/medium/campaign · organisation=… · message=…
function construireNotes({ type, interet, organisation, message }, attribution) {
    const parties = [];
    const ajouter = (cle, valeur) => {
        const v = uneLigne(valeur);
        if (v) parties.push(`${cle}=${v}`);
    };
    ajouter('type', type);
    ajouter('intérêt', interet);
    ajouter('code', attribution.code);
    const utm = [attribution.utm_source, attribution.utm_medium, attribution.utm_campaign];
    if (utm.some(Boolean)) parties.push(`utm=${utm.map((u) => uneLigne(u) || '-').join('/')}`);
    ajouter('organisation', organisation);
    ajouter('message', uneLigne(message).slice(0, MESSAGE_MAX));
    return parties.join(' · ');
}

/**
 * Dépose une demande dans public.waitlist.
 * Renvoie { ok: true } (y compris si le courriel y était déjà) ou { ok: false, error }.
 *
 * @param {object} demande
 *   type          'appel' | 'maison-beta' | 'partenaire'
 *   prenom, email requis
 *   telephone     chaîne ('' permis, p. ex. bêta Maison)
 *   interet       'groupe' | 'individuel' | 'complet' | 'maison' | 'ne-sais-pas' (facultatif)
 *   moment        'matin' | 'midi' | 'apres-midi' | 'soir' | 'fin-de-semaine' | 'peu-importe' (facultatif)
 *   organisation, message  facultatifs (message tronqué à 500 caractères)
 */
export async function envoyerDemande({
    type,
    prenom,
    email,
    telephone,
    interet,
    moment,
    organisation,
    message,
} = {}) {
    const attribution = lireAttribution();

    const ligne = {
        first_name: texte(prenom),
        email: texte(email).toLowerCase(),
        phone: texte(telephone),
        source: normalizeSource(attribution.source || attribution.utm_source),
        pack: PROGRAMMES[interet]?.waitlistPack ?? null,
        call_preference: MOMENTS_PERMIS.includes(moment) ? moment : null,
        notes: construireNotes({ type, interet, organisation, message }, attribution),
        consent: true,
    };

    const { error } = await supabase.from('waitlist').insert(ligne);

    // 23505 = index unique sur lower(email) : déjà inscrit. On affiche la
    // confirmation normale, comme src/lib/waitlist.js.
    if (error && error.code !== '23505') {
        return { ok: false, error };
    }
    return { ok: true };
}
