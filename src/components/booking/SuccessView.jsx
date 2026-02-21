import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const SuccessView = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center py-12 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-[#8F9779]/10 rounded-full flex items-center justify-center text-[#8F9779] mx-auto mb-8 shadow-inner">
                <CheckCircle2 size={40} />
            </div>
            <h2 className="text-4xl font-serif text-[#1B263B] mb-4">Félicitations !</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Votre place est sécurisée. Bienvenue dans la famille Thrive. Un reçu officiel a été envoyé à votre adresse courriel.
            </p>
            <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-gray-100 mb-8 inline-block text-left">
                <p className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-widest">Prochaines étapes</p>
                <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-[#8F9779]" /> Email de confirmation reçu.</li>
                    <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-[#8F9779]" /> Votre mentor vous contactera d'ici 24h.</li>
                </ul>
            </div>
            <br />
            <button onClick={() => navigate('/')} className="text-[#1B263B] font-bold underline underline-offset-4">Retour à l'accueil</button>
        </div>
    );
};

export default SuccessView;
