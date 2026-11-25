import React from 'react';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Section from '../components/shared/Section';
import TitreSection from '../components/shared/TitreSection';
import Bouton from '../components/shared/Bouton';
import CtaMaison from '../components/shared/CtaMaison';
import CarteOffre from '../components/shared/CarteOffre';
import Faq from '../components/shared/Faq';
import FormulaireDemande from '../components/shared/FormulaireDemande';
import CadreTelephone from '../components/home/CadreTelephone';
import { PAGE_MAISON } from '../content/textes';
import { MAISON, formatPrix, decembreGratuitActif } from '../data/offre';
import ecranMaison from '../assets/app/ecran-maison.webp';
import ecranActivite from '../assets/app/ecran-activite.webp';
import ecranParcours from '../assets/app/ecran-parcours.webp';
import ecranBilan from '../assets/app/ecran-bilan.webp';
import cabriAssis from '../assets/cabri/cabri-assis.webp';
import cabriChampion from '../assets/cabri/cabri-champion.webp';

// Petits textes ajoutés localement (à reporter dans textes.js).
const LOCAL = {
    ctaAcces: 'Recevoir mon accès gratuit',
    confirmation: { titre: 'Merci !', texte: 'Vous recevrez votre accès par courriel dans les 2 jours ouvrables.' },
    boutonForm: 'Recevoir mon accès',
    ouvertTitre: 'Où la trouver',
    appStore: 'Télécharger sur l’App Store',
    googlePlay: 'Disponible sur Google Play',
    renvoi: 'Envie de vivre cela aussi sur le terrain ?',
    renvoiLien: 'Voir les programmes en présentiel',
    prixMois: 'par mois',
    prixAn: 'par an',
    faqTitre: 'Vos questions',
};

const ALT = {
    maison: 'Écran d’accueil de THRIVE Maison : l’activité recommandée du soir',
    activite: 'Écran d’une activité de THRIVE Maison, à faire ensemble en 10 minutes',
    parcours: 'Écran du parcours de 13 semaines de THRIVE Maison',
    bilan: 'Écran du bilan de THRIVE Maison, qui montre le chemin parcouru',
    assis: 'Cabri, la mascotte de THRIVE Maison, assis et souriant',
    champion: 'Cabri, la mascotte de THRIVE Maison, prêt pour le défi',
};

const Maison = () => {
    const P = PAGE_MAISON;
    const beta = MAISON.statut === 'beta';
    const decembre = decembreGratuitActif();

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'THRIVE Maison',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'iOS, Android, Web',
        description: P.seo.description,
        offers: [
            { '@type': 'Offer', price: '0', priceCurrency: 'CAD', name: 'Gratuit' },
            { '@type': 'Offer', price: String(MAISON.prixMensuel), priceCurrency: 'CAD', name: 'Premium mensuel' },
            { '@type': 'Offer', price: String(MAISON.prixAnnuel), priceCurrency: 'CAD', name: 'Premium annuel' },
        ],
    };

    return (
        <>
            <SEO title={P.seo.title} description={P.seo.description} schema={schema} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid gap-10 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-6 min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F7A5A] mb-4">{P.hero.surtitre}</p>
                        <h1 className="font-serif text-[#1B263B] leading-[1.05] text-5xl sm:text-6xl">
                            <span className="font-bold italic">{P.hero.titre}</span>
                            <span className="block mt-2 text-[#6F7A5A] text-4xl sm:text-5xl">{P.hero.titreSuite}</span>
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl">{P.hero.texte}</p>
                        <div className="mt-8">
                            {MAISON.statut === 'ouvert' ? (
                                <CtaMaison taille="lg" className="w-full sm:w-auto" />
                            ) : (
                                <Bouton to="#acces" taille="lg" className="w-full sm:w-auto">
                                    {LOCAL.ctaAcces}
                                </Bouton>
                            )}
                        </div>
                        {decembre && <p className="mt-4 text-sm font-semibold text-[#8A6A2F]">{P.tarifs.decembre}</p>}
                    </div>
                    <div className="lg:col-span-6 relative flex justify-center min-w-0 overflow-hidden sm:overflow-visible">
                        <div className="relative flex items-end justify-center gap-0 h-[19rem] sm:h-[30rem] w-full max-w-lg">
                            <div className="absolute inset-x-6 top-6 bottom-0 rounded-full bg-gradient-to-br from-[#C5A059]/25 via-[#8F9779]/25 to-[#1B263B]/10" aria-hidden="true" />
                            <CadreTelephone src={ecranActivite} alt={ALT.activite} priorite className="relative w-32 sm:w-48 -rotate-3 translate-y-4 -mr-4" />
                            <CadreTelephone src={ecranMaison} alt={ALT.maison} priorite className="relative z-10 w-36 sm:w-56 -translate-y-4" />
                            <CadreTelephone src={ecranBilan} alt={ALT.bilan} priorite className="relative w-32 sm:w-48 rotate-3 translate-y-6 -ml-4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pour qui */}
            <Section>
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-center max-w-4xl mx-auto">
                    <div>
                        <TitreSection alignement="gauche" titre={P.pourQui.titre} className="!mb-5" />
                        <p className="text-xl text-gray-700 leading-relaxed">{P.pourQui.texte}</p>
                    </div>
                    <img src={cabriAssis} alt={ALT.assis} width="520" height="520" loading="lazy" className="w-40 sm:w-56 h-auto mx-auto" />
                </div>
            </Section>

            {/* Comment ça marche */}
            <Section fond="gris">
                <TitreSection titre={P.commentCaMarche.titre} />
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <ol className="space-y-5">
                        {P.commentCaMarche.items.map((e, i) => (
                            <li key={e.titre} className="flex gap-4 bg-white rounded-[2rem] p-6 shadow-lg border border-gray-100">
                                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C5A059] text-[#1B263B] font-serif font-bold text-xl">
                                    {i + 1}
                                </span>
                                <div>
                                    <h3 className="text-lg font-serif font-bold text-[#1B263B] leading-snug">{e.titre}</h3>
                                    <p className="mt-1 text-gray-700 leading-relaxed">{e.texte}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <div className="flex items-end justify-center gap-3 sm:gap-5">
                        <CadreTelephone src={ecranActivite} alt={ALT.activite} className="w-28 sm:w-44" />
                        <CadreTelephone src={ecranParcours} alt={ALT.parcours} className="w-28 sm:w-44 -translate-y-8" />
                        <img src={cabriChampion} alt={ALT.champion} width="520" height="520" loading="lazy" className="hidden sm:block w-32 h-auto -ml-6 self-end" />
                    </div>
                </div>
            </Section>

            {/* Tarifs */}
            <Section>
                <TitreSection titre={P.tarifs.titre} />
                <div className="grid gap-7 md:grid-cols-2 max-w-4xl mx-auto pt-3">
                    <CarteOffre
                        nom={P.tarifs.gratuitTitre}
                        prix={formatPrix(0)}
                        points={[P.tarifs.gratuitTexte]}
                        action={<CtaMaison variante="secondaire" className="w-full" />}
                    />
                    <CarteOffre
                        nom={P.tarifs.premiumTitre}
                        accent
                        prix={`${formatPrix(MAISON.prixMensuel)} ${LOCAL.prixMois}`}
                        mention={`ou ${formatPrix(MAISON.prixAnnuel)} ${LOCAL.prixAn}`}
                        points={[P.tarifs.premiumTexte, P.tarifs.premiumEssai]}
                    />
                </div>
                <div className="mt-8 max-w-3xl mx-auto text-center space-y-2 text-gray-700">
                    <p>{P.tarifs.inclus}</p>
                    {decembre && <p className="font-semibold text-[#1B263B]">{P.tarifs.decembre}</p>}
                </div>
            </Section>

            {/* Accès */}
            <Section id="acces" fond="marine">
                {beta ? (
                    <div className="max-w-xl mx-auto">
                        <TitreSection titre={P.acces.titreBeta} texte={P.acces.texteBeta} />
                        <FormulaireDemande
                            type="maison-beta"
                            champs={['prenom', 'email']}
                            boutonLabel={LOCAL.boutonForm}
                            confirmation={LOCAL.confirmation}
                            className="text-left"
                        />
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center">
                        <TitreSection titre={P.acces.titreOuvert} texte={P.acces.texteOuvert} />
                        <CtaMaison taille="lg" variante="or" surFonce className="w-full sm:w-auto" />
                        {MAISON.appStoreUrl || MAISON.googlePlayUrl ? (
                            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                                {MAISON.appStoreUrl && (
                                    <Bouton href={MAISON.appStoreUrl} nouvelOnglet variante="secondaire" surFonce>
                                        {LOCAL.appStore}
                                    </Bouton>
                                )}
                                {MAISON.googlePlayUrl && (
                                    <Bouton href={MAISON.googlePlayUrl} nouvelOnglet variante="secondaire" surFonce>
                                        {LOCAL.googlePlay}
                                    </Bouton>
                                )}
                            </div>
                        ) : (
                            <p className="mt-6 text-white/80">{P.acces.bientot}</p>
                        )}
                    </div>
                )}
            </Section>

            {/* FAQ */}
            <Section fond="gris">
                <TitreSection titre={LOCAL.faqTitre} />
                <Faq items={P.faq} />
            </Section>

            {/* Renvoi */}
            <Section conteneurClassName="!py-10 md:!py-14 text-center">
                <p className="text-lg text-gray-700">{LOCAL.renvoi}</p>
                <Bouton to="/programmes" variante="secondaire" className="mt-4" icone={<ArrowRight size={18} aria-hidden="true" />}>
                    {LOCAL.renvoiLien}
                </Bouton>
            </Section>
        </>
    );
};

export default Maison;
