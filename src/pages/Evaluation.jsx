import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import DiagnosticWidget from '../components/ui/DiagnosticWidget';
import SectionHeader from '../components/ui/SectionHeader';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getCalApi } from "@calcom/embed-react";

import CalBooking from '../components/booking/CalBooking';

const Evaluation = ({ handleSelectProgram }) => {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#1B263B" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <div className="pt-24 pb-24 bg-[#F8F9FA] min-h-screen">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.evaluation.title')}</title>
                <meta name="description" content={t('seo.evaluation.desc')} />
                <link rel="canonical" href="https://thrivesportpositive.com/evaluation" />
            </Helmet>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title={t('evaluation.title')}
                    subtitle={t('evaluation.subtitle')}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

                    {/* Left Column: Diagnostic Tool */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#1B263B] mb-2 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-[#1B263B] text-white flex items-center justify-center mr-3 text-sm">1</span>
                                {t('evaluation.step_1_title')}
                            </h3>
                            <p className="text-gray-600 text-sm">{t('evaluation.step_1_desc')}</p>
                        </div>
                        <DiagnosticWidget handleSelectProgram={handleSelectProgram} />
                    </div>

                    {/* Right Column: Contact & Next Steps */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-[#1B263B] mb-2 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-[#1B263B] text-white flex items-center justify-center mr-3 text-sm">2</span>
                                {t('evaluation.step_2_title')}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6">{t('evaluation.step_2_desc')}</p>

                            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                                <CalBooking calLink="thrive-sport-positive/30min" />
                                <p className="text-xs text-center text-gray-400 mt-4">{t('evaluation.form_disclaimer')}</p>
                            </div>
                        </div>

                        {/* Contact Direct */}
                        <div className="bg-[#1B263B] text-white p-8 rounded-[2rem] shadow-lg">
                            <h4 className="font-serif font-bold text-xl mb-4">{t('evaluation.contact_title')}</h4>
                            <div className="space-y-4 text-sm">
                                <a href="mailto:info@thrivesportpositive.com" className="flex items-center hover:text-[#C5A059] transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4"><Mail size={18} /></div>
                                    info@thrivesportpositive.com
                                </a>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4"><Phone size={18} /></div>
                                    (263) 362-2030 {t('evaluation.contact_hours')}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Evaluation;
