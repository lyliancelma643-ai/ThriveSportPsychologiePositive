import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1B263B] text-white py-16 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white/5 p-8 rounded-[2rem]">
                        <h5 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-4 flex items-center"><ShieldCheck size={14} className="mr-2" /> Modalités de Paiement Fractionné</h5>
                        <p className="text-[11px] text-white/40 leading-relaxed">L’Entreprise offre la possibilité de régler les "Packs" en plusieurs mensualités. Cette facilité de paiement ne constitue pas un crédit à la consommation. Le Client s'engage au paiement de l'intégralité de la somme totale définie au contrat.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-[2rem]">
                        <h5 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-4 flex items-center"><ShieldCheck size={14} className="mr-2" /> Avis Légal (Loi 21)</h5>
                        <p className="text-[11px] text-white/40 leading-relaxed">IMPORTANT : Les services de Thrive visent l'amélioration de la performance et le développement des habiletés mentales. Le consultant n'est pas psychologue ni psychothérapeute membre de l'OPQ.</p>
                    </div>
                </div>
                <p className="text-center text-white/30 text-[10px]">&copy; {new Date().getFullYear()} Thrive Sport Positive. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
