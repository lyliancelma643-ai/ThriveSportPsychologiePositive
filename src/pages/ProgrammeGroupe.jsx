import React from 'react';
import SEO from '../components/seo/SEO';
import { PAGES_PROGRAMME } from '../content/textes';
import { PROGRAMMES } from '../data/offre';

// À REMPLIR : équipe contenu
// Squelette : les textes viennent de src/content/textes.js, les prix de src/data/offre.js.
// Composants partagés disponibles dans src/components/shared/.
const ProgrammeGroupe = () => (
    <>
        <SEO title={PAGES_PROGRAMME.groupe.seo.title} description={PAGES_PROGRAMME.groupe.seo.description} />
        <h1 className="max-w-6xl mx-auto px-4 py-16 text-4xl font-serif font-bold text-[#1B263B]">
            {PROGRAMMES.groupe.nom}
        </h1>
    </>
);

export default ProgrammeGroupe;
