import React from 'react';
import Bouton from './Bouton';
import { MAISON } from '../../data/offre';
import { CTA } from '../../content/textes';
import { APP_SIGNUP_URL } from '../../lib/appUrl';

// Bouton qui mène à l'app THRIVE Maison.
//  MAISON.statut === 'beta'   → /maison#acces, libellé CTA.maisonBeta
//  MAISON.statut === 'ouvert' → APP_SIGNUP_URL, libellé CTA.maisonOuvert
// Props : variante, taille, surFonce, icone, className (transmises à Bouton) ;
//         libelle pour remplacer le texte (ex. CTA.maisonCourt).
const CtaMaison = ({ variante = 'primaire', libelle, children, ...props }) => {
    const ouvert = MAISON.statut === 'ouvert';
    const texte = libelle ?? children ?? (ouvert ? CTA.maisonOuvert : CTA.maisonBeta);
    return ouvert ? (
        <Bouton variante={variante} href={APP_SIGNUP_URL} {...props}>
            {texte}
        </Bouton>
    ) : (
        <Bouton variante={variante} to="/maison#acces" {...props}>
            {texte}
        </Bouton>
    );
};

export default CtaMaison;
