import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import CarteOffre from '../components/shared/CarteOffre';
import CtaMaison from '../components/shared/CtaMaison';
import CtaAppel from '../components/shared/CtaAppel';
import { PAGE_PROGRAMMES, PAGES_PROGRAMME, PAGE_MAISON } from '../content/textes';
import {
    ENTREPRISE,
    MAISON,
    PROGRAMMES,
    OFFRE_FONDATRICE,
    NOTE_TAXES,
    GARANTIE,
    PAIEMENT_PROGRAMMES,
    formatPrix,
    prixGroupe,
} from '../data/offre';

// Petits textes ajoutés localement (à reporter dans textes.js).
const LOCAL = {
    remboursementTitre: 'Si ce n’est pas le bon cadre',
    detail: 'Voir le détail',
    reserver: 'Réserver l’appel gratuit',
};

const Programmes = () => {
    const G = PROGRAMMES.groupe;
    const I = PROGRAMMES.individuel;
    const C = PROGRAMMES.complet;
    const pg = PAGES_PROGRAMME.groupe;
    const pi = PAGES_PROGRAMME.individuel;
    const fondatrice = OFFRE_FONDATRICE.active;

    const mentionMaison = `Puis premium à ${formatPrix(MAISON.prixMensuel)}/mois ou ${formatPrix(MAISON.prixAnnuel)}/an. ${PAGE_MAISON.tarifs.premiumEssai}`;

    const actionProgramme = (p) => (
        <div className="space-y-3">
            <CtaAppel to={`/appel?programme=${p.id}`} variante={p.id === 'groupe' ? 'primaire' : 'secondaire'} libelle={LOCAL.reserver} className="w-full !whitespace-normal !px-4" />
            <p className="text-center">
                <Link
                    to={p.path}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#8A6A2F] hover:text-[#1B263B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
                >
                    {LOCAL.detail}
                    <ArrowRight size={16} aria-hidden="true" />
                </Link>
            </p>
        </div>
    );

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: PAGE_PROGRAMMES.titre,
        itemListElement: [
            { nom: MAISON.nom, prix: MAISON.prixMensuel, url: '/maison' },
            { nom: G.nom, prix: prixGroupe(), url: G.path },
            { nom: I.nom, prix: I.prix, url: I.path },
            { nom: C.nom, prix: C.prix, url: C.path },
        ].map((o, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'Service',
                name: o.nom,
                url: ENTREPRISE.site + o.url,
                provider: { '@type': 'Organization', name: ENTREPRISE.raisonSociale },
                areaServed: { '@type': 'City', name: 'Montréal' },
                offers: { '@type': 'Offer', price: String(o.prix), priceCurrency: 'CAD' },
            },
        })),
    };

    return (
        <>
            <SEO title={PAGE_PROGRAMMES.seo.title} description={PAGE_PROGRAMMES.seo.description} schema={schema} />

            <Section fond="gris" conteneurClassName="!pb-10 md:!pb-12">
                <TitreSection h1 titre={PAGE_PROGRAMMES.titre} texte={PAGE_PROGRAMMES.texte} className="!mb-0" />
            </Section>

            <Section fond="gris" conteneurClassName="!pt-6 !max-w-7xl">
                <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4 pt-3">
                    <CarteOffre
                        nom={MAISON.nom}
                        accroche={MAISON.accroche}
                        prix={0}
                        mention={mentionMaison}
                        points={[MAISON.gratuit, `${MAISON.activites} activités de ${MAISON.dureeActivite}`, MAISON.premium]}
                        action={<CtaMaison variante="secondaire" className="w-full !whitespace-normal !px-4" />}
                    />
                    <CarteOffre
                        nom={G.nom}
                        accroche={G.accroche}
                        badge={G.badge}
                        accent
                        prix={prixGroupe()}
                        prixBarre={fondatrice ? G.prix : undefined}
                        mention={PAIEMENT_PROGRAMMES}
                        points={[...pg.concretement.slice(0, 3), pg.recu[1]]}
                        action={actionProgramme(G)}
                    />
                    <CarteOffre
                        nom={I.nom}
                        accroche={I.accroche}
                        prix={I.prix}
                        mention={PAIEMENT_PROGRAMMES}
                        points={[...pi.concretement.slice(0, 3), pi.recu[1]]}
                        action={actionProgramme(I)}
                    />
                    <CarteOffre
                        id="complet"
                        nom={C.nom}
                        accroche={C.accroche}
                        prix={C.prix}
                        mention={PAIEMENT_PROGRAMMES}
                        points={[C.resume, pi.complet.passerelle, pi.recu[3]]}
                        action={actionProgramme(C)}
                    />
                </div>

                <div className="mt-12 max-w-3xl mx-auto text-center space-y-2">
                    {fondatrice && <p className="font-semibold text-[#1B263B]">{PAGE_PROGRAMMES.fondatrice}</p>}
                    <p className="text-gray-700">{NOTE_TAXES}</p>
                    <p className="text-gray-700">{PAGE_PROGRAMMES.lancement}</p>
                </div>
            </Section>

            {/* Remboursement */}
            <Section>
                <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start gap-5 bg-[#f8f9fa] border border-gray-100 rounded-[2rem] p-8 shadow-lg">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1B263B] text-[#C5A059]">
                        <ShieldCheck size={28} aria-hidden="true" />
                    </span>
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-[#1B263B]">{LOCAL.remboursementTitre}</h2>
                        <p className="mt-2 text-lg text-gray-700 leading-relaxed">{GARANTIE}</p>
                    </div>
                </div>
            </Section>

            {/* Par où commencer */}
            <Section fond="gris">
                <TitreSection titre={PAGE_PROGRAMMES.parOuCommencer.titre} />
                <ul className="max-w-3xl mx-auto space-y-3">
                    {PAGE_PROGRAMMES.parOuCommencer.items.map((it) => (
                        <li key={it.to}>
                            <Link
                                to={it.to}
                                className="group flex items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 hover:border-[#C5A059] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                            >
                                <span className="text-gray-700">
                                    {it.si}
                                    <span className="mx-2 text-[#8A6A2F]" aria-hidden="true">→</span>
                                    <span className="sr-only"> : </span>
                                    <strong className="text-[#1B263B]">{it.alors}</strong>
                                </span>
                                <ArrowRight size={18} aria-hidden="true" className="shrink-0 text-[#8A6A2F] group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-10 text-center">
                    <CtaAppel taille="lg" className="w-full sm:w-auto" />
                </div>
            </Section>
        </>
    );
};

export default Programmes;
