import React, { useState, useEffect } from 'react';
import SEO from './components/seo/SEO';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Sport from './pages/Sport';
import Method from './pages/Method';
import Prix from './pages/Prix';
import Booking from './pages/Booking';
import About from './pages/About';
import PerformancePack from './pages/PerformancePack';
import AdvancedPack from './pages/AdvancedPack';
import EssentialPack from './pages/EssentialPack';
import Locations from './components/home/Locations';
import ListeAttente from './pages/ListeAttente';
import useBooking from './hooks/useBooking';
import { useTranslation } from 'react-i18next';
import './styles.css';

// Gabarit du site : la coquille commune à toutes les pages sauf la landing.
const SiteChrome = ({ booking }) => (
    <div className="min-h-screen bg-white font-sans text-gray-900">
        <Navbar setBookingStep={booking.setBookingStep} />
        <main className="pt-20">
            <Outlet />
        </main>
        <Footer />
    </div>
);

const App = () => {
    // We use useLocation to recreate the scroll to top behavior on route change
    const location = useLocation();
    const { t, i18n } = useTranslation();

    // Use the custom hook for all booking logic
    const booking = useBooking();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Routes>
            {/* Landing autonome : elle apporte son propre en-tête et son propre
                pied de page, et ne doit RIEN mettre entre le visiteur et le
                formulaire — donc pas de Navbar, pas de Footer, pas de `pt-20`.

                Déclarée en sœur du gabarit, PAS derrière un early-return : un
                early-return démontait tout l'arbre d'un coup, et
                react-helmet-async traitait le démontage de la page précédente
                APRÈS le montage de celle-ci. Résultat, sur toute navigation
                interne vers cette page, le <head> se retrouvait vidé — titre
                d'onglet périmé et canonical absent. */}
            <Route path="/liste-attente" element={<ListeAttente />} />

            <Route element={<SiteChrome booking={booking} />}>
                <Route path="/" element={
                    <Home
                        setBookingStep={booking.setBookingStep}
                        handleSelectProgram={booking.handleSelectProgram}
                    />
                } />
                <Route path="/sport" element={
                    <Sport
                        setBookingStep={booking.setBookingStep}
                        bookingData={booking.bookingData}
                        setBookingData={booking.setBookingData}
                    />
                } />
                <Route path="/methode" element={
                    <Method
                        setBookingStep={booking.setBookingStep}
                    />
                } />
                <Route path="/prix" element={
                    <Prix handleSelectProgram={booking.handleSelectProgram} />
                } />
                <Route path="/booking" element={
                    <Booking
                        {...booking} // Spread all booking state and handlers props
                    />
                } />
                <Route path="/pack/performance" element={
                    <PerformancePack setBookingStep={booking.setBookingStep} />
                } />
                <Route path="/pack/avance" element={
                    <AdvancedPack setBookingStep={booking.setBookingStep} />
                } />
                <Route path="/pack/essential" element={
                    <EssentialPack setBookingStep={booking.setBookingStep} />
                } />
                {/* Pack Diagnostic retiré de l'offre : on redirige vers la page prix */}
                <Route path="/pack/diagnostic" element={<Navigate to="/prix" replace />} />
                <Route path="/a-propos" element={<About />} />
                {/* Reusing Locations component as a standalone page */}
                <Route path="/zones" element={
                    <div className="pt-10">
                        <SEO
                            title={t('seo.zones.title')}
                            description={t('seo.zones.desc')}
                            url="https://thrivesportpositive.com/zones"
                        />
                        <Locations />
                    </div>
                } />
                {/* L'onglet « Réservation » pointe désormais sur la liste
                    d'attente. /evaluation redirige au lieu de disparaître : la
                    page est indexée et sert de cible à des liens existants.
                    src/pages/Evaluation.jsx est conservé intact — pour la
                    remettre en service, réimporter la page et la rebrancher
                    ici. */}
                <Route path="/evaluation" element={<Navigate to="/liste-attente" replace />} />
                {/* 404 Fallback */}
                <Route path="*" element={
                    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl font-serif text-[#1B263B] mb-4">{t('error.not_found_title')}</h1>
                        <p className="text-gray-600 mb-8">{t('error.not_found_desc')}</p>
                        <button
                            onClick={() => window.location.href = "/"}
                            className="bg-[#1B263B] text-white px-8 py-3 rounded-full hover:bg-[#2c3e5a] transition-colors"
                        >
                            {t('error.not_found_btn')}
                        </button>
                    </div>
                } />
            </Route>
        </Routes>
    );
};

export default App;
