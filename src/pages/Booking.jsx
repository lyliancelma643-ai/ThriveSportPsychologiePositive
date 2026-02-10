import React, { useEffect } from 'react';
import CalendarWidget from '../components/booking/CalendarWidget';
import BookingForm from '../components/booking/BookingForm';
import PaymentForm from '../components/booking/PaymentForm';
import SuccessView from '../components/booking/SuccessView';
import RecommendationView from '../components/booking/RecommendationView';
import SportSelection from '../components/booking/SportSelection';

const Booking = ({
    bookingStep,
    setBookingStep,
    bookingData,
    setBookingData,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    isRecurring,
    setIsRecurring,
    paymentMethod,
    setPaymentMethod,
    processingPayment,
    termsAccepted,
    setTermsAccepted,
    handleProcessPayment,
    setCurrentPage,
    handleSelectProgram // Prop from useBooking
}) => {

    // Redirect to assessment if no program selected when entering
    useEffect(() => {
        if (bookingData.program === "Non spécifié" && bookingStep === 'calendar') {
            setBookingStep('assessment');
        }
    }, [bookingData.program, bookingStep, setBookingStep]);

    const getProgressWidth = () => {
        switch (bookingStep) {
            case 'assessment': return '15%';
            case 'recommendation': return '30%';
            case 'calendar': return '45%';
            case 'form': return '60%';
            case 'sport': return '80%';
            case 'payment': return '90%';
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

                    {/* Step: Assessment (No program selected) */}
                    {bookingStep === 'assessment' && (
                        <div>
                            <div className="text-center mb-10">
                                <span className="text-[#8F9779] font-bold text-xs uppercase tracking-widest mb-2 block">Étape 1 sur 4</span>
                                <h2 className="text-3xl font-serif text-[#1B263B]">Commençons par cerner vos besoins</h2>
                            </div>
                            <BookingForm
                                bookingData={bookingData}
                                setBookingData={setBookingData}
                                setBookingStep={setBookingStep} // Not used for return here but props need matching
                                onSubmit={() => setBookingStep('recommendation')}
                                submitLabel="Voir ma recommandation"
                                selectedDate={null} // Explicitly null to hide date header
                                selectedTime={null}
                            />
                        </div>
                    )}

                    {/* Step: Recommendation */}
                    {bookingStep === 'recommendation' && (
                        <RecommendationView
                            bookingData={bookingData}
                            onSelectProgram={handleSelectProgram}
                        />
                    )}

                    {/* Step: Calendar (Program selected) */}
                    {bookingStep === 'calendar' && (
                        <div>
                            <div className="text-center mb-10">
                                <span className="text-[#8F9779] font-bold text-xs uppercase tracking-widest mb-2 block">Étape 2 sur 4</span>
                                <h2 className="text-3xl font-serif text-[#1B263B]">Réservez votre séance pour le programme <span className="text-[#8F9779] underline decoration-stone-200">{bookingData.program}</span></h2>
                            </div>
                            <CalendarWidget
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate}
                                selectedTime={selectedTime}
                                setSelectedTime={setSelectedTime}
                                isRecurring={isRecurring}
                                setIsRecurring={setIsRecurring}
                                setBookingStep={setBookingStep}
                            />
                        </div>
                    )}

                    {/* Step: Form (Contact Info after Date Selection) */}
                    {bookingStep === 'form' && (
                        <div>
                            <div className="text-center mb-10">
                                <span className="text-[#8F9779] font-bold text-xs uppercase tracking-widest mb-2 block">Étape 3 sur 4</span>
                            </div>
                            <BookingForm
                                bookingData={bookingData}
                                setBookingData={setBookingData}
                                setBookingStep={setBookingStep}
                                selectedDate={selectedDate}
                                selectedTime={selectedTime}
                                isRecurring={isRecurring}
                                onSubmit={() => setBookingStep('sport')}
                                submitLabel="Valider et choisir mon sport"
                            />
                        </div>
                    )}

                    {/* Step: Sport Selection */}
                    {bookingStep === 'sport' && (
                        <SportSelection
                            bookingData={bookingData}
                            setBookingData={setBookingData}
                            setBookingStep={setBookingStep}
                        />
                    )}

                    {bookingStep === 'payment' && (
                        <PaymentForm
                            bookingData={bookingData}
                            setBookingStep={setBookingStep}
                            paymentMethod={paymentMethod}
                            setPaymentMethod={setPaymentMethod}
                            processingPayment={processingPayment}
                            handleProcessPayment={handleProcessPayment}
                            termsAccepted={termsAccepted}
                            setTermsAccepted={setTermsAccepted}
                            selectedDate={selectedDate}
                            selectedTime={selectedTime}
                            isRecurring={isRecurring}
                        />
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
