import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    // Le hook useTranslation permet l'accès à l'instance i18n
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        // Détecte si la langue actuelle commence par "fr" (pour gérer "fr-FR", etc.)
        const currentLang = i18n.resolvedLanguage || i18n.language;
        const newLang = currentLang.startsWith('fr') ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    const currentLang = i18n.resolvedLanguage || i18n.language;
    const isFr = currentLang.startsWith('fr');

    return (
        <button
            onClick={toggleLanguage}
            className="group relative flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm hover:border-[#8F9779]/30 hover:shadow-md transition-all duration-300 overflow-hidden"
            aria-label="Changer de langue / Change language"
        >
            {/* Effet de brillance au survol (Premium) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
            
            <Globe 
                size={16} 
                className={`transition-colors duration-300 ${isFr ? 'text-[#C5A059]' : 'text-[#8F9779]'}`} 
            />
            
            <span className="text-xs font-bold text-[#1B263B] uppercase tracking-wider relative z-10 w-4 text-center">
                {isFr ? 'FR' : 'EN'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
