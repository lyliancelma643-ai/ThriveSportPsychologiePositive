import React from 'react';
import { useLocation } from 'react-router-dom';
import CtaMaison from './CtaMaison';
import CtaReserver from './CtaReserver';
import { CTA, NAV } from '../../content/textes';

// Barre fixe en bas d'écran, mobile seulement (< md) : « Essayer l'app » + « Réserver ma place ».
// Masquée sur /appel. Le gabarit (App.jsx) ajoute pb-20 md:pb-0 pour que le pied de page reste visible.
const BarreMobile = () => {
    const { pathname } = useLocation();
    if (pathname.replace(/\/$/, '') === '/appel') return null;

    return (
        <div
            role="region"
            aria-label={NAV.actionsRapides}
            className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
            <div className="flex gap-2">
                <CtaMaison variante="secondaire" taille="sm" libelle={CTA.maisonCourt} className="flex-1 !px-2" />
                <CtaReserver variante="primaire" taille="sm" court className="flex-1 !px-2" />
            </div>
        </div>
    );
};

export default BarreMobile;
