import React from 'react';
import Bouton from './Bouton';
import { CTA } from '../../content/textes';

// Bouton vers la page /appel.
// Props : court (libellé CTA.appelCourt au lieu de CTA.appel), libelle (texte libre),
//         variante, taille, surFonce, icone, className (transmises à Bouton).
const CtaAppel = ({ court = false, libelle, children, variante = 'primaire', ...props }) => (
    <Bouton variante={variante} to="/appel" {...props}>
        {libelle ?? children ?? (court ? CTA.appelCourt : CTA.appel)}
    </Bouton>
);

export default CtaAppel;
