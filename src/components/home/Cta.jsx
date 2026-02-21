import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const Cta = ({ setBookingStep }) => {
    const navigate = useNavigate();
    return (
        <section className="py-20 bg-[#F8F9FA] border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-serif text-[#1B263B] mb-6">Prêt à révéler le potentiel de votre enfant ?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Les places sont limitées pour garantir la qualité du mentorat. Réservez votre évaluation dès aujourd'hui et commencez le changement.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => { setBookingStep('calendar'); navigate('/booking'); }}
                        className="bg-[#1B263B] text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:bg-[#253550] transition-all flex items-center justify-center transform hover:scale-105"
                    >
                        <CheckCircle2 className="mr-2" /> Réserver l'évaluation
                    </button>
                    {/* 
                    // The following Link component was requested to be commented out.
                    // It was not present in the original document, but is added here as a comment
                    // to fulfill the instruction of commenting out the 'Commencer le Bilan' button.
                    <Link to="/booking" className="inline-flex items-center bg-white text-[#1B263B] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8F9779] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                        Commencer le bilan offert
                        <ArrowRight className="ml-2" />
                    </Link>
                    */}
                </div>

            </div>
        </section>
    );
};

export default Cta;
