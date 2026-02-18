import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Sport from './pages/Sport';
import Method from './pages/Method';
import Programs from './pages/Programs';
import Booking from './pages/Booking';
import About from './pages/About';
import Locations from './components/home/Locations';
import useBooking from './hooks/useBooking';
import './styles.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    // Use the custom hook for all booking logic
    const booking = useBooking(setCurrentPage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setBookingStep={booking.setBookingStep}
            />

            <main className="pt-20">
                {currentPage === 'home' && (
                    <Home
                        setCurrentPage={setCurrentPage}
                        setBookingStep={booking.setBookingStep}
                        handleSelectProgram={booking.handleSelectProgram}
                    />
                )}

                {currentPage === 'sport' && (
                    <Sport
                        setCurrentPage={setCurrentPage}
                        setBookingStep={booking.setBookingStep}
                        bookingData={booking.bookingData}
                        setBookingData={booking.setBookingData}
                    />
                )}

                {currentPage === 'methode' && (
                    <Method
                        setCurrentPage={setCurrentPage}
                        setBookingStep={booking.setBookingStep}
                    />
                )}

                {currentPage === 'programmes' && (
                    <Programs handleSelectProgram={booking.handleSelectProgram} />
                )}

                {currentPage === 'booking' && (
                    <Booking
                        {...booking} // Spread all booking state and handlers props
                        setCurrentPage={setCurrentPage}
                    />
                )}

                {currentPage === 'a-propos' && <About />}

                {/* Reusing Locations component as a standalone page */}
                {currentPage === 'zones' && (
                    <div className="pt-10">
                        <Locations />
                    </div>
                )}

                {/* 404 Fallback - Should not happen if nav is correct but good for robustness */}
                {!['home', 'sport', 'methode', 'programmes', 'booking', 'a-propos', 'zones'].includes(currentPage) && (
                    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl font-serif text-[#1B263B] mb-4">Page Introuvable</h1>
                        <p className="text-gray-600 mb-8">Désolé, la page que vous cherchez n'existe pas.</p>
                        <button
                            onClick={() => setCurrentPage('home')}
                            className="bg-[#1B263B] text-white px-8 py-3 rounded-full hover:bg-[#2c3e5a] transition-colors"
                        >
                            Retour à l'accueil
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default App;
