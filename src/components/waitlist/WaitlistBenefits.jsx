import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Shield, Heart, Grid } from 'lucide-react';

const WaitlistBenefits = () => {
    const { t } = useTranslation();

    const benefits = [
        {
            icon: <TrendingUp className="w-6 h-6 text-[#1F2A44]" />,
            title: t('waitlist.benefits.b1_title'),
            desc: t('waitlist.benefits.b1_desc'),
        },
        {
            icon: <Shield className="w-6 h-6 text-[#1F2A44]" />,
            title: t('waitlist.benefits.b2_title'),
            desc: t('waitlist.benefits.b2_desc'),
        },
        {
            icon: <Heart className="w-6 h-6 text-[#1F2A44]" />,
            title: t('waitlist.benefits.b3_title'),
            desc: t('waitlist.benefits.b3_desc'),
        },
        {
            icon: <Grid className="w-6 h-6 text-[#1F2A44]" />,
            title: t('waitlist.benefits.b4_title'),
            desc: t('waitlist.benefits.b4_desc'),
        }
    ];

    return (
        <section className="bg-[#1F2A44] py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 lg:mb-16">
                    <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 lg:mb-6">
                        {t('waitlist.benefits.title')}
                    </h2>
                    <p className="text-[#A7C4BC] text-lg lg:text-xl max-w-2xl mx-auto">
                        {t('waitlist.benefits.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#A7C4BC] flex items-center justify-center mb-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-serif text-white">{benefit.title}</h3>
                            <p className="text-white/80 leading-relaxed">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaitlistBenefits;
