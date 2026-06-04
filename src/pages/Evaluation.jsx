import React, { useState } from 'react';
import SEO from '../components/seo/SEO';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CheckCircle, Lock, Star, Activity, ShieldCheck, Mail, Phone, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

import WaitlistWhatIs from '../components/waitlist/WaitlistWhatIs';
import WaitlistBenefits from '../components/waitlist/WaitlistBenefits';
import WaitlistScience from '../components/waitlist/WaitlistScience';
import WaitlistHowItWorks from '../components/waitlist/WaitlistHowItWorks';
import WaitlistPricing from '../components/waitlist/WaitlistPricing';
import WaitlistFAQ from '../components/waitlist/WaitlistFAQ';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-3">
            <button className="w-full flex justify-between items-center text-left focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-serif font-bold text-[#1F2A44] text-sm pr-4">{question}</span>
                {isOpen ? <ChevronUp className="text-[#C9A14A] flex-shrink-0 w-4 h-4" /> : <ChevronDown className="text-[#C9A14A] flex-shrink-0 w-4 h-4" />}
            </button>
            {isOpen && <div className="mt-2 text-[#5F6472] text-sm leading-relaxed">{answer}</div>}
        </div>
    );
};

const Evaluation = () => {
    const { t } = useTranslation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        parentName: '', email: '', phone: '', childName: '', childAge: '', ageGroup: '', mainNeed: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Waitlist form submitted:", formData);
        setIsSubmitted(true);
    };

    const faqs = [
        { q: t('waitlist.faq.q1_q'), a: t('waitlist.faq.q1_a') },
        { q: t('waitlist.faq.q2_q'), a: t('waitlist.faq.q2_a') },
        { q: t('waitlist.faq.q3_q'), a: t('waitlist.faq.q3_a') }
    ];

    return (
        <div className="min-h-screen font-sans">
            <SEO title={t('waitlist.hero.headline')} description={t('waitlist.hero.subheadline')} url="https://thrivesportpositive.com/evaluation" />
            
            {/* Split-Screen Hero Condensed */}
            <section className="bg-[#F7F5F2] pt-20 pb-12 lg:pt-32 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    
                    {/* Left Column: Value Proposition (Condensed) */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-4">
                        <span className="text-[#C9A14A] font-semibold tracking-wider uppercase text-xs mb-2">
                            {t('waitlist.rarity.spots')} — {t('waitlist.rarity.date')}
                        </span>
                        
                        <h1 className="font-serif text-[28px] sm:text-4xl lg:text-5xl text-[#1F2A44] font-bold tracking-tight mb-4 leading-tight">
                            {t('waitlist.hero.headline')}
                        </h1>
                        
                        <p className="text-sm sm:text-lg text-[#5F6472] mb-6 leading-relaxed">
                            {t('waitlist.hero.subheadline')} {t('waitlist.what_is.desc_1')}
                        </p>

                        <div className="flex flex-col gap-3 mb-6 lg:mb-8">
                            <div className="flex items-start lg:items-center gap-3 text-[13px] lg:text-sm text-[#1F2A44] font-medium bg-white p-3 lg:p-4 rounded-xl shadow-sm border border-gray-100">
                                <Star className="w-5 h-5 text-[#C9A14A] flex-shrink-0 mt-0.5 lg:mt-0" />
                                <span>{t('waitlist.benefits.b1_title')} : <span className="text-[#5F6472] font-normal">{t('waitlist.benefits.b1_desc')}</span></span>
                            </div>
                            <div className="flex items-start lg:items-center gap-3 text-[13px] lg:text-sm text-[#1F2A44] font-medium bg-white p-3 lg:p-4 rounded-xl shadow-sm border border-gray-100">
                                <ShieldCheck className="w-5 h-5 text-[#1F2A44] flex-shrink-0 mt-0.5 lg:mt-0" />
                                <span>{t('waitlist.benefits.b2_title')} : <span className="text-[#5F6472] font-normal">{t('waitlist.benefits.b2_desc')}</span></span>
                            </div>
                            <div className="flex items-start lg:items-center gap-3 text-[13px] lg:text-sm text-[#1F2A44] font-medium bg-white p-3 lg:p-4 rounded-xl shadow-sm border border-gray-100">
                                <Activity className="w-5 h-5 text-[#A7C4BC] flex-shrink-0 mt-0.5 lg:mt-0" />
                                <span>{t('waitlist.pricing.subtitle')} <span className="text-[#5F6472] font-normal">({t('waitlist.science.subtitle')})</span></span>
                            </div>
                        </div>

                        
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs text-[#5F6472] mt-2 lg:mt-auto">
                            <a href="mailto:info@thrivesportpositive.com" className="flex items-center hover:text-[#C9A14A] transition-colors"><Mail size={14} className="mr-1"/> {t('waitlist.contact.email')}</a>
                            <span className="flex items-center"><Phone size={14} className="mr-1"/> {t('waitlist.contact.phone')}</span>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full lg:w-1/2 mt-2 lg:mt-0">
                        <div className="bg-white p-5 sm:p-8 rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl border border-gray-100 sticky top-24">
                            {!isSubmitted ? (
                                <>
                                    <div className="text-center mb-6">
                                        <h2 className="font-serif text-2xl text-[#1F2A44] font-bold mb-2">{t('waitlist.form.title')}</h2>
                                        <p className="text-sm text-[#5F6472]">{t('waitlist.form.subtitle')}</p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-[#1F2A44]">{t('waitlist.form.lbl_prenom_parent')} *</label>
                                                <input required type="text" name="parentName" value={formData.parentName} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#A7C4BC] outline-none" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-[#1F2A44]">{t('waitlist.form.lbl_email')} *</label>
                                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#A7C4BC] outline-none" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-[#1F2A44]">{t('waitlist.form.lbl_telephone')} *</label>
                                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#A7C4BC] outline-none" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-[#1F2A44]">{t('waitlist.form.lbl_prenom_enfant')}</label>
                                                <input type="text" name="childName" value={formData.childName} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#A7C4BC] outline-none" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-[#1F2A44]">{t('waitlist.form.lbl_age_enfant')} *</label>
                                                <input required type="number" min="8" max="17" name="childAge" value={formData.childAge} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#A7C4BC] outline-none" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-[#1F2A44]">{t('waitlist.form.lbl_tranche_age')} *</label>
                                                <select required name="ageGroup" value={formData.ageGroup} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#A7C4BC] outline-none bg-white">
                                                    <option value="">---</option>
                                                    <option value="8-11">8-11</option>
                                                    <option value="12-14">12-14</option>
                                                    <option value="15-17">15-17</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-[#1F2A44]">{t('waitlist.form.lbl_besoin')}</label>
                                            <select name="mainNeed" value={formData.mainNeed} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#A7C4BC] outline-none bg-white">
                                                <option value="">{t('waitlist.form.opt_besoin_default')}</option>
                                                <option value="Confiance en soi">{t('waitlist.form.opt_besoin_1')}</option>
                                                <option value="Leadership">{t('waitlist.form.opt_besoin_2')}</option>
                                                <option value="Résilience">{t('waitlist.form.opt_besoin_3')}</option>
                                                <option value="Lien parent-enfant">{t('waitlist.form.opt_besoin_4')}</option>
                                                <option value="Cadre structuré">{t('waitlist.form.opt_besoin_5')}</option>
                                            </select>
                                        </div>
                                        <div className="pt-2">
                                            <button type="submit" className="w-full bg-[#1F2A44] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#C9A14A] transition-colors shadow-lg">
                                                {t('waitlist.form.btn_submit')}
                                            </button>
                                            <div className="flex items-center justify-center mt-3 text-[10px] text-[#5F6472]">
                                                <Lock className="w-3 h-3 mr-1" />
                                                {t('waitlist.form.trust')}
                                            </div>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-[#A7C4BC]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-[#A7C4BC]" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-[#1F2A44] mb-2">
                                        {t('waitlist.form.success_msg').split('—')[0]}
                                    </h3>
                                    <p className="text-[#5F6472] text-sm">
                                        {t('waitlist.form.success_msg').split('—')[1]}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Detailed Sections below the fold */}
            <WaitlistWhatIs />
            
            {/* CTA Interstitial 1 */}
            <section className="bg-white py-8 lg:py-10 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
                    <h3 className="font-serif text-xl lg:text-2xl text-[#1F2A44] font-bold">Découvrez l'approche sportive</h3>
                    <Link to="/sport" className="w-full sm:w-auto justify-center bg-[#F7F5F2] text-[#1F2A44] px-6 py-3 rounded-xl font-medium hover:bg-[#C9A14A] hover:text-white transition-colors flex items-center">
                        En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </section>

            <WaitlistBenefits />
            <WaitlistScience />

            {/* CTA Interstitial 2 */}
            <section className="bg-[#1F2A44] py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
                    <h3 className="font-serif text-xl lg:text-2xl text-white font-bold">La Méthode expliquée en détail</h3>
                    <Link to="/methode" className="w-full sm:w-auto justify-center bg-[#C9A14A] text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-[#1F2A44] transition-colors flex items-center">
                        Lire la méthode <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </section>

            <WaitlistHowItWorks />
            <WaitlistPricing />
            <WaitlistFAQ />

        </div>
    );
};

export default Evaluation;
