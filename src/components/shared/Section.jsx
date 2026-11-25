import React, { createContext, useContext } from 'react';

// Conteneur de section : largeur max 6xl, padding vertical cohérent.
//  id         ancre (scroll-mt pour passer sous le menu fixe)
//  fond       'blanc' (défaut) | 'gris' (#f8f9fa) | 'marine' (#1B263B, texte blanc)
//  className  classes ajoutées à l'élément <section>
//  conteneurClassName  classes ajoutées au conteneur interne
// Le fond est communiqué à <TitreSection> (couleurs adaptées automatiquement).
export const FondContext = createContext('blanc');
export const useFond = () => useContext(FondContext);

const FONDS = {
    blanc: 'bg-white text-gray-900',
    gris: 'bg-[#f8f9fa] text-gray-900',
    marine: 'bg-[#1B263B] text-white',
};

const Section = ({ id, fond = 'blanc', className = '', conteneurClassName = '', children, ...rest }) => (
    <FondContext.Provider value={fond}>
        <section id={id} className={`scroll-mt-24 ${FONDS[fond] || FONDS.blanc} ${className}`} {...rest}>
            <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 ${conteneurClassName}`}>
                {children}
            </div>
        </section>
    </FondContext.Provider>
);

export default Section;
