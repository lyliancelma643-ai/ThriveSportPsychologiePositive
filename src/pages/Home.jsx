import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import Bouton from '../components/shared/Bouton';
import CtaMaison from '../components/shared/CtaMaison';
import CtaAppel from '../components/shared/CtaAppel';
import CtaReserver from '../components/shared/CtaReserver';
import CarteOffre from '../components/shared/CarteOffre';
import Faq from '../components/shared/Faq';
import HeroAccueil from '../components/home/HeroAccueil';
import { PatinageIcon, HockeyIcon, BasketballIcon, SoccerIcon } from '../components/icons/PremiumSportsIcons';
import { ACCUEIL, FAQ_ACCUEIL } from '../content/textes';
import {
    ENTREPRISE,
    MAISON,
    PROGRAMMES,
    OFFRE_FONDATRICE,
    NOTE_TAXES,
    formatPrix,
    prixGroupe,
} from '../data/offre';
import appTroisEcrans from '../assets/app/app-trois-ecrans.webp';
import photoFondateur from '../assets/lylian-celma.webp';
import photoTerrain from '../assets/coach-child-hockey.jpg';

// Petits textes ajoutés localement (à reporter dans textes.js).
const LIBELLE_DETAIL = 'En savoir plus';
const ALT_TROIS_ECRANS = 'Trois écrans de l’application THRIVE Maison : l’activité du soir, le parcours et le bilan';
const ALT_FONDATEUR = 'Lylian Celma, fondateur de THRIVE Sport Positive, en polo THRIVE';
const ALT_TERRAIN = 'Un coach parle à un jeune hockeyeur sur la glace, pendant une séance';

const SCHEMA_ORGANISATION = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ENTREPRISE.raisonSociale,
    url: ENTREPRISE.site,
    email: ENTREPRISE.courriel,
    logo: 'https://thrivesportpositive.com/favicon.png',
    areaServed: { '@type': 'City', name: 'Montréal' },
};

const Home = () => {
    const fondatrice = OFFRE_FONDATRICE.active;
    const G = PROGRAMMES.groupe;
    const I = PROGRAMMES.individuel;
    const C = PROGRAMMES.complet;
    const mentionMaison = `puis premium à ${formatPrix(MAISON.prixMensuel)}/mois ou ${formatPrix(MAISON.prixAnnuel)}/an`;

    return (
        <>
            <SEO title={ACCUEIL.seo.title} description={ACCUEIL.seo.description} schema={SCHEMA_ORGANISATION} />

            <HeroAccueil />

            {/* Situations */}
            <Section fond="gris">
                <TitreSection titre={ACCUEIL.situations.titre} />
                <div className="grid gap-5 md:grid-cols-3">
                    {ACCUEIL.situations.items.map((s) => (
                        <article key={s.id} className="flex flex-col bg-white rounded-[2rem] p-7 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-serif font-bold text-[#1B263B] leading-snug">{s.titre}</h3>
                            <p className="mt-3 text-gray-700 leading-relaxed flex-1">{s.texte}</p>
                            <Link
                                to={s.lien.to}
                                className="mt-5 inline-flex items-center gap-2 font-semibold text-[#8A6A2F] hover:text-[#1B263B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
                            >
                                {s.lien.label}
                                <ArrowRight size={16} aria-hidden="true" />
                            </Link>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Le trou */}
            <Section>
                <TitreSection titre={ACCUEIL.trou.titre} texte={ACCUEIL.trou.texte} />
                <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
                    {ACCUEIL.trou.colonnes.map((c) => (
                        <div
                            key={c.titre}
                            className={
                                c.accent
                                    ? 'rounded-[2rem] bg-[#1B263B] text-white p-8 shadow-2xl md:-my-3 border-2 border-[#C5A059] text-center'
                                    : 'rounded-[2rem] bg-[#f8f9fa] border border-gray-100 p-8 text-center'
                            }
                        >
                            <h3 className={`text-2xl font-serif font-bold ${c.accent ? 'text-[#C5A059]' : 'text-[#1B263B]'}`}>{c.titre}</h3>
                            <p className={`mt-3 leading-relaxed ${c.accent ? 'text-white/90' : 'text-gray-700'}`}>{c.texte}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-10 max-w-2xl mx-auto text-center text-gray-700 leading-relaxed">{ACCUEIL.trou.note}</p>
            </Section>

            {/* Bloc maison */}
            <Section fond="marine">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div>
                        <TitreSection
                            alignement="gauche"
                            surtitre={ACCUEIL.maison.surtitre}
                            titre={ACCUEIL.maison.titre}
                            texte={ACCUEIL.maison.texte}
                            className="!mb-6"
                        />
                        <ul className="space-y-3">
                            {ACCUEIL.maison.points.map((p) => (
                                <li key={p} className="flex items-start gap-3 text-white/90">
                                    <Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-[#C5A059]" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                        <Bouton to="/maison" variante="or" taille="lg" surFonce className="mt-8 w-full sm:w-auto" icone={<ArrowRight size={18} aria-hidden="true" />}>
                            {ACCUEIL.maison.cta}
                        </Bouton>
                    </div>
                    <img
                        src={appTroisEcrans}
                        alt={ALT_TROIS_ECRANS}
                        width="1800"
                        height="772"
                        loading="lazy"
                        className="w-full h-56 sm:h-auto object-cover rounded-[2rem] shadow-2xl"
                    />
                </div>
            </Section>

            {/* Bloc présentiel (miroir du bloc Maison) */}
            <Section>
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <img
                        src={photoTerrain}
                        alt={ALT_TERRAIN}
                        width="1024"
                        height="682"
                        loading="lazy"
                        className="order-last lg:order-first w-full h-56 sm:h-auto object-cover rounded-[2rem] shadow-2xl"
                    />
                    <div>
                        <TitreSection
                            alignement="gauche"
                            surtitre={ACCUEIL.presentiel.surtitre}
                            titre={ACCUEIL.presentiel.titre}
                            texte={ACCUEIL.presentiel.texte}
                            className="!mb-6"
                        />
                        <ul className="space-y-3">
                            {ACCUEIL.presentiel.points.map((p) => (
                                <li key={p} className="flex items-start gap-3 text-gray-700">
                                    <Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-[#8A6A2F]" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                            <CtaReserver taille="lg" className="w-full sm:w-auto" />
                            <Bouton to="/accompagnements" variante="secondaire" taille="lg" className="w-full sm:w-auto" icone={<ArrowRight size={18} aria-hidden="true" />}>
                                {ACCUEIL.presentiel.cta}
                            </Bouton>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Offres */}
            <Section id="offres" fond="gris" conteneurClassName="!max-w-7xl">
                <TitreSection titre={ACCUEIL.offres.titre} texte={ACCUEIL.offres.texte} />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-3">
                    <CarteOffre
                        nom={MAISON.nom}
                        accroche={MAISON.accroche}
                        prix={0}
                        mention={mentionMaison}
                        points={[MAISON.gratuit]}
                        action={<Bouton to={'/maison'} variante="secondaire" className="w-full !whitespace-normal !px-4">{ACCUEIL.maison.cta}</Bouton>}
                    />
                    <CarteOffre
                        nom={G.nom}
                        accroche={G.accroche}
                        badge={G.badge}
                        accent
                        prix={prixGroupe()}
                        prixBarre={fondatrice ? G.prix : undefined}
                        points={[G.resume]}
                        action={<div className="space-y-3"><CtaReserver court programme={G.id} variante="primaire" className="w-full !whitespace-normal !px-4" /><p className="text-center"><Link to={G.path} className="inline-flex items-center gap-1.5 font-semibold text-[#8A6A2F] hover:text-[#1B263B] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]">{LIBELLE_DETAIL}<ArrowRight size={16} aria-hidden="true" /></Link></p></div>}
                    />
                    <CarteOffre
                        nom={I.nom}
                        accroche={I.accroche}
                        prix={I.prix}
                        points={[I.resume]}
                        action={<div className="space-y-3"><CtaReserver court programme={I.id} variante="secondaire" className="w-full !whitespace-normal !px-4" /><p className="text-center"><Link to={I.path} className="inline-flex items-center gap-1.5 font-semibold text-[#8A6A2F] hover:text-[#1B263B] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]">{LIBELLE_DETAIL}<ArrowRight size={16} aria-hidden="true" /></Link></p></div>}
                    />
                    <CarteOffre
                        nom={C.nom}
                        accroche={C.accroche}
                        prix={C.prix}
                        points={[C.resume]}
                        action={<div className="space-y-3"><CtaReserver court programme={C.id} variante="secondaire" className="w-full !whitespace-normal !px-4" /><p className="text-center"><Link to={C.path} className="inline-flex items-center gap-1.5 font-semibold text-[#8A6A2F] hover:text-[#1B263B] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]">{LIBELLE_DETAIL}<ArrowRight size={16} aria-hidden="true" /></Link></p></div>}
                    />
                </div>
                <div className="mt-10 max-w-3xl mx-auto text-center space-y-2">
                    {fondatrice && <p className="font-semibold text-[#1B263B]">{OFFRE_FONDATRICE.texte}</p>}
                    <p className="text-gray-700">{NOTE_TAXES}</p>
                </div>
            </Section>

            {/* Étapes */}
            <Section>
                <TitreSection titre={ACCUEIL.etapes.titre} />
                <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {ACCUEIL.etapes.items.map((e, i) => (
                        <li key={e.titre} className="relative bg-[#f8f9fa] rounded-[2rem] p-7 border border-gray-100">
                            <span
                                aria-hidden="true"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C5A059] text-[#1B263B] font-serif font-bold text-xl"
                            >
                                {i + 1}
                            </span>
                            <h3 className="mt-4 text-lg font-serif font-bold text-[#1B263B] leading-snug">{e.titre}</h3>
                            <p className="mt-2 text-gray-700 leading-relaxed">{e.texte}</p>
                        </li>
                    ))}
                </ol>
            </Section>

            {/* Sport */}
            <Section fond="gris">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="flex justify-center gap-5 text-5xl text-[#6F7A5A] mb-6">
                        <HockeyIcon />
                        <PatinageIcon />
                        <BasketballIcon />
                        <SoccerIcon />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B263B] leading-tight">{ACCUEIL.sport.titre}</h2>
                    <p className="mt-5 text-lg text-gray-700 leading-relaxed">{ACCUEIL.sport.texte}</p>
                </div>
            </Section>

            {/* Fondateur */}
            <Section>
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <img
                        src={photoFondateur}
                        alt={ALT_FONDATEUR}
                        width="900"
                        height="900"
                        loading="lazy"
                        className="w-full max-w-md mx-auto lg:mx-0 h-auto aspect-square rounded-[2rem] shadow-xl object-cover"
                    />
                    <div>
                        <TitreSection alignement="gauche" titre={ACCUEIL.fondateur.titre} texte={ACCUEIL.fondateur.texte} className="!mb-6" />
                        <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                            {ACCUEIL.fondateur.competences.map((c) => (
                                <li key={c} className="flex items-start gap-2.5 text-gray-700 leading-snug">
                                    <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#8A6A2F]" />
                                    <span>{c}</span>
                                </li>
                            ))}
                        </ul>
                        <Bouton to="/a-propos" variante="secondaire" icone={<ArrowRight size={18} aria-hidden="true" />}>
                            {ACCUEIL.fondateur.lien}
                        </Bouton>
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section fond="gris">
                <TitreSection titre={ACCUEIL.faqTitre} />
                <Faq items={FAQ_ACCUEIL} />
            </Section>

            {/* Bandeau final */}
            <Section fond="marine" conteneurClassName="text-center">
                <TitreSection titre={ACCUEIL.hero.titre + ' ' + ACCUEIL.hero.titreSuite} className="!mb-8" />
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <CtaMaison taille="lg" variante="or" surFonce className="w-full sm:w-auto" />
                    <CtaReserver taille="lg" variante="secondaire" surFonce className="w-full sm:w-auto" />
                </div>
                <p className="mt-6 text-white/80">
                    Une question avant de vous lancer&nbsp;?{' '}
                    <Link to="/appel" className="underline underline-offset-4 hover:text-[#C5A059] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]">
                        Réservez l’appel gratuit de 15 minutes
                    </Link>
                    .
                </p>
            </Section>
        </>
    );
};

export default Home;
