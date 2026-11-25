import React from 'react';
import { Check, MapPin, Clock, Users } from 'lucide-react';
import SEO from '../seo/SEO';
import Section from '../shared/Section';
import TitreSection from '../shared/TitreSection';
import CtaAppel from '../shared/CtaAppel';
import Faq from '../shared/Faq';
import { PAGE_PROGRAMMES } from '../../content/textes';
import { ENTREPRISE, OFFRE_FONDATRICE, NOTE_TAXES, GARANTIE, PAIEMENT_PROGRAMMES, formatPrix, prixGroupe } from '../../data/offre';

// Titres de blocs ajoutés localement (à reporter dans textes.js).
const TITRES = {
    pourQui: 'Pour qui',
    concretement: 'Concrètement',
    recu: 'Ce que vous recevez',
    prix: 'Prix et paiement',
    faq: 'Vos questions',
    remboursement: 'Si ce n’est pas le bon cadre',
    cta: 'On en parle ?',
    ctaTexte: 'Un appel gratuit de 15 minutes, sans engagement. Nous vous disons honnêtement si c’est le bon cadre pour votre enfant.',
    lieu: 'Lieu',
};

const ListeCoches = ({ items }) => (
    <ul className="space-y-4">
        {items.map((t) => (
            <li key={t} className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed">
                <Check size={20} aria-hidden="true" className="mt-1.5 shrink-0 text-[#8A6A2F]" />
                <span>{t}</span>
            </li>
        ))}
    </ul>
);

// Gabarit des pages programme (6 blocs identiques).
//  programme   entrée de PROGRAMMES (groupe | individuel)
//  page        entrée de PAGES_PROGRAMME
//  image, alt  photo de l'en-tête
//  enfants     children : bloc supplémentaire inséré après « Prix et paiement » (ex. THRIVE Complet)
const ProgrammePage = ({ programme, page, image, alt, children }) => {
    const estGroupe = programme.id === 'groupe';
    const fondatrice = estGroupe && OFFRE_FONDATRICE.active;
    const prix = estGroupe ? prixGroupe() : programme.prix;
    const lienAppel = `/appel?programme=${programme.id}`;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${programme.nom} — ${programme.accroche}`,
        description: page.seo.description,
        provider: { '@type': 'Organization', name: ENTREPRISE.raisonSociale, url: ENTREPRISE.site },
        areaServed: { '@type': 'City', name: 'Montréal' },
        offers: { '@type': 'Offer', price: String(prix), priceCurrency: 'CAD' },
    };

    return (
        <>
            <SEO title={page.seo.title} description={page.seo.description} schema={schema} />

            {/* 1. En-tête */}
            <Section fond="gris" conteneurClassName="!py-10 md:!py-16">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F7A5A] mb-3">{programme.accroche}</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1B263B] leading-tight">{programme.nom}</h1>
                        <p className="mt-5 text-xl text-gray-700 leading-relaxed">{programme.resume}</p>
                        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-gray-700">
                            <li className="inline-flex items-center gap-2">
                                <Clock size={18} aria-hidden="true" className="text-[#8A6A2F]" />
                                {programme.seances} séances de {programme.dureeSeance}
                            </li>
                            {estGroupe && (
                                <li className="inline-flex items-center gap-2">
                                    <Users size={18} aria-hidden="true" className="text-[#8A6A2F]" />
                                    {programme.enfantsMax} enfants maximum
                                </li>
                            )}
                            <li className="inline-flex items-center gap-2">
                                <MapPin size={18} aria-hidden="true" className="text-[#8A6A2F]" />
                                Montréal
                            </li>
                        </ul>
                        <p className="mt-6 flex flex-wrap items-baseline gap-x-3">
                            <span className="text-5xl font-serif font-bold text-[#1B263B]">{formatPrix(prix)}</span>
                            {fondatrice && (
                                <span className="text-xl text-gray-600 line-through">
                                    <span className="sr-only">Prix régulier : </span>
                                    {formatPrix(programme.prix)}
                                </span>
                            )}
                        </p>
                        <p className="mt-1 text-gray-700">{NOTE_TAXES}</p>
                        <div className="mt-7">
                            <CtaAppel taille="lg" to={lienAppel} className="w-full sm:w-auto" />
                        </div>
                    </div>
                    <img
                        src={image}
                        alt={alt}
                        width="1920"
                        height="1280"
                        loading="lazy"
                        className="w-full h-64 sm:h-80 lg:h-[26rem] object-cover rounded-[2rem] shadow-xl"
                    />
                </div>
            </Section>

            {/* 2. Pour qui */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <TitreSection alignement="gauche" titre={TITRES.pourQui} className="!mb-5" />
                    <p className="text-xl text-gray-700 leading-relaxed">{page.pourQui}</p>
                </div>
            </Section>

            {/* 3. Concrètement  /  4. Ce que vous recevez */}
            <Section fond="gris">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="bg-white rounded-[2rem] p-7 sm:p-9 shadow-lg border border-gray-100">
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B263B] mb-6">{TITRES.concretement}</h2>
                        <ListeCoches items={page.concretement} />
                    </div>
                    <div className="bg-white rounded-[2rem] p-7 sm:p-9 shadow-lg border border-gray-100">
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B263B] mb-6">{TITRES.recu}</h2>
                        <ListeCoches items={page.recu} />
                    </div>
                </div>
                <p className="mt-8 flex items-start gap-2 justify-center text-gray-700 text-center">
                    <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-[#8A6A2F]" />
                    <span>{ENTREPRISE.lieu}</span>
                </p>
            </Section>

            {/* 5. Prix et paiement */}
            <Section id="prix">
                <TitreSection titre={TITRES.prix} />
                <div className="max-w-3xl mx-auto bg-[#1B263B] text-white rounded-[2rem] p-8 sm:p-10 shadow-2xl">
                    <p className="flex flex-wrap items-baseline justify-center gap-x-3 text-center">
                        <span className="text-5xl sm:text-6xl font-serif font-bold text-[#C5A059]">{formatPrix(prix)}</span>
                        {fondatrice && (
                            <span className="text-xl text-white/70 line-through">
                                <span className="sr-only">Prix régulier : </span>
                                {formatPrix(programme.prix)}
                            </span>
                        )}
                    </p>
                    <p className="mt-2 text-center text-white/90">{NOTE_TAXES}</p>
                    {fondatrice && <p className="mt-5 text-center font-semibold text-[#C5A059]">{OFFRE_FONDATRICE.texte}</p>}
                    <hr className="my-7 border-white/15" />
                    <p className="text-lg leading-relaxed text-white/95">{PAIEMENT_PROGRAMMES}</p>
                    <div className="mt-6 rounded-2xl bg-white/10 border border-white/15 p-5">
                        <h3 className="font-serif font-bold text-lg text-[#C5A059]">{TITRES.remboursement}</h3>
                        <p className="mt-1 text-white/90 leading-relaxed">{GARANTIE}</p>
                    </div>
                </div>
            </Section>

            {children}

            {/* 6. FAQ */}
            <Section fond="gris">
                <TitreSection titre={TITRES.faq} />
                <Faq items={page.faq} />
            </Section>

            {/* Bouton final */}
            <Section fond="marine" conteneurClassName="text-center">
                <TitreSection titre={TITRES.cta} texte={TITRES.ctaTexte} className="!mb-8" />
                <CtaAppel taille="lg" variante="or" surFonce to={lienAppel} className="w-full sm:w-auto" />
                <p className="mt-6 text-sm text-white/80">{PAGE_PROGRAMMES.lancement}</p>
            </Section>
        </>
    );
};

export default ProgrammePage;
