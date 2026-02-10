import React from 'react';
import { Activity, Brain, Heart, Zap, Target, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

import { SPORTS_DATA } from '../data/sports';

const Sport = ({ setCurrentPage, setBookingStep, bookingData, setBookingData }) => {

    const handleBook = (sportName = null) => {
        if (sportName) {
            setBookingData({ ...bookingData, sport: sportName });
        }
        setBookingStep('calendar');
        setCurrentPage('booking');
    };

    return (
        <div className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
                <SectionHeader
                    title="Excellence Multisports"
                    subtitle="5 disciplines, une seule philosophie : La performance par le développement humain."
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SPORTS_DATA.map((sport) => (
                    <div key={sport.id} className="group relative h-[520px] perspective-1000">
                        {/* Card Container */}
                        <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">

                            {/* FRONT SIDE (Technique) */}
                            <div className={`absolute inset-0 backface-hidden bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center justify-between overflow-hidden`}>
                                <div className={`absolute top-0 w-full h-2 bg-gradient-to-r ${sport.color}`}></div>

                                <div className="text-center mt-6">
                                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500" role="img" aria-label={sport.name}>
                                        {sport.icon}
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-[#1B263B] mb-2">{sport.name}</h3>
                                    <div className="w-12 h-1 bg-[#1B263B]/10 mx-auto rounded-full mb-8"></div>
                                </div>

                                <ul className="space-y-4 w-full px-4">
                                    {sport.techDetails.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600 font-medium">
                                            <Zap size={16} className="text-[#C5A059] mr-3 shrink-0" />
                                            <span className="text-sm">{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center animate-bounce">
                                    <Brain size={14} className="mr-2" /> Survolez pour l'approche Mentale
                                </div>
                            </div>

                            {/* BACK SIDE (Psychologie/PERMA) */}
                            <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br ${sport.color} p-8 pb-10 rounded-[2.5rem] shadow-2xl text-white flex flex-col items-center justify-between text-center`}>
                                <div className="flex flex-col items-center justify-center flex-grow">
                                    <div className="bg-white/10 p-4 rounded-full mb-6 backdrop-blur-sm">
                                        <Heart size={32} className="text-white" />
                                    </div>
                                    <h4 className="text-2xl font-serif font-bold mb-2">{sport.permaFocus.title}</h4>
                                    <div className="w-12 h-1 bg-white/30 mx-auto rounded-full mb-6"></div>
                                    <p className="text-white/90 leading-relaxed text-lg font-light">
                                        "{sport.permaFocus.desc}"
                                    </p>
                                    <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-white/60">
                                        <Target size={14} className="mr-2" /> Impact Thrive
                                    </div>
                                </div>

                                {/* Booking Button */}
                                <button
                                    onClick={() => handleBook(sport.name)}
                                    className="w-full bg-white text-[#1B263B] py-3 rounded-xl font-bold flex items-center justify-center mt-6 hover:bg-gray-100 transition-colors"
                                >
                                    Réserver ce Programme <ArrowRight size={18} className="ml-2" />
                                </button>
                            </div>

                        </div>
                    </div>
                ))}

                {/* Last Card: Summary / CTA */}
                <div className="bg-[#1B263B] p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
                    <Activity size={100} className="absolute text-white/5 -top-4 -right-4" />
                    <h3 className="text-3xl font-serif font-bold mb-6">Votre Sport,<br />Notre Méthode.</h3>
                    <p className="text-white/70 mb-8 leading-relaxed">
                        Peu importe la discipline, nous appliquons la même rigueur scientifique pour développer l'athlète complet.
                    </p>
                    <button
                        onClick={handleBook}
                        className="bg-[#C5A059] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b08d4b] transition-colors shadow-lg w-full flex items-center justify-center"
                    >
                        Réserver une évaluation <ArrowRight size={20} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sport;
