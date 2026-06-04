import React from 'react';
import { useTranslation } from 'react-i18next';

const WaitlistHowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        t('waitlist.how_it_works.step_1'),
        t('waitlist.how_it_works.step_2'),
        t('waitlist.how_it_works.step_3')
    ];

    return (
        <section className="bg-white py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10 lg:mb-16">
                    <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1F2A44] font-bold mb-4 lg:mb-6">
                        {t('waitlist.how_it_works.title')}
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start">
                            <div className="w-12 h-12 rounded-full bg-[#1F2A44] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg mr-4">
                                {index + 1}
                            </div>
                            <p className="text-[#1F2A44] font-medium leading-relaxed mt-2">
                                {step.replace(/^[0-9]+\.\s*/, '')}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaitlistHowItWorks;
