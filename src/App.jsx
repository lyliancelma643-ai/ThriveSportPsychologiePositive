import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Sport from './pages/Sport';
import Method from './pages/Method';
import Programs from './pages/Programs';
import Booking from './pages/Booking';
import Evaluation from './pages/Evaluation';
import About from './pages/About';
import Locations from './components/home/Locations';
import useBooking from './hooks/useBooking';
import './styles.css';

const App = () => {
    // We use useLocation to recreate the scroll to top behavior on route change
    const location = useLocation();

    // Use the custom hook for all booking logic
    const booking = useBooking();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar
                setBookingStep={booking.setBookingStep}
            />

            <main className="pt-20">
                <Routes>
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
                    <Route path="/programmes" element={
                        <Programs handleSelectProgram={booking.handleSelectProgram} />
                    } />
                    <Route path="/booking" element={
                        <Booking
                            {...booking} // Spread all booking state and handlers props
                        />
                    } />
                    <Route path="/a-propos" element={<About />} />
                    {/* Reusing Locations component as a standalone page */}
                    <Route path="/zones" element={
                        <div className="pt-10">
                            <Locations />
                        </div>
                    } />
                    <Route path="/evaluation" element={
                        <Evaluation handleSelectProgram={booking.handleSelectProgram} />
                    } />
                    {/* 404 Fallback */}
                    <Route path="*" element={
                        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                            <h1 className="text-4xl font-serif text-[#1B263B] mb-4">Page Introuvable</h1>
                            <p className="text-gray-600 mb-8">Désolé, la page que vous cherchez n'existe pas.</p>
                            <button
                                onClick={() => window.location.href = "/"}
                                className="bg-[#1B263B] text-white px-8 py-3 rounded-full hover:bg-[#2c3e5a] transition-colors"
                            >
                                Retour à l'accueil
                            </button>
                        </div>
                    } />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default App;
