import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, CalendarDays, User, Trophy, LineChart, Home as HomeIcon } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import CarteOffre from '../components/shared/CarteOffre';
import CtaAppel from '../components/shared/CtaAppel';
import CtaReserver from '../components/shared/CtaReserver';
import Bouton from '../components/shared/Bouton';
import FormulaireDemande from '../components/shared/FormulaireDemande';
import { Waves } from '../components/ui/Waves';
import { PAGE_ACCOMPAGNEMENTS, PAGES_PROGRAMME, ACCUEIL, FORMULAIRES, CTA } from '../content/textes';
import {
    PROGRAMMES,
    OFFRE_FONDATRICE,
    NOTE_TAXES,
    PAIEMENT_PROGRAMMES,
    ENTREPRISE,
    prixGroupe,
} from '../data/offre';
import photoTerrain from '../assets/coach-child-hockey.jpg';
import photoPatinage from '../assets/pexels-tima-miroshnichenko-6015973.jpg';

const P = PAGE_ACCOMPAGNEMENTS;
const ICONES_POURQUOI = [User, Trophy, LineChart];

const Accompagnements = () => {
    const G = PROGRAMMES.groupe;
    const I = PROGRAMMES.individuel;
    const C = PROGRAMMES.complet;
    const fondatrice = OFFRE_FONDATRICE.active;

    const action = (p) => (
        <div className="space-y-3">
            <CtaReserver court programme={p.id} variante={p.id === 'groupe' ? 'primaire' : 'secondaire'} className="w-full !whitespace-normal !px-4" />
            <p className="text-center">
                <Link
                    to={p.path}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#8A6A2F] hover:text-[#1B263B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
                >
                    En savoir plus
                    <ArrowRight size={16} aria-hidden="true" />
                </Link>
            </p>
        </div>
    );

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Accompagnements THRIVE en présentiel',
        provider: { '@type': 'Organization', name: ENTREPRISE.raisonSociale, url: ENTREPRISE.site },
        areaServed: { '@type': 'City', name: 'Montréal' },
        offers: [G, I, C].map((p) => ({
            '@type': 'Offer',
            name: p.nom,
            price: String(p.id === 'groupe' ? prixGroupe() : p.prix),
            priceCurrency: 'CAD',
            url: `${ENTREPRISE.site}${p.path.split('#')[0]}`,
        })),
    };

    return (
        <>
            <SEO title={P.seo.title} description={P.seo.description} schema={schema} />

            {/* En-tête */}
            <section className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 opacity-60" aria-hidden="true">
                    <Waves strokeColor="#C5A05930" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid gap-10 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-6 min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F7A5A] mb-4">{P.surtitre}</p>
                        <h1 className="font-serif text-[#1B263B] leading-[1.05] text-5xl sm:text-6xl">
                            <span className="italic">{P.titre}</span>
                            <span className="block mt-2 text-[#6F7A5A] text-4xl sm:text-5xl">{P.titreSuite}</span>
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl">{P.texte}</p>
                        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                            <CtaReserver taille="lg" className="w-full sm:w-auto" />
                            <CtaAppel taille="lg" variante="secondaire" className="w-full sm:w-auto" />
                        </div>
                        <ul className="mt-6 space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <MapPin size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#8A6A2F]" />
                                <span>{ENTREPRISE.lieu}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CalendarDays size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#8A6A2F]" />
                                <span>Premières vagues en {ENTREPRISE.lancement}.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-6 relative min-w-0">
                        <img
                            src={photoTerrain}
                            alt="Un coach parle à un jeune hockeyeur sur la glace, pendant une séance"
                            width="1024"
                            height="682"
                            fetchPriority="high"
                            className="w-full h-64 sm:h-[26rem] object-cover rounded-[2rem] shadow-2xl"
                        />
                        <img
                            src={photoPatinage}
                            alt="Une coach et une jeune patineuse se tiennent la main sur la glace"
                            width="1920"
                            height="1280"
                            loading="lazy"
                            className="hidden sm:block absolute -bottom-8 -left-6 w-56 h-36 object-cover rounded-[1.5rem] shadow-xl border-4 border-white"
                        />
                    </div>
                </div>
            </section>

            {/* Pourquoi */}
            <Section fond="gris">
                <TitreSection titre={P.pourquoi.titre} />
                <div className="grid gap-6 md:grid-cols-3">
                    {P.pourquoi.items.map((it, i) => {
                        const Icone = ICONES_POURQUOI[i] || Trophy;
                        return (
                            <div key={it.titre} className="rounded-[2rem] bg-white border border-gray-100 shadow-sm p-7">
                                <div className="w-12 h-12 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#8A6A2F] mb-5">
                                    <Icone size={24} aria-hidden="true" />
                                </div>
                                <h3 className="font-sans font-semibold text-lg text-[#1B263B] leading-snug">{it.titre}</h3>
                                <p className="mt-2 text-gray-700 leading-relaxed">{it.texte}</p>
                            </div>
                        );
                    })}
                </div>
            </Section>

            {/* Trois formules */}
            <Section conteneurClassName="!max-w-6xl">
                <TitreSection titre={P.formules.titre} texte={P.formules.texte} />
                <div className="grid gap-7 md:grid-cols-3 pt-3">
                    <CarteOffre
                        nom={G.nom}
                        accroche={G.accroche}
                        badge={G.badge}
                        accent
                        prix={prixGroupe()}
                        prixBarre={fondatrice ? G.prix : undefined}
                        mention={PAIEMENT_PROGRAMMES}
                        points={PAGES_PROGRAMME.groupe.concretement.slice(0, 3)}
                        action={action(G)}
                    />
                    <CarteOffre
                        nom={I.nom}
                        accroche={I.accroche}
                        prix={I.prix}
                        mention={PAIEMENT_PROGRAMMES}
                        points={PAGES_PROGRAMME.individuel.concretement.slice(0, 3)}
                        action={action(I)}
                    />
                    <CarteOffre
                        id="complet"
                        nom={C.nom}
                        accroche={C.accroche}
                        prix={C.prix}
                        mention={PAIEMENT_PROGRAMMES}
                        points={[C.resume, PAGES_PROGRAMME.individuel.complet.passerelle]}
                        action={action(C)}
                    />
                </div>
                <div className="mt-10 max-w-3xl mx-auto text-center space-y-2 text-gray-700">
                    {fondatrice && <p className="font-semibold text-[#1B263B]">{OFFRE_FONDATRICE.texte}</p>}
                    <p>{NOTE_TAXES}</p>
                </div>
            </Section>

            {/* Une séance */}
            <Section fond="marine">
                <TitreSection titre={P.seance.titre} surFonce />
                <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {P.seance.temps.map((t, i) => (
                        <li key={t.nom} className="rounded-[1.5rem] bg-white/5 border border-white/15 p-5">
                            <p className="text-[#C5A059] font-serif text-3xl">{i + 1}</p>
                            <p className="mt-2 font-semibold text-white leading-snug">{t.nom}</p>
                            <p className="mt-1 text-sm text-white/70">{t.duree}</p>
                        </li>
                    ))}
                </ol>
            </Section>

            {/* Comment ça se passe */}
            <Section>
                <TitreSection titre={ACCUEIL.etapes.titre} />
                <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {ACCUEIL.etapes.items.map((e, i) => (
                        <li key={e.titre} className="rounded-[2rem] bg-[#f8f9fa] border border-gray-100 p-6">
                            <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C5A059] text-[#1B263B] font-serif text-xl">
                                {i + 1}
                            </span>
                            <h3 className="mt-4 font-sans font-semibold text-lg text-[#1B263B] leading-snug">{e.titre}</h3>
                            <p className="mt-2 text-gray-700 leading-relaxed">{e.texte}</p>
                        </li>
                    ))}
                </ol>
                <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-start gap-4 rounded-[2rem] bg-[#f8f9fa] border border-gray-100 p-7">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#1B263B] flex items-center justify-center text-[#C5A059]">
                        <HomeIcon size={22} aria-hidden="true" />
                    </div>
                    <div>
                        <h3 className="font-sans font-semibold text-lg text-[#1B263B]">{P.maison.titre}</h3>
                        <p className="mt-1 text-gray-700 leading-relaxed">{P.maison.texte}</p>
                        <Bouton to="/maison" variante="secondaire" taille="sm" className="mt-4">
                            Découvrir THRIVE Maison
                        </Bouton>
                    </div>
                </div>
            </Section>

            {/* Réserver */}
            <Section id="reserver" fond="gris">
                <div className="grid gap-10 lg:grid-cols-[5fr_6fr] lg:gap-14 items-start">
                    <div>
                        <TitreSection alignement="gauche" titre={P.reserver.titre} texte={P.reserver.texte} className="!mb-6" />
                        <ul className="space-y-3 text-gray-700">
                            {[PAIEMENT_PROGRAMMES, ENTREPRISE.lieu, `Vous préférez en parler d’abord ? Réservez l’appel gratuit de 15 minutes.`].map((t) => (
                                <li key={t} className="flex items-start gap-3">
                                    <Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-[#8A6A2F]" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                        <CtaAppel variante="secondaire" className="mt-6" />
                    </div>
                    <FormulaireDemande
                        type="reservation"
                        champs={['telephone', 'interet']}
                        interets={FORMULAIRES.interetsPresentiel}
                        titre={CTA.reserver}
                        boutonLabel={P.reserver.bouton}
                        confirmation={P.reserver.confirmation}
                    />
                </div>
            </Section>
        </>
    );
};

export default Accompagnements;
