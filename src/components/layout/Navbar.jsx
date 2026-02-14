import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, setBookingStep }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { id: 'home', label: 'Accueil' },
        { id: 'sport', label: 'Le Sport' },
        { id: 'methode', label: 'La Méthode' },
        { id: 'programmes', label: 'Programmes' },
        { id: 'zones', label: 'Zones' },
        { id: 'a-propos', label: 'À Propos' }
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
                    <div className="w-10 h-10 bg-[#8F9779] rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">T</div>
                    <div>
                        <span className="text-xl font-serif font-bold text-[#1B263B]">THRIVE</span>
                        <p className="text-[10px] tracking-widest text-[#C5A059] font-bold uppercase -mt-1">Sport Positive</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <button key={link.id} onClick={() => setCurrentPage(link.id)} className={`text-sm font-medium transition-colors ${currentPage === link.id ? 'text-[#8F9779]' : 'text-[#1B263B] hover:text-[#8F9779]'}`}>{link.label}</button>
                    ))}

                </div>
                <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 shadow-xl">
                    {navLinks.map(link => (
                        <button key={link.id} onClick={() => { setCurrentPage(link.id); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-[#1B263B] font-medium">{link.label}</button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
