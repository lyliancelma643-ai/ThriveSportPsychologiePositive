import React from 'react';
import { useTranslation } from 'react-i18next';

const WaitlistWhatIs = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10 lg:mb-16">
                    <span className="text-[#C9A14A] font-semibold tracking-wider uppercase text-xs lg:text-sm mb-3 block">
                        Thrive Sport Positive
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1F2A44] font-bold mb-4 lg:mb-6">
                        {t('waitlist.what_is.title')}
                    </h2>
                    <p className="text-lg lg:text-xl text-[#1F2A44] font-medium max-w-2xl mx-auto">
                        {t('waitlist.what_is.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
                    <div className="bg-[#F7F5F2] p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] border border-[#1F2A44]/5">
                        <p className="text-[#5F6472] leading-relaxed text-base lg:text-lg">
                            {t('waitlist.what_is.desc_1')}
                        </p>
                    </div>
                    <div className="bg-[#F7F5F2] p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] border border-[#1F2A44]/5">
                        <p className="text-[#5F6472] leading-relaxed text-base lg:text-lg">
                            {t('waitlist.what_is.desc_2')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaitlistWhatIs;
