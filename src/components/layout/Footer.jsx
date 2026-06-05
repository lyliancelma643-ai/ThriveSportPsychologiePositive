import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-[#1B263B] text-white py-16 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="flex items-center justify-center bg-white p-6 sm:px-12 sm:py-8 rounded-[2rem] shadow-xl">
                        <img src={logo} alt="Thrive Sport Positive" className="h-14 sm:h-[5.5rem] w-auto object-contain" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="bg-white/5 p-8 rounded-[2rem]">
                        <h5 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-4 flex items-center"><ShieldCheck size={14} className="mr-2" /> {t('footer.payment')}</h5>
                        <p className="text-[11px] text-white/40 leading-relaxed">{t('footer.payment_desc')}</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-[2rem]">
                        <h5 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-4 flex items-center"><ShieldCheck size={14} className="mr-2" /> {t('footer.legal')}</h5>
                        <p className="text-[11px] text-white/40 leading-relaxed">{t('footer.legal_desc')}</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-[2rem]">
                        <h5 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-4 flex items-center"><Mail size={14} className="mr-2" /> Contact</h5>
                        <a href="mailto:info@thrivesportpositive.com" className="flex items-center text-[13px] text-white/70 hover:text-white transition-colors group">
                            <span className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-[#C5A059] transition-colors"><Mail size={16} /></span>
                            info@thrivesportpositive.com
                        </a>
                        <a href="tel:+12633622030" className="flex items-center text-[13px] text-white/70 hover:text-white transition-colors group mt-4">
                            <span className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-[#C5A059] transition-colors"><Phone size={16} /></span>
                            +1 (263) 362-2030
                        </a>
                    </div>
                </div>
                <p className="text-center text-white/30 text-[10px]">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
