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
                    />
                )}

                {currentPage === 'sport' && (
                    <Sport
                        setCurrentPage={setCurrentPage}
                        setBookingStep={booking.setBookingStep}
                    />
                )}

                {currentPage === 'methode' && <Method />}

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
            </main>

            <Footer />
        </div>
    );
};

export default App;
