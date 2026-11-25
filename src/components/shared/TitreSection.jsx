import React from 'react';
import { useFond } from './Section';

// Titre de section : surtitre en petites capitales sauge, titre serif, texte optionnel.
//  surtitre   petit texte au-dessus (facultatif)
//  titre      le titre
//  texte      paragraphe sous le titre (facultatif)
//  h1         true → balise <h1> (une seule par page) ; sinon <h2>
//  alignement 'centre' (défaut) | 'gauche'
//  surFonce   force les couleurs claires (sinon déduit de <Section fond="marine">)
//  className  classes ajoutées au conteneur
const TitreSection = ({ surtitre, titre, texte, h1 = false, alignement = 'centre', surFonce, className = '' }) => {
    const fond = useFond();
    const fonce = surFonce ?? fond === 'marine';
    const Balise = h1 ? 'h1' : 'h2';
    const centre = alignement === 'centre';

    return (
        <div className={`${centre ? 'text-center mx-auto' : ''} max-w-3xl mb-10 md:mb-12 ${className}`}>
            {surtitre && (
                <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${fonce ? 'text-[#B5BFA0]' : 'text-[#6F7A5A]'}`}>
                    {surtitre}
                </p>
            )}
            <Balise
                className={`font-serif font-bold leading-tight ${h1 ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'} ${
                    fonce ? 'text-white' : 'text-[#1B263B]'
                }`}
            >
                {titre}
            </Balise>
            {texte && (
                <p className={`mt-4 text-lg leading-relaxed ${fonce ? 'text-white/80' : 'text-gray-600'}`}>{texte}</p>
            )}
        </div>
    );
};

export default TitreSection;
