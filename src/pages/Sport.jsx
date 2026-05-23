import React, { useRef } from 'react';
import SEO from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import { Activity, Brain, Heart, Zap, Target, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/ui/SectionHeader';
import ContactSection from '../components/ui/ContactSection'; // Import ContactSection

import { SPORTS_DATA } from '../data/sports';

const Sport = ({ setBookingStep, bookingData, setBookingData }) => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    // Ref for the contact section
    const contactRef = useRef(null);

    const handleBook = (sportName = null) => {
        if (sportName) {
            setBookingData({ ...bookingData, sport: sportName });
        }
        // Redirect to Prix page instead of direct booking
        navigate('/prix');
        window.scrollTo(0, 0);
    };

    // Scroll handler
    const handleScrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="py-24 bg-[#FAFAFA] relative overflow-hidden">
            {/* Subtle Premium Background */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#8F9779]/10 to-transparent pointer-events-none"></div>
            
            <SEO 
                title={t('seo.sport.title')}
                description={t('seo.sport.desc')}
                url="https://thrivesportpositive.com/sport"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Sports Coaching",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Thrive Sport Positive"
                    },
                    "description": t('seo.sport.desc')
                }}
            />
            <div className="max-w-7xl mx-auto px-4 mb-24 text-center relative z-10">
                <SectionHeader
                    title={t('sports.page_title')}
                    subtitle={t('sports.page_subtitle')}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 relative z-10">
                {SPORTS_DATA.map((sport) => (
                    <div key={sport.id} className="group relative h-[560px] perspective-1000">
                        {/* Card Container */}
                        <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">

                            {/* FRONT SIDE (Technique) */}
                            <div className="absolute inset-0 backface-hidden bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/60 flex flex-col items-center justify-between overflow-hidden transition-all duration-500 group-hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] group-hover:border-[#8F9779]/30">
                                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${sport.color} opacity-80`}></div>
                                
                                {/* Subtle glow behind the icon */}
                                <div className={`absolute top-10 w-40 h-40 rounded-full bg-gradient-to-br ${sport.color} opacity-[0.03] blur-3xl`}></div>

                                <div className="text-center mt-2 relative z-10">
                                    <div className="text-6xl mb-5 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 flex justify-center" role="img" aria-label={sport.name}>
                                        {sport.icon}
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-[#1B263B] mb-3 tracking-tight">{t(`sports.${sport.id}.name`)}</h3>
                                    <div className="w-8 h-1 bg-[#C5A059] mx-auto rounded-full mb-6 opacity-60"></div>
                                </div>

                                <ul className="space-y-4 w-full px-2 relative z-10 flex-grow flex flex-col justify-center">
                                    {sport.techDetails.map((_, idx) => (
                                        <li key={idx} className="flex items-start text-slate-600 font-medium group/item">
                                            <Zap size={18} className="text-[#C5A059] mt-0.5 mr-4 shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                                            <span className="text-sm leading-relaxed">{t(`sports.${sport.id}.tech_${idx + 1}`)}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-4 mb-2 text-xs font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center animate-bounce relative z-10">
                                    <Brain size={14} className="mr-2" /> {t('sports.hover_text')}
                                </div>
                            </div>

                            {/* BACK SIDE (Psychologie/PERMA) */}
                            <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br ${sport.color} p-8 rounded-[2.5rem] shadow-2xl text-white flex flex-col items-center justify-between text-center overflow-hidden`}>
                                {/* Decorative elements */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 border-[1px] border-white/10 rounded-full pointer-events-none"></div>
                                <div className="absolute -bottom-24 -left-24 w-64 h-64 border-[1px] border-white/10 rounded-full pointer-events-none"></div>
                                
                                <div className="flex flex-col items-center justify-center flex-grow relative z-10">
                                    <div className="bg-white/10 p-4 rounded-2xl mb-6 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                                        <Heart size={32} className="text-white drop-shadow-md" />
                                    </div>
                                    <h4 className="text-2xl font-serif font-bold mb-3 tracking-wide">{t(`sports.${sport.id}.perma_title`)}</h4>
                                    <div className="w-8 h-1 bg-white/40 mx-auto rounded-full mb-5"></div>
                                    <p className="text-white/95 leading-relaxed text-[17px] font-light px-2">
                                        "{t(`sports.${sport.id}.perma_desc`)}"
                                    </p>
                                    <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                                        <Target size={14} className="mr-3" /> {t('sports.impact_text')}
                                    </div>
                                </div>

                                {/* Booking Button */}
                                <button
                                    onClick={() => handleBook(sport.name)}
                                    className="w-full bg-white/95 backdrop-blur-sm text-[#1B263B] py-3.5 rounded-2xl font-bold flex items-center justify-center mt-4 hover:bg-white transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] group/btn relative z-10"
                                >
                                    {t('sports.btn_book')} <ArrowRight size={18} className="ml-3 transform transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>

                        </div>
                    </div>
                ))}

                {/* Last Card: Summary / CTA */}
                <div className="bg-[#1B263B] p-12 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                    <Activity size={160} className="absolute text-white/5 -top-10 -right-10 transform transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-12 pointer-events-none" />
                    <Activity size={100} className="absolute text-white/5 -bottom-10 -left-10 transform transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none" />
                    
                    <h3 className="text-4xl font-serif font-bold mb-6 tracking-tight relative z-10" dangerouslySetInnerHTML={{ __html: t('sports.summary_title') }}></h3>
                    <p className="text-white/70 mb-10 leading-relaxed max-w-lg relative z-10 text-lg">
                        {t('sports.summary_desc')}
                    </p>
                    <button
                        onClick={handleScrollToContact}
                        className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-white px-10 py-5 rounded-2xl font-bold hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] hover:scale-[1.02] transition-all duration-300 w-full flex items-center justify-center relative z-10 group/btn"
                    >
                        {t('sports.summary_btn')} <ArrowRight size={20} className="ml-3 transform transition-transform group-hover/btn:translate-x-2" />
                    </button>
                </div>
            </div>

            {/* Contact / Diagnostic Section */}
            <div ref={contactRef} className="relative z-10">
                <ContactSection handleSelectProgram={(program) => {
                    // Start booking flow from diagnostic recommendation
                    if (bookingData.program) {
                        setBookingStep('cal');
                        navigate('/booking');
                    } else {
                        navigate('/prix');
                    }
                    window.scrollTo(0, 0);
                }} />
            </div>
        </div>
    );
};

export default Sport;
