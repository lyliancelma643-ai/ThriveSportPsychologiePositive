import React from 'react';
import SEO from '../components/seo/SEO';
import { PAGE_MAISON } from '../content/textes';

// À REMPLIR : équipe contenu
// Squelette : les textes viennent de src/content/textes.js, les prix de src/data/offre.js.
// Composants partagés disponibles dans src/components/shared/.
const Maison = () => (
    <>
        <SEO title={PAGE_MAISON.seo.title} description={PAGE_MAISON.seo.description} />
        <h1 className="max-w-6xl mx-auto px-4 py-16 text-4xl font-serif font-bold text-[#1B263B]">
            {PAGE_MAISON.hero.titre} {PAGE_MAISON.hero.titreSuite}
        </h1>
    </>
);

export default Maison;
