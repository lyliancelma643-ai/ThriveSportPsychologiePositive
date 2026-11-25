import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import logo from '../../assets/logo.png';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { AFFICHER_ANGLAIS, ENTREPRISE, PROGRAMMES, MAISON } from '../../data/offre';
import { PIED, CTA } from '../../content/textes';

const lien = 'text-sm text-white/75 hover:text-white hover:underline underline-offset-4 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]';
const titreCol = 'text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-4';

const Footer = () => {
    const offre = [
        { to: '/maison', label: MAISON.nom },
        { to: PROGRAMMES.groupe.path, label: PROGRAMMES.groupe.nom },
        { to: PROGRAMMES.individuel.path, label: PROGRAMMES.individuel.nom },
        { to: PROGRAMMES.complet.path, label: PROGRAMMES.complet.nom },
        { to: '/programmes', label: 'Programmes et prix' },
    ];
    const thrive = [
        { to: '/methode', label: 'La méthode' },
        { to: '/a-propos', label: 'À propos' },
        { to: '/partenaires', label: 'Partenaires' },
        { to: '/appel', label: CTA.appelCourt },
    ];

    return (
        <footer className="bg-[#1B263B] text-white pt-14 pb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="bg-white p-4 sm:px-8 sm:py-5 rounded-[2rem] shadow-xl">
                        <img src={logo} alt="THRIVE Sport Positive" className="h-12 sm:h-16 w-auto object-contain" />
                    </div>
                    <p className="mt-5 font-serif text-lg text-white/90">{PIED.signature}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
                    <nav aria-label={PIED.colonnes.offre}>
                        <h2 className={titreCol}>{PIED.colonnes.offre}</h2>
                        <ul className="space-y-2.5">
                            {offre.map((l) => (
                                <li key={l.to}>
                                    <Link to={l.to} className={lien}>{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav aria-label={PIED.colonnes.thrive}>
                        <h2 className={titreCol}>{PIED.colonnes.thrive}</h2>
                        <ul className="space-y-2.5">
                            {thrive.map((l) => (
                                <li key={l.to}>
                                    <Link to={l.to} className={lien}>{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div>
                        <h2 className={titreCol}>{PIED.colonnes.contact}</h2>
                        <ul className="space-y-2.5">
                            <li>
                                <a href={`mailto:${ENTREPRISE.courriel}`} className={`${lien} inline-flex items-center gap-2`}>
                                    <Mail size={16} aria-hidden="true" /> {ENTREPRISE.courriel}
                                </a>
                            </li>
                            <li>
                                <a href={ENTREPRISE.telephoneHref} className={`${lien} inline-flex items-center gap-2`}>
                                    <Phone size={16} aria-hidden="true" /> {ENTREPRISE.telephone}
                                </a>
                            </li>
                            <li className="text-sm text-white/75">{ENTREPRISE.ville}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-3 text-center">
                    <p className="text-sm text-white/80">{PIED.lancement}</p>
                    <p className="text-xs text-white/60 max-w-2xl mx-auto leading-relaxed">{PIED.legal}</p>
                    <p className="text-xs text-white/60">
                        <Link to="/confidentialite" className="hover:text-white underline underline-offset-4">Confidentialité</Link>
                        {' · '}
                        <Link to="/conditions" className="hover:text-white underline underline-offset-4">Conditions</Link>
                    </p>
                    {AFFICHER_ANGLAIS && (
                        <div className="flex justify-center"><LanguageSwitcher /></div>
                    )}
                    <p className="text-xs text-white/60">&copy; {new Date().getFullYear()} {ENTREPRISE.raisonSociale}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
