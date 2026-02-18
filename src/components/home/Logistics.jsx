import React from 'react';
import { MapPin, User, Shirt } from 'lucide-react';

const Logistics = () => {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-[#1B263B] mb-4">Informations Pratiques</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm">
                    <div className="p-6 bg-gray-50 rounded-2xl">
                        <MapPin size={32} className="mx-auto text-[#1B263B] mb-4" />
                        <h3 className="font-bold text-[#1B263B] uppercase tracking-widest mb-2">Lieux</h3>
                        <p className="text-gray-600">Montréal, Laval, Longueuil.</p>
                        <p className="text-gray-500 text-xs mt-1">À domicile, au parc ou terrain local.</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl">
                        <User size={32} className="mx-auto text-[#1B263B] mb-4" />
                        <h3 className="font-bold text-[#1B263B] uppercase tracking-widest mb-2">Âges</h3>
                        <p className="text-gray-600">5 à 17 ans.</p>
                        <p className="text-gray-500 text-xs mt-1">Programmes adaptés par tranche d'âge.</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl">
                        <Shirt size={32} className="mx-auto text-[#1B263B] mb-4" />
                        <h3 className="font-bold text-[#1B263B] uppercase tracking-widest mb-2">Équipement</h3>
                        <p className="text-gray-600">Tenue de sport standard.</p>
                        <p className="text-gray-500 text-xs mt-1">Le matériel spécifique est fourni par le coach.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Logistics;
