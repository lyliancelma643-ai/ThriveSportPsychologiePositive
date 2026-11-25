import React from 'react';
import { Link } from 'react-router-dom';
import { decembreGratuitActif } from '../../data/offre';
import { BANDEAU_DECEMBRE } from '../../content/textes';

// Petit bandeau « décembre gratuit ». Il s'affiche seulement tant que
// decembreGratuitActif() est vrai (jusqu'à MAISON.toutGratuitJusquAu) et
// disparaît tout seul ensuite. Placé par le gabarit (App.jsx), pas par les pages.
const BandeauDecembre = () => {
    if (!decembreGratuitActif()) return null;
    return (
        <div className="bg-[#1B263B] text-white text-sm">
            <p className="max-w-6xl mx-auto px-4 py-2.5 text-center">
                <span className="text-[#C5A059] font-semibold">{BANDEAU_DECEMBRE.texte}</span>{' '}
                <Link
                    to="/maison"
                    className="underline underline-offset-2 hover:text-[#C5A059] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
                >
                    {BANDEAU_DECEMBRE.lien}
                </Link>
            </p>
        </div>
    );
};

export default BandeauDecembre;
