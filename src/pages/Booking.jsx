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

                            {bookingData.program === 'Avance' ? (
                                <CalEmbedAvance onBookingSuccessful={() => setBookingStep('success')} />
                            ) : bookingData.program === 'Essentiel' ? (
                                <CalEmbedEssentiel onBookingSuccessful={() => setBookingStep('success')} />
                            ) : bookingData.program === 'Performance' ? (
                                <CalEmbedPerformance onBookingSuccessful={() => setBookingStep('success')} />
                            ) : (
                                <CalBooking
                                    calLink={PROGRAMS_DATA[bookingData.program]?.calLink || "thrive-psychologie-positive/seance-1"}
                                    onBookingSuccessful={() => setBookingStep('success')}
                                />
                            )}
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


const CalEmbedAvance = ({ onBookingSuccessful }) => {
    useEffect(() => {
        (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const Cal = window.Cal;
        Cal("init", "seance-l-vance", { origin: "https://app.cal.com" });

        Cal.ns["seance-l-vance"]("inline", {
            elementOrSelector: "#my-cal-inline-seance-l-vance",
            config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
            calLink: "thrive-psychologie-positive/seance-l-vance",
        });

        Cal.ns["seance-l-vance"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });

        // Listen for booking successful event
        Cal("on", {
            action: "bookingSuccessful",
            callback: (e) => {
                if (onBookingSuccessful) onBookingSuccessful();
            }
        });
    }, [onBookingSuccessful]);

    return (
        <div style={{ width: "100%", height: "600px", overflow: "scroll" }} id="my-cal-inline-seance-l-vance"></div>
    );
};

const CalEmbedEssentiel = ({ onBookingSuccessful }) => {
    useEffect(() => {
        (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const Cal = window.Cal;
        Cal("init", "pack-1-l-essentiel", { origin: "https://app.cal.com" });

        Cal.ns["pack-1-l-essentiel"]("inline", {
            elementOrSelector: "#my-cal-inline-pack-1-l-essentiel",
            config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
            calLink: "thrive-psychologie-positive/pack-1-l-essentiel",
        });

        Cal.ns["pack-1-l-essentiel"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });

        // Listen for booking successful event
        Cal("on", {
            action: "bookingSuccessful",
            callback: (e) => {
                if (onBookingSuccessful) onBookingSuccessful();
            }
        });
    }, [onBookingSuccessful]);

    return (
        <div style={{ width: "100%", height: "600px", overflow: "scroll" }} id="my-cal-inline-pack-1-l-essentiel"></div>
    );
};

const CalEmbedPerformance = ({ onBookingSuccessful }) => {
    useEffect(() => {
        (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const Cal = window.Cal;
        Cal("init", "pack-3-le-peformance", { origin: "https://app.cal.com" });

        Cal.ns["pack-3-le-peformance"]("inline", {
            elementOrSelector: "#my-cal-inline-pack-3-le-peformance",
            config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
            calLink: "thrive-psychologie-positive/pack-3-le-peformance",
        });

        Cal.ns["pack-3-le-peformance"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });

        // Listen for booking successful event
        Cal("on", {
            action: "bookingSuccessful",
            callback: (e) => {
                if (onBookingSuccessful) onBookingSuccessful();
            }
        });
    }, [onBookingSuccessful]);

    return (
        <div style={{ width: "100%", height: "600px", overflow: "scroll" }} id="my-cal-inline-pack-3-le-peformance"></div>
    );
};

export default Booking;
