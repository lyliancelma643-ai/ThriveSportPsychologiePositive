import React, { useState } from 'react';
import { Menu, X, Mail, Phone, LogIn } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import LanguageSwitcher from '../ui/LanguageSwitcher';

// URL de l'application THRIVE (espace membre / connexion).
// Configurable via la variable d'env Vite VITE_APP_URL ; sinon app locale en dev,
// app déployée sur Vercel en production.
const APP_URL = import.meta.env.VITE_APP_URL
    || (import.meta.env.PROD ? 'https://app.thrivesportpositive.com' : 'http://localhost:3001');
const APP_LOGIN_URL = `${APP_URL}/login`;

const Navbar = ({ setBookingStep }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/sport', label: t('nav.sport') },
        { path: '/evaluation', label: t('nav.booking') },
        { path: '/methode', label: t('nav.method') },
        { path: '/prix', label: t('nav.pricing') },
        { path: '/zones', label: t('nav.locations') },
        { path: '/a-propos', label: t('nav.about') }
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
                <Link to="/" className="flex items-center cursor-pointer">
                    <img src={logo} alt="Thrive Sport Positive" className="h-14 md:h-16 w-auto object-contain" />
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-[#8F9779]' : 'text-[#1B263B] hover:text-[#8F9779]'}`}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <div className="flex items-center space-x-4 pl-6 ml-2 border-l border-gray-200">
                        <a href="mailto:info@thrivesportpositive.com" className="text-[#1B263B] hover:text-[#C5A059] transition-colors p-1" title="Nous contacter par email">
                            <Mail size={20} />
                        </a>
                        <a href="tel:+12633622030" className="text-[#1B263B] hover:text-[#C5A059] transition-colors p-1" title="Nous appeler">
                            <Phone size={20} />
                        </a>
                        <LanguageSwitcher />
                    </div>
                    <a
                        href={APP_LOGIN_URL}
                        className="inline-flex items-center gap-2 bg-[#1B263B] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#C5A059] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
                        title={t('nav.login')}
                        aria-label={t('nav.loginAria')}
                    >
                        <LogIn size={16} />
                        {t('nav.login')}
                    </a>
                </div>
                <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 shadow-xl">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block w-full text-left px-4 py-2 font-medium ${isActive ? 'text-[#8F9779]' : 'text-[#1B263B]'}`}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <a
                        href={APP_LOGIN_URL}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-[#1B263B] text-white font-semibold px-4 py-3 rounded-full hover:bg-[#C5A059] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
                        aria-label={t('nav.loginAria')}
                    >
                        <LogIn size={18} />
                        {t('nav.login')}
                    </a>
                    <div className="pt-4 pb-4 border-t border-gray-100 flex items-center justify-center space-x-6">
                        <div className="flex space-x-4">
                            <a href="mailto:info@thrivesportpositive.com" className="flex items-center text-[#1B263B] hover:text-[#C5A059] transition-colors p-2" title="Envoyer un email">
                                <Mail size={20} />
                            </a>
                            <a href="tel:+12633622030" className="flex items-center text-[#1B263B] hover:text-[#C5A059] transition-colors p-2" title="Appeler">
                                <Phone size={20} />
                            </a>
                        </div>
                        <div className="h-6 w-px bg-gray-200"></div>
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
