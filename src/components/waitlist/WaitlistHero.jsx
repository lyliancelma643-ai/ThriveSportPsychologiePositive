import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Star, ShieldCheck, Activity } from 'lucide-react';

const WaitlistHero = () => {
    const { t } = useTranslation();

    const scrollToForm = () => {
        const formElement = document.getElementById('waitlist-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-[#F7F5F2] pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F2A44] font-bold tracking-tight mb-6 leading-tight">
                    {t('waitlist.hero.headline')}
                </h1>
                <p className="text-lg sm:text-xl text-[#5F6472] mb-10 max-w-2xl mx-auto leading-relaxed">
                    {t('waitlist.hero.subheadline')}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <button 
                        onClick={scrollToForm}
                        className="w-full sm:w-auto bg-[#1F2A44] text-white px-8 py-4 rounded-full font-medium hover:bg-[#151D30] transition-colors duration-300 flex items-center justify-center shadow-lg shadow-[#1F2A44]/20"
                    >
                        {t('waitlist.form.title')}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-[#5F6472]">
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-[#C9A14A]" />
                        <span>{t('waitlist.hero.microproof_1')}</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-[#A7C4BC]"></div>
                    <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#A7C4BC]" />
                        <span>{t('waitlist.hero.microproof_2')}</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-[#A7C4BC]"></div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#1F2A44]" />
                        <span>{t('waitlist.hero.microproof_3')}</span>
                    </div>
                </div>
            </div>
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#A7C4BC]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#C9A14A]/10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default WaitlistHero;
