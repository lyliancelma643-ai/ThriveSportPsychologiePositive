import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo court sans fond.png';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Navbar = ({ setBookingStep }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/sport', label: t('nav.sport') },
        { path: '/methode', label: t('nav.method') },
        { path: '/programmes', label: t('nav.programs') },
        { path: '/zones', label: t('nav.locations') },
        { path: '/a-propos', label: t('nav.about') }
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
                <Link to="/" className="flex items-center space-x-3 cursor-pointer">
                    <img src={logo} alt="Thrive Logo" width="3000" height="3000" className="h-12 w-auto object-contain brightness-150" />
                    <div>
                        <span className="text-xl font-serif font-bold text-[#1B263B]">THRIVE</span>
                        <p className="text-[10px] tracking-widest text-[#C5A059] font-bold uppercase -mt-1">Sport Positive</p>
                    </div>
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
                    <div className="pl-6 ml-2 border-l border-gray-200">
                        <LanguageSwitcher />
                    </div>
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
                    <div className="pt-2 pb-1 border-t border-gray-100 flex justify-center">
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
