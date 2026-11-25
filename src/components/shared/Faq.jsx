import React, { useId, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import { useFond } from './Section';

// FAQ en accordéon accessible (bouton + aria-expanded) avec JSON-LD FAQPage.
//  items      [{ q, r }] — textes simples (chaînes) pour que le JSON-LD reste fidèle
//  ouvertParDefaut  index de la question ouverte au départ (défaut : aucune)
//  schema     false pour ne pas injecter le JSON-LD (défaut : true)
//  className  classes ajoutées au conteneur
// Les réponses restent dans le HTML même repliées (attribut hidden) : le prérendu les indexe.
const Faq = ({ items = [], ouvertParDefaut = null, schema = true, className = '' }) => {
    const base = useId();
    const [ouvert, setOuvert] = useState(ouvertParDefaut);
    const fonce = useFond() === 'marine';

    if (!items.length) return null;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(({ q, r }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: r },
        })),
    };

    return (
        <div className={`max-w-3xl mx-auto ${className}`}>
            {schema && (
                <Helmet>
                    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
                </Helmet>
            )}
            <div className="space-y-3">
                {items.map((item, i) => {
                    const estOuvert = ouvert === i;
                    const idBouton = `${base}-q-${i}`;
                    const idPanneau = `${base}-r-${i}`;
                    return (
                        <div
                            key={idBouton}
                            className={`rounded-2xl border ${
                                fonce ? 'border-white/15 bg-white/5' : 'border-gray-100 bg-white shadow-sm'
                            }`}
                        >
                            <h3 className="font-sans" style={{ fontFamily: 'inherit' }}>
                                <button
                                    type="button"
                                    id={idBouton}
                                    aria-expanded={estOuvert}
                                    aria-controls={idPanneau}
                                    onClick={() => setOuvert(estOuvert ? null : i)}
                                    className={`w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 min-h-[56px] rounded-2xl font-sans font-semibold text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
                                        fonce ? 'text-white' : 'text-[#1B263B]'
                                    }`}
                                >
                                    <span>{item.q}</span>
                                    <ChevronDown
                                        size={20}
                                        aria-hidden="true"
                                        className={`shrink-0 transition-transform duration-200 ${estOuvert ? 'rotate-180' : ''} ${
                                            fonce ? 'text-[#C5A059]' : 'text-[#8A6A2F]'
                                        }`}
                                    />
                                </button>
                            </h3>
                            <div
                                id={idPanneau}
                                role="region"
                                aria-labelledby={idBouton}
                                hidden={!estOuvert}
                                className={`px-5 sm:px-6 pb-5 leading-relaxed ${fonce ? 'text-white/80' : 'text-gray-600'}`}
                            >
                                {item.r}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Faq;
