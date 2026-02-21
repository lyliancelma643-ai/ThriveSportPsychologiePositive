import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo court sans fond.png';

const Navbar = ({ setBookingStep }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Accueil' },
        { path: '/sport', label: 'Le Sport' },
        { path: '/methode', label: 'La Méthode' },
        { path: '/programmes', label: 'Programmes' },
        { path: '/zones', label: 'Zones' },
        { path: '/a-propos', label: 'À Propos' }
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
                <Link to="/" className="flex items-center space-x-3 cursor-pointer">
                    <img src={logo} alt="Thrive Logo" className="h-12 w-auto object-contain" />
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
                </div>
            )}
        </nav>
    );
};

export default Navbar;
