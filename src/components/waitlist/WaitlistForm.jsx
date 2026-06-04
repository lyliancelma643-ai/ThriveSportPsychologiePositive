import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Lock } from 'lucide-react';

const WaitlistForm = () => {
    const { t } = useTranslation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        ageGroup: '',
        mainNeed: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we would normally send the data to a backend or webhook
        console.log("Waitlist form submitted:", formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div id="waitlist-form" className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 text-center max-w-3xl mx-auto my-20">
                <div className="w-20 h-20 bg-[#A7C4BC]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#A7C4BC]" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1F2A44] mb-4">
                    {t('waitlist.form.success_msg').split('—')[0]}
                </h3>
                <p className="text-[#5F6472] text-lg">
                    {t('waitlist.form.success_msg').split('—')[1]}
                </p>
            </div>
        );
    }

    return (
        <div id="waitlist-form" className="bg-[#1F2A44] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
                {/* Rarity banner */}
                <div className="absolute top-0 left-0 w-full bg-[#C9A14A] text-[#1F2A44] py-2 text-center text-sm font-bold tracking-wide uppercase">
                    {t('waitlist.rarity.spots')}
                </div>
                
                <div className="mt-8 mb-10 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-[#1F2A44] font-bold mb-4">
                        {t('waitlist.form.title')}
                    </h2>
                    <p className="text-[#5F6472]">
                        {t('waitlist.form.subtitle')}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Parent Info */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#1F2A44]">{t('waitlist.form.lbl_prenom_parent')} *</label>
                            <input required type="text" name="parentName" value={formData.parentName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A7C4BC] focus:border-transparent outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#1F2A44]">{t('waitlist.form.lbl_email')} *</label>
                            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A7C4BC] focus:border-transparent outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#1F2A44]">{t('waitlist.form.lbl_telephone')} *</label>
                            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A7C4BC] focus:border-transparent outline-none transition-all" />
                        </div>
                        
                        {/* Child Info */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#1F2A44]">{t('waitlist.form.lbl_prenom_enfant')}</label>
                            <input type="text" name="childName" value={formData.childName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A7C4BC] focus:border-transparent outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#1F2A44]">{t('waitlist.form.lbl_age_enfant')} *</label>
                            <input required type="number" min="8" max="17" name="childAge" value={formData.childAge} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A7C4BC] focus:border-transparent outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#1F2A44]">{t('waitlist.form.lbl_tranche_age')} *</label>
                            <select required name="ageGroup" value={formData.ageGroup} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A7C4BC] focus:border-transparent outline-none transition-all bg-white">
                                <option value="">---</option>
                                <option value="8-11">8-11 ans</option>
                                <option value="12-14">12-14 ans</option>
                                <option value="15-17">15-17 ans</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#1F2A44]">{t('waitlist.form.lbl_besoin')}</label>
                        <select name="mainNeed" value={formData.mainNeed} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A7C4BC] focus:border-transparent outline-none transition-all bg-white">
                            <option value="">{t('waitlist.form.opt_besoin_default')}</option>
                            <option value="Confiance en soi">{t('waitlist.form.opt_besoin_1')}</option>
                            <option value="Leadership">{t('waitlist.form.opt_besoin_2')}</option>
                            <option value="Résilience">{t('waitlist.form.opt_besoin_3')}</option>
                            <option value="Lien parent-enfant">{t('waitlist.form.opt_besoin_4')}</option>
                            <option value="Cadre structuré">{t('waitlist.form.opt_besoin_5')}</option>
                            <option value="Je ne sais pas encore">{t('waitlist.form.opt_besoin_6')}</option>
                        </select>
                    </div>

                    <div className="pt-6">
                        <button type="submit" className="w-full bg-[#1F2A44] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#C9A14A] transition-colors duration-300 shadow-lg">
                            {t('waitlist.form.btn_submit')}
                        </button>
                        <div className="flex items-center justify-center mt-4 text-xs text-[#5F6472]">
                            <Lock className="w-3 h-3 mr-1" />
                            {t('waitlist.form.trust')}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WaitlistForm;
