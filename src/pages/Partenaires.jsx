import React from 'react';
import SEO from '../components/seo/SEO';
import { PAGE_PARTENAIRES } from '../content/textes';

// À REMPLIR : équipe contenu
// Squelette : les textes viennent de src/content/textes.js, les prix de src/data/offre.js.
// Composants partagés disponibles dans src/components/shared/.
const Partenaires = () => (
    <>
        <SEO title={PAGE_PARTENAIRES.seo.title} description={PAGE_PARTENAIRES.seo.description} />
        <h1 className="max-w-6xl mx-auto px-4 py-16 text-4xl font-serif font-bold text-[#1B263B]">
            {PAGE_PARTENAIRES.titre}
        </h1>
    </>
);

export default Partenaires;
