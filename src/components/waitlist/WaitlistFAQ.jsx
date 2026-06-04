import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button 
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-serif font-bold text-[#1F2A44] text-lg pr-4">{question}</span>
                {isOpen ? <ChevronUp className="text-[#C9A14A] flex-shrink-0" /> : <ChevronDown className="text-[#C9A14A] flex-shrink-0" />}
            </button>
            {isOpen && (
                <div className="mt-4 text-[#5F6472] leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

const WaitlistFAQ = () => {
    const { t } = useTranslation();

    const faqs = [
        { q: t('waitlist.faq.q1_q'), a: t('waitlist.faq.q1_a') },
        { q: t('waitlist.faq.q2_q'), a: t('waitlist.faq.q2_a') },
        { q: t('waitlist.faq.q3_q'), a: t('waitlist.faq.q3_a') },
        { q: t('waitlist.faq.q4_q'), a: t('waitlist.faq.q4_a') },
    ];

    return (
        <section className="bg-[#F7F5F2] py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-serif text-2xl sm:text-4xl text-[#1F2A44] font-bold mb-8 lg:mb-10 text-center">
                    {t('waitlist.faq.title')}
                </h2>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaitlistFAQ;
