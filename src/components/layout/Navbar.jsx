import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CtaReserver from '../shared/CtaReserver';
import { APP_LOGIN_URL } from '../../lib/appUrl';
import { CTA, NAV } from '../../content/textes';

const lienClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded ${
        isActive ? 'text-[#1B263B] underline decoration-[#C5A059] decoration-2 underline-offset-8' : 'text-[#1B263B] hover:text-[#8A6A2F]'
    }`;

const Navbar = () => {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const location = useLocation();
    const fermer = () => setMenuOuvert(false);

    // Le menu mobile se ferme à chaque changement de route (et d'ancre).
    useEffect(() => {
        setMenuOuvert(false);
    }, [location.pathname, location.hash]);

    // Échap ferme le menu.
    useEffect(() => {
        if (!menuOuvert) return undefined;
        const onKey = (e) => e.key === 'Escape' && setMenuOuvert(false);
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [menuOuvert]);

    return (
        <nav
            aria-label={NAV.menuPrincipal}
            className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
                <Link to="/" onClick={fermer} aria-label={NAV.accueil} className="flex items-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]">
                    <img src={logo} alt="THRIVE Sport Positive" className="h-14 md:h-16 w-auto object-contain" />
                </Link>

                <div className="hidden lg:flex items-center gap-7">
                    {NAV.liens.map((l) => (
                        <NavLink key={l.to} to={l.to} className={lienClasses}>
                            {l.label}
                        </NavLink>
                    ))}
                    <CtaReserver court taille="sm" />
                    <a
                        href={APP_LOGIN_URL}
                        className="text-sm text-gray-500 hover:text-[#1B263B] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                    >
                        {CTA.connexion}
                    </a>
                </div>

                <button
                    type="button"
                    className="lg:hidden p-2 -mr-2 rounded-full text-[#1B263B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                    onClick={() => setMenuOuvert((o) => !o)}
                    aria-label={menuOuvert ? NAV.fermerMenu : NAV.ouvrirMenu}
                    aria-expanded={menuOuvert}
                    aria-controls="menu-mobile"
                >
                    {menuOuvert ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
                </button>
            </div>

            {menuOuvert && (
                <div id="menu-mobile" className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
                    {NAV.liens.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            onClick={fermer}
                            className={({ isActive }) =>
                                `block py-3.5 px-2 text-lg border-b border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
                                    isActive ? 'text-[#1B263B] font-bold' : 'text-[#1B263B]'
                                }`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <CtaReserver court taille="lg" className="w-full mt-5" onClick={fermer} />
                    <a
                        href={APP_LOGIN_URL}
                        onClick={fermer}
                        className="block text-center mt-4 py-2 text-sm text-gray-500 hover:text-[#1B263B]"
                    >
                        {CTA.connexion}
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
