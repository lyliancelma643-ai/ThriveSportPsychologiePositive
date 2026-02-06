import React from 'react';
import { Microscope } from 'lucide-react';

const ScientificProof = () => {
    return (
        <div className="bg-[#1B263B] rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <Microscope size={300} />
            </div>

            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">L'Impact Mesurable du Bonheur</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="text-5xl md:text-6xl font-bold text-[#C5A059] mb-4 font-serif">+31%</div>
                        <h4 className="text-xl font-bold mb-2">de Performance</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Les études montrent que les cerveaux positifs sont 31% plus productifs et précis que les cerveaux négatifs ou stressés.
                            <br /><span className="italic text-[10px] opacity-50">(Source : Lyubomirsky, King, & Diener, 2005)</span>
                        </p>
                    </div>
                    <div>
                        <div className="text-5xl md:text-6xl font-bold text-[#C5A059] mb-4 font-serif">x3</div>
                        <h4 className="text-xl font-bold mb-2">Créativité Tactique</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Les émotions positives élargissent le champ attentionnel, permettant de voir plus de solutions de jeu (Broaden-and-Build Theory).
                            <br /><span className="italic text-[10px] opacity-50">(Source : Fredrickson, 2004)</span>
                        </p>
                    </div>
                    <div>
                        <div className="text-5xl md:text-6xl font-bold text-[#C5A059] mb-4 font-serif">-23%</div>
                        <h4 className="text-xl font-bold mb-2">Symptômes de Stress</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            L'approche bienveillante réduit le cortisol (hormone du stress), favorisant une récupération physique et mentale plus rapide.
                            <br /><span className="italic text-[10px] opacity-50">(Source : American Psychological Association)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScientificProof;
