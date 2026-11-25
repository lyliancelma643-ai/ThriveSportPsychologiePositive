import React from 'react';
import { Link } from 'react-router-dom';

// Bouton pilule du site.
//
// Props
//  variante   'primaire' (marine plein) | 'secondaire' (contour marine) | 'or' (fond or, texte marine)
//  taille     'sm' | 'md' (défaut) | 'lg'
//  to         lien interne (react-router) ; accepte « /maison#acces »
//  href       lien externe, mailto: ou tel: (balise <a>)
//  nouvelOnglet  avec href : ouvre dans un nouvel onglet (rel noopener)
//  surFonce   à mettre quand le bouton est posé sur un fond marine (inverse le contour et l'anneau de focus)
//  icone      élément affiché après le libellé (ex. <ArrowRight size={18} />)
//  className  classes ajoutées (ex. « w-full »)
//  Sans to ni href : <button> (type et onClick transmis).
const BASE =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold text-center whitespace-nowrap ' +
    'transition-colors duration-200 select-none ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 ' +
    'disabled:opacity-60 disabled:cursor-not-allowed';

const TAILLES = {
    sm: 'min-h-[40px] px-4 py-2 text-sm',
    md: 'min-h-[44px] px-6 py-3 text-sm sm:text-base',
    lg: 'min-h-[52px] px-8 py-4 text-base sm:text-lg',
};

const VARIANTES = {
    primaire: 'bg-[#1B263B] text-white hover:bg-[#2c3e5a] border-2 border-[#1B263B] hover:border-[#2c3e5a]',
    secondaire: 'bg-transparent text-[#1B263B] border-2 border-[#1B263B] hover:bg-[#1B263B] hover:text-white',
    or: 'bg-[#C5A059] text-[#1B263B] border-2 border-[#C5A059] hover:bg-[#d4b36e] hover:border-[#d4b36e]',
};

const VARIANTES_SUR_FONCE = {
    primaire: 'bg-white text-[#1B263B] border-2 border-white hover:bg-gray-100 hover:border-gray-100',
    secondaire: 'bg-transparent text-white border-2 border-white/70 hover:bg-white hover:text-[#1B263B]',
    or: VARIANTES.or,
};

const Bouton = ({
    variante = 'primaire',
    taille = 'md',
    to,
    href,
    nouvelOnglet = false,
    surFonce = false,
    icone = null,
    className = '',
    children,
    ...rest
}) => {
    const classes = [
        BASE,
        TAILLES[taille] || TAILLES.md,
        (surFonce ? VARIANTES_SUR_FONCE : VARIANTES)[variante] || VARIANTES.primaire,
        surFonce ? 'focus-visible:ring-offset-[#1B263B]' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const contenu = (
        <>
            {children}
            {icone}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {contenu}
            </Link>
        );
    }
    if (href) {
        const externe = nouvelOnglet ? { target: '_blank', rel: 'noopener noreferrer' } : {};
        return (
            <a href={href} className={classes} {...externe} {...rest}>
                {contenu}
            </a>
        );
    }
    return (
        <button type="button" className={classes} {...rest}>
            {contenu}
        </button>
    );
};

export default Bouton;
