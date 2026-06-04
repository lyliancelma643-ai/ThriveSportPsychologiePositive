import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen } from 'lucide-react';

const WaitlistScience = () => {
    const { t } = useTranslation();

    const pillars = [
        t('waitlist.science.pill_1'),
        t('waitlist.science.pill_2'),
        t('waitlist.science.pill_3'),
        t('waitlist.science.pill_4'),
        t('waitlist.science.pill_5'),
        t('waitlist.science.pill_6'),
        t('waitlist.science.pill_7'),
        t('waitlist.science.pill_8')
    ];

    return (
        <section className="bg-[#F7F5F2] py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 lg:mb-16">
                    <span className="text-[#C9A14A] font-semibold tracking-wider uppercase text-xs lg:text-sm mb-3 block">
                        {t('waitlist.science.subtitle')}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1F2A44] font-bold mb-6">
                        {t('waitlist.science.title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="flex items-center p-4 md:p-6 bg-[#F7F5F2] rounded-2xl border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-[#1F2A44]/5 flex items-center justify-center mr-4 flex-shrink-0">
                                <BookOpen className="w-5 h-5 text-[#C9A14A]" />
                            </div>
                            <span className="text-[#1F2A44] font-medium">{pillar}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaitlistScience;
