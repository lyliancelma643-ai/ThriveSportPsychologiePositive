import textes from './methode.json';

// Lecture par chemin pointé (ex. t('method.intro_tag')). Renvoie la clé si elle est absente.
export const t = (cle) => {
    const valeur = cle.split('.').reduce((o, k) => (o && typeof o === 'object' ? o[k] : undefined), textes);
    return typeof valeur === 'string' ? valeur : cle;
};

export default t;
