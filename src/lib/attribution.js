// Attribution : code partenaire (?code=) et UTM, lus à l'arrivée sur
// n'importe quelle page et gardés pour la durée de la session, afin d'être
// joints à la demande déposée plus tard dans un formulaire.
//
// - capturerAttribution() : à appeler une fois, au montage de <App />.
// - lireAttribution()     : { code, utm_source, utm_medium, utm_campaign, source }
//                           (chaînes vides si rien).
// Aucune donnée personnelle : seulement des étiquettes de campagne.

const CLES = ['code', 'utm_source', 'utm_medium', 'utm_campaign', 'source'];
const PREFIXE = 'thrive_attr_';
const LONGUEUR_MAX = 80;

const nettoyer = (v) =>
    (v ?? '')
        .toString()
        .trim()
        .replace(/[\r\n\t]+/g, ' ')
        .slice(0, LONGUEUR_MAX);

const stockage = () => {
    try {
        return typeof window !== 'undefined' ? window.sessionStorage : null;
    } catch {
        return null; // navigation privée stricte, stockage bloqué
    }
};

export function capturerAttribution(search) {
    const store = stockage();
    if (!store || typeof window === 'undefined') return;
    const params = new URLSearchParams(search ?? window.location.search);
    CLES.forEach((cle) => {
        const valeur = nettoyer(params.get(cle));
        // Ne jamais écraser une valeur existante par du vide.
        if (valeur) {
            try {
                store.setItem(PREFIXE + cle, valeur);
            } catch {
                /* quota ou stockage bloqué : tant pis */
            }
        }
    });
}

export function lireAttribution() {
    const store = stockage();
    const out = {};
    CLES.forEach((cle) => {
        let v = '';
        try {
            v = store ? store.getItem(PREFIXE + cle) || '' : '';
        } catch {
            v = '';
        }
        out[cle] = v;
    });
    return out;
}
