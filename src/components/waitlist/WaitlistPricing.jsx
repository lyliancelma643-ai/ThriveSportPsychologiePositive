import React from 'react';
import { useTranslation } from 'react-i18next';

const WaitlistPricing = () => {
    const { t } = useTranslation();

    const tiers = [
        {
            name: t('waitlist.pricing.tier_1_name'),
            price: t('waitlist.pricing.tier_1_price'),
            highlight: false
        },
        {
            name: t('waitlist.pricing.tier_2_name'),
            price: t('waitlist.pricing.tier_2_price'),
            badge: t('waitlist.pricing.tier_2_badge'),
            highlight: true
        },
        {
            name: t('waitlist.pricing.tier_3_name'),
            price: t('waitlist.pricing.tier_3_price'),
            highlight: false
        }
    ];

    return (
        <section className="bg-white py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 lg:mb-16">
                    <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1F2A44] font-bold mb-4 lg:mb-6">
                        {t('waitlist.pricing.title')}
                    </h2>
                    <p className="text-[#5F6472] text-lg lg:text-xl max-w-2xl mx-auto">
                        {t('waitlist.pricing.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
                    {tiers.map((tier, index) => (
                        <div key={index} className={`relative rounded-[2rem] p-8 text-center ${tier.highlight ? 'bg-[#1F2A44] text-white shadow-2xl md:scale-105' : 'bg-[#F7F5F2] text-[#1F2A44] border border-gray-100'}`}>
                            {tier.badge && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C9A14A] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                                    {tier.badge}
                                </div>
                            )}
                            <h3 className="font-serif text-xl font-bold mb-4 mt-2">{tier.name}</h3>
                            <div className="text-4xl font-bold mb-6">
                                {tier.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaitlistPricing;
