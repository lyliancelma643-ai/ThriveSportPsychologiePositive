import React from 'react';
import SEO from '../components/seo/SEO';
import { PAGE_PROGRAMMES } from '../content/textes';

// À REMPLIR : équipe contenu
// Squelette : les textes viennent de src/content/textes.js, les prix de src/data/offre.js.
// Composants partagés disponibles dans src/components/shared/.
const Programmes = () => (
    <>
        <SEO title={PAGE_PROGRAMMES.seo.title} description={PAGE_PROGRAMMES.seo.description} />
        <h1 className="max-w-6xl mx-auto px-4 py-16 text-4xl font-serif font-bold text-[#1B263B]">
            {PAGE_PROGRAMMES.titre}
        </h1>
    </>
);

export default Programmes;
