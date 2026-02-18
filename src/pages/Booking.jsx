import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import BookingForm from '../components/booking/BookingForm';
import SuccessView from '../components/booking/SuccessView';
import RecommendationView from '../components/booking/RecommendationView';
import SportSelection from '../components/booking/SportSelection';
import CalBooking from '../components/booking/CalBooking';
import { PROGRAMS_DATA } from '../data/programs';

const Booking = ({
    bookingStep,
    setBookingStep,
    bookingData,
    setBookingData,
    setCurrentPage,
    handleSelectProgram // Prop from useBooking
}) => {

    // Redirect to assessment if no program selected when entering
    useEffect(() => {
        if (bookingData.program === "Non spécifié" && bookingStep === 'sport') {
            setBookingStep('assessment');
        }
    }, [bookingData.program, bookingStep, setBookingStep]);

    const getProgressWidth = () => {
        switch (bookingStep) {
            case 'assessment': return '20%';
            case 'recommendation': return '40%';
            case 'sport': return '60%';
            case 'cal': return '80%';
            case 'success': return '100%';
            default: return '0%';
        }
    };

    return (
        <section className="py-20 min-h-[80vh] bg-[#F8F9FA]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">

                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
                        <div
                            className="h-full bg-[#8F9779] transition-all duration-500"
                            style={{ width: getProgressWidth() }}
                        ></div>
                    </div>




                    {/* Step: Assessment (Questions) */}
                    {bookingStep === 'assessment' && (
                        <BookingForm
                            bookingData={bookingData}
                            setBookingData={setBookingData}
                            setBookingStep={setBookingStep}
                            onSubmit={() => setBookingStep('recommendation')}
                            submitLabel={
                                <>
                                    Voir ma recommandation <ArrowRight className="ml-2" />
                                </>
                            }
                        />
                    )}

                    {/* Step: Recommendation */}
                    {bookingStep === 'recommendation' && (
                        <RecommendationView
                            bookingData={bookingData}
                            onSelectProgram={handleSelectProgram}
                        />
                    )}

                    {/* Step: Sport Selection */}
                    {bookingStep === 'sport' && (
                        <SportSelection
                            bookingData={bookingData}
                            setBookingData={setBookingData}
                            setBookingStep={(step) => {
                                // Mapped 'payment' to 'cal' if SportSelection tries to go to payment
                                if (step === 'payment') setBookingStep('cal');
                                else setBookingStep(step);
                            }}
                        />
                    )}

                    {/* Step: Cal.com Booking */}
                    {bookingStep === 'cal' && (
                        <div className="animate-in slide-in-from-right duration-500">
                            <div className="text-center mb-10">
                                <span className="text-[#8F9779] font-bold text-xs uppercase tracking-widest mb-2 block">Étape 4 sur 4</span>
                                <h2 className="text-3xl font-serif text-[#1B263B]">Finaliser la réservation</h2>
                                <p className="text-gray-500 mt-2">Choisissez votre créneau pour le programme <span className="font-bold text-[#1B263B]">{bookingData.program}</span>.</p>
                            </div>
                            <CalBooking
                                calLink={PROGRAMS_DATA[bookingData.program]?.calLink || "thrive-psychologie-positive/seance-1"}
                                onBookingSuccessful={() => setBookingStep('success')}
                            />
                        </div>
                    )}

                    {bookingStep === 'success' && (
                        <SuccessView setCurrentPage={setCurrentPage} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Booking;
