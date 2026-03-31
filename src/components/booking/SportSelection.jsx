import React from 'react';
import { SPORTS_DATA } from '../../data/sports';
import { Check, ArrowRight, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SportSelection = ({ bookingData, setBookingData, setBookingStep }) => {
    const { t } = useTranslation();

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
                <span className="text-[#8F9779] font-bold text-xs uppercase tracking-widest mb-2 block">{t('booking.ss_step')}</span>
                <h2 className="text-3xl font-serif text-[#1B263B]">
                    {bookingData.sport
                        ? t('booking.ss_title_confirm')
                        : t('booking.ss_title_ask')}
                </h2>
                <div className="mt-4 mb-6 inline-block px-4 py-2 bg-[#8F9779]/10 rounded-full text-[#8F9779] text-sm font-bold">
                    {t('booking.ss_pack')} {t(`programs.${bookingData.program}.label`)}
                </div>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    {t('booking.ss_desc')}
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {SPORTS_DATA.map((sport) => (
                    <button
                        key={sport.id}
                        onClick={() => handleSelectSport(sport.name)}
                        className={`group p-4 rounded-[2rem] border-2 transition-all duration-300 flex flex-col items-center justify-center gap-3 relative overflow-hidden ${bookingData.sport === sport.name
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
                            {t(`sports.${sport.id}.name`)}
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
                    {t('booking.ss_btn')} <ArrowRight size={20} className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default SportSelection;
