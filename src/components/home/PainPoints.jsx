import React from 'react';
import { XCircle } from 'lucide-react';

const PainPoints = () => {
    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&q=80"
                                alt="Joueur dans l'ombre"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                                <p className="text-white text-xl font-serif italic text-center">
                                    "50% des enfants sont invisibles dans les clubs de masse."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1B263B] mb-6">Votre enfant est-il un <span className="italic">"Joueur de l'Ombre"</span> ?</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Dans les structures traditionnelles, le focus est mis sur l'élite ou la gestion du groupe. Les enfants qui <span className="font-bold text-[#1B263B]">manquent de confiance</span>, qui hésitent ou qui ne sont pas "naturellement" compétitifs se perdent. <span className="font-bold text-[#1B263B]">Ils se retrouvent souvent seuls, isolés au sein même de leur équipe, sans le soutien émotionnel nécessaire pour s'épanouir.</span>
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                "Hésitation devant l'échec et peur du jugement",
                                "Perte de plaisir et envie fréquente d'abandonner",
                                "Performance bloquée par l'anxiété de compétition",
                                "Manque de repères individuels et de feedback constructif"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <XCircle className="text-red-400 mr-3 mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#8F9779] font-bold text-lg">
                            Thrive n'entraîne pas les foules. Nous créons des leaders résilients.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default PainPoints;
