import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const Cta = ({ setCurrentPage, setBookingStep }) => {
    return (
        <section className="py-20 bg-[#F8F9FA] border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-serif text-[#1B263B] mb-6">Prêt à révéler le potentiel de votre enfant ?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Les places sont limitées pour garantir la qualité du mentorat. Réservez votre évaluation dès aujourd'hui et commencez le changement.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => { setBookingStep('calendar'); setCurrentPage('booking'); }}
                        className="bg-[#1B263B] text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:bg-[#253550] transition-all flex items-center justify-center transform hover:scale-105"
                    >
                        <CheckCircle2 className="mr-2" /> Réserver l'évaluation
                    </button>
                </div>
                <p className="mt-6 text-sm text-gray-400 flex items-center justify-center">
                    <ShieldCheck size={14} className="mr-1" /> Satisfait ou remboursé sur la séance découverte.
                </p>
            </div>
        </section>
    );
};

export default Cta;
