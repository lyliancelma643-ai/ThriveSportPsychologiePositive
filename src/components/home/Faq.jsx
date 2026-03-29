import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../ui/SectionHeader';

const Faq = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title={t('home.faq.title')} />
                <div className="space-y-4">
                    {[
                        { q: t('home.faq.q1'), a: t('home.faq.a1') },
                        { q: t('home.faq.q2'), a: t('home.faq.a2') },
                        { q: t('home.faq.q3'), a: t('home.faq.a3') },
                        { q: t('home.faq.q4'), a: t('home.faq.a4') }
                    ].map((item, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                            >
                                <h3 className="font-bold text-[#1B263B] m-0 p-0 text-base">{item.q}</h3>
                                {openFaq === i ? <ChevronRight className="rotate-90 transition-transform" /> : <ChevronRight className="transition-transform" />}
                            </button>
                            {openFaq === i && (
                                <div className="p-6 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
