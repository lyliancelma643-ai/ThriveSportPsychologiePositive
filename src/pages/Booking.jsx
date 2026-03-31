import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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
    handleSelectProgram // Prop from useBooking
}) => {
    const { t, i18n } = useTranslation();

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
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.booking.title')}</title>
                <meta name="description" content={t('seo.booking.desc')} />
                <link rel="canonical" href="https://thrivesportpositive.com/booking" />
            </Helmet>
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white p-6 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden">

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
                                    {t('booking.submit_label')} <ArrowRight className="ml-2" />
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
                                <span className="text-[#8F9779] font-bold text-xs uppercase tracking-widest mb-2 block">{t('booking.step_4_tag')}</span>
                                <h2 className="text-3xl font-serif text-[#1B263B]">{t('booking.step_4_title')}</h2>
                                <p className="text-gray-500 mt-2">{t('booking.step_4_subtitle')} <span className="font-bold text-[#1B263B]">{t(`programs.${bookingData.program}.label`)}</span>.</p>
                            </div>

                            <CalBooking
                                calLink={
                                    bookingData.program === 'Avance' ? "thrive-sport-positive/seance-l-vance" :
                                    bookingData.program === 'Essentiel' ? "thrive-sport-positive/pack-1-l-essentiel" :
                                    bookingData.program === 'Performance' ? "thrive-sport-positive/pack-3-le-peformance" :
                                    PROGRAMS_DATA[bookingData.program]?.calLink || "thrive-psychologie-positive/seance-1"
                                }
                                onBookingSuccessful={() => setBookingStep('success')}
                            />
                        </div>
                    )}

                    {bookingStep === 'success' && (
                        <SuccessView />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Booking;
