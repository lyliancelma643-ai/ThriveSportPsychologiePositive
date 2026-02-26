import React from 'react';
import { MapPin, Navigation, Home, Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';


const Locations = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100 pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Maps / Visual Side */}
                    <div className="relative">
                        <div className="bg-gray-50 rounded-[2.5rem] p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden border-2 border-dashed border-gray-200">
                            {/* Decorative Background Map Pattern */}
                            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1B263B 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            <div className="relative z-10 w-full max-w-sm space-y-4">
                                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center transform translate-x-4">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600"><MapPin size={24} /></div>
                                    <div>
                                        <div className="font-bold text-[#1B263B]">Île de Montréal</div>
                                        <div className="text-xs text-gray-500">Centre & Périphérie</div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center transform -translate-x-4">
                                    <div className="bg-purple-100 p-2 rounded-full mr-3 text-purple-600"><MapPin size={24} /></div>
                                    <div>
                                        <div className="font-bold text-[#1B263B]">Laval</div>
                                        <div className="text-xs text-gray-500">Rive-Nord</div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center transform translate-x-8">
                                    <div className="bg-emerald-100 p-2 rounded-full mr-3 text-emerald-600"><MapPin size={24} /></div>
                                    <div>
                                        <div className="font-bold text-[#1B263B]">Longueuil</div>
                                        <div className="text-xs text-gray-500">Rive-Sud</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div>
                        <SectionHeader
                            title="Notre Zone d'Intervention"
                            subtitle="Nous venons à vous, là où l'athlète s'entraîne."
                            align="left"
                        />

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Nous sommes présents sur toute <strong>l'île de Montréal</strong>, ainsi qu'à <strong>Laval</strong> et <strong>Longueuil</strong>.
                        </p>

                        <div className="bg-[#8F9779]/10 p-6 rounded-2xl border border-[#8F9779]/20 mb-8">
                            <h4 className="flex items-center text-[#1B263B] font-serif font-bold text-xl mb-3">
                                <Navigation className="mr-2 text-[#8F9779]" /> Flexibilité Totale
                            </h4>
                            <p className="text-gray-700">
                                Nous savons que la logistique familiale est un sport en soi. Nous nous adaptons à chaque famille pour trouver <strong>le consensus parfait</strong> : un lieu qui arrange les parents tout en offrant les meilleures conditions d'entraînement pour l'enfant.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-gray-500 text-sm">
                                <Home size={16} className="mr-2" /> Domicile / Parc
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                                <Users size={16} className="mr-2" /> Aréna / Terrain local
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Locations;
