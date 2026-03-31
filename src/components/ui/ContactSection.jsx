import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DiagnosticWidget from './DiagnosticWidget';

const ContactSection = ({ handleSelectProgram }) => {
    const { t } = useTranslation();
    return (
        <section className="max-w-5xl mx-auto px-4 mt-24 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Diagnostic Widget */}
                <DiagnosticWidget handleSelectProgram={handleSelectProgram} />

                {/* Contact Widget */}
                <div className="bg-[#1B263B] rounded-[2rem] p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center text-center">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-6">{t('contact.title')}</h2>
                        <p className="text-white/70 mb-8 leading-relaxed">
                            {t('contact.desc')}
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4">
                            <a
                                href="mailto:info@thrivesportpositive.com"
                                className="inline-flex items-center justify-center gap-3 w-full max-w-sm bg-white text-[#1B263B] px-8 py-4 rounded-[2rem] font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg"
                            >
                                <Mail size={20} className="shrink-0" />
                                <span>info@thrivesportpositive.com</span>
                            </a>
                            <a
                                href="tel:+12633622030"
                                className="inline-flex items-center justify-center gap-3 w-full max-w-sm bg-transparent border-2 border-white text-white px-8 py-4 rounded-[2rem] font-bold hover:bg-white hover:text-[#1B263B] transition-all duration-300 shadow-lg"
                            >
                                <Phone size={20} className="shrink-0" />
                                <span>+1 (263) 362-2030</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
