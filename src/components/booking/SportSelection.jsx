import React from 'react';
import { SPORTS_DATA } from '../../data/sports';
import { Check, ArrowRight, Trophy } from 'lucide-react';

const SportSelection = ({ bookingData, setBookingData, setBookingStep }) => {

    const handleSelectSport = (sportName) => {
        setBookingData({ ...bookingData, sport: sportName });
    };

    const handleContinue = () => {
        if (bookingData.sport) {
            setBookingStep('payment');
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="text-center mb-10">
                <span className="text-[#8F9779] font-bold text-xs uppercase tracking-widest mb-2 block">Étape 4 sur 5</span>
                <h2 className="text-3xl font-serif text-[#1B263B]">
                    {bookingData.sport
                        ? "Confirmez votre discipline"
                        : "Quelle discipline pratiquez-vous ?"}
                </h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                    Nos coachs sont spécialisés. Sélectionnez votre sport pour que nous puissions vous attribuer l'expert idéal.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {SPORTS_DATA.map((sport) => (
                    <button
                        key={sport.id}
                        onClick={() => handleSelectSport(sport.name)}
                        className={`group p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-3 relative overflow-hidden ${bookingData.sport === sport.name
                                ? 'border-[#C5A059] bg-[#C5A059]/5 shadow-lg scale-105'
                                : 'border-gray-100 bg-white hover:border-[#1B263B]/20 hover:shadow-md'
                            }`}
                    >
                        {bookingData.sport === sport.name && (
                            <div className="absolute top-2 right-2 bg-[#C5A059] text-white rounded-full p-1">
                                <Check size={12} strokeWidth={3} />
                            </div>
                        )}

                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label={sport.name}>
                            {sport.icon}
                        </div>
                        <span className={`font-bold text-sm ${bookingData.sport === sport.name ? 'text-[#C5A059]' : 'text-gray-600'
                            }`}>
                            {sport.name}
                        </span>
                    </button>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={handleContinue}
                    disabled={!bookingData.sport}
                    className={`px-8 py-4 rounded-xl font-bold flex items-center transition-all ${bookingData.sport
                            ? 'bg-[#1B263B] text-white hover:bg-[#253550] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Continuer vers le paiement <ArrowRight size={20} className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default SportSelection;
