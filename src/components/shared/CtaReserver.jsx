import React from 'react';
import Bouton from './Bouton';
import { CTA } from '../../content/textes';

// Bouton « Réserver ma place pour janvier » : mène au formulaire de réservation
// des accompagnements en présentiel (/accompagnements#reserver).
// Props : court (libellé CTA.reserverCourt), programme ('groupe'|'individuel'|'complet',
//         présélectionne le formulaire), libelle, variante, taille, surFonce, icone, className.
const CtaReserver = ({ court = false, programme, libelle, children, variante = 'primaire', ...props }) => {
    const to = `/accompagnements${programme ? `?programme=${programme}` : ''}#reserver`;
    return (
        <Bouton variante={variante} to={to} {...props}>
            {libelle ?? children ?? (court ? CTA.reserverCourt : CTA.reserver)}
        </Bouton>
    );
};

export default CtaReserver;
