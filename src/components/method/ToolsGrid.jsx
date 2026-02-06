import React from 'react';
import { Smartphone, Heart, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const ToolsGrid = () => {
    return (
        <section className="bg-[#F8F9FA] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Nos Outils Uniques" subtitle="Nous intégrons des outils pédagogiques puissants dans chaque programme." />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Journal de Bord de l'Athlète", icon: <Smartphone />, desc: "Un outil numérique (Hexfit) pour suivre l'évolution mentale et physique entre les séances." },
                        { title: "La Roue des Émotions", icon: <Heart />, desc: "Faire le point sur sa 'météo intérieure' avant chaque début de pratique." },
                        { title: "Correction par Addition", icon: <CheckCircle2 />, desc: "Feedback axé sur ce qu'il faut ajouter au lieu de ce qu'il faut supprimer." }
                    ].map((tool, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059] mx-auto mb-6">
                                {tool.icon}
                            </div>
                            <h4 className="text-xl font-bold text-[#1B263B] mb-3">{tool.title}</h4>
                            <p className="text-gray-600">{tool.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsGrid;
