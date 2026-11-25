import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BandeauDecembre from './components/shared/BandeauDecembre';
import BarreMobile from './components/shared/BarreMobile';
import Bouton from './components/shared/Bouton';
import Home from './pages/Home';
import Maison from './pages/Maison';
import Programmes from './pages/Programmes';
import ProgrammeGroupe from './pages/ProgrammeGroupe';
import ProgrammeIndividuel from './pages/ProgrammeIndividuel';
import Method from './pages/Method';
import About from './pages/About';
import Partenaires from './pages/Partenaires';
import Appel from './pages/Appel';
import Accompagnements from './pages/Accompagnements';
import Confidentialite from './pages/legal/Confidentialite';
import Conditions from './pages/legal/Conditions';
import { capturerAttribution } from './lib/attribution';
import { PAGE_INTROUVABLE } from './content/textes';
import './styles.css';

// Haut de page à chaque changement de route ; si l'URL porte une #ancre, on
// défile vers l'ancre à la place (avec quelques essais : l'élément peut
// apparaître juste après le rendu).
const ScrollManager = () => {
    const { pathname, hash, key } = useLocation();
    const precedent = useRef(null);

    useEffect(() => {
        const changeDePage = precedent.current !== pathname;
        precedent.current = pathname;

        if (hash) {
            const id = decodeURIComponent(hash.slice(1));
            let essais = 0;
            let minuteur;
            const aller = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'auto', block: 'start' });
                } else if (essais++ < 10) {
                    minuteur = setTimeout(aller, 60);
                }
            };
            aller();
            return () => clearTimeout(minuteur);
        }
        if (changeDePage) window.scrollTo(0, 0);
        return undefined;
    }, [pathname, hash, key]);

    return null;
};

// Gabarit du site. pb-20 md:pb-0 : la barre fixe mobile ne cache pas le pied de page.
const SiteChrome = () => (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 md:pb-0">
        <Navbar />
        <main className="pt-20">
            <BandeauDecembre />
            <Outlet />
        </main>
        <Footer />
        <BarreMobile />
    </div>
);

// Filet de sécurité (navigation interne / dev) : les anciennes URL sont en 301
// côté Vercel (vercel.json). Ici on garde la query string (?source=qr, ?code=…).
const Rediriger = ({ vers }) => {
    const { search } = useLocation();
    return <Navigate to={vers + search} replace />;
};

const PageIntrouvable = () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <Helmet>
            <title>{PAGE_INTROUVABLE.title}</title>
            <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="text-3xl md:text-4xl font-serif text-[#1B263B] mb-4">{PAGE_INTROUVABLE.titre}</h1>
        <p className="text-gray-600 mb-8 max-w-md">{PAGE_INTROUVABLE.texte}</p>
        <Bouton to="/" taille="lg">{PAGE_INTROUVABLE.bouton}</Bouton>
    </div>
);

const App = () => {
    // Code partenaire et UTM : lus une fois, à l'arrivée sur le site.
    useEffect(() => {
        capturerAttribution();
    }, []);

    return (
        <>
            <ScrollManager />
            <Routes>
                <Route element={<SiteChrome />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/maison" element={<Maison />} />
                    <Route path="/accompagnements" element={<Accompagnements />} />
                    <Route path="/programmes" element={<Programmes />} />
                    <Route path="/programmes/groupe" element={<ProgrammeGroupe />} />
                    <Route path="/programmes/individuel" element={<ProgrammeIndividuel />} />
                    <Route path="/methode" element={<Method />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/partenaires" element={<Partenaires />} />
                    <Route path="/appel" element={<Appel />} />
                    <Route path="/confidentialite" element={<Confidentialite />} />
                    <Route path="/conditions" element={<Conditions />} />

                    {/* Anciennes URL (301 dans vercel.json) — filet de sécurité */}
                    <Route path="/liste-attente" element={<Rediriger vers="/appel" />} />
                    <Route path="/booking" element={<Rediriger vers="/appel" />} />
                    <Route path="/evaluation" element={<Rediriger vers="/appel" />} />
                    <Route path="/prix" element={<Rediriger vers="/programmes" />} />
                    <Route path="/sport" element={<Rediriger vers="/" />} />
                    <Route path="/zones" element={<Rediriger vers="/" />} />
                    <Route path="/programmes/aller-vers-les-autres" element={<Rediriger vers="/programmes/groupe" />} />
                    <Route path="/programmes/oser-essayer" element={<Rediriger vers="/programmes/individuel" />} />
                    <Route path="/programmes/le-moment-qui-compte" element={<Rediriger vers="/maison" />} />
                    <Route path="/programmes/maison" element={<Rediriger vers="/maison" />} />
                    <Route path="/pack/*" element={<Rediriger vers="/programmes" />} />

                    <Route path="*" element={<PageIntrouvable />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
