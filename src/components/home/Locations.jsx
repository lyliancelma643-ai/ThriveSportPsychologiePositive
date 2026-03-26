import React from 'react';
import { MapPin, Home, Building2, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Locations = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100 pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Maps / Visual Side */}
                    <div className="relative">
                        <div className="bg-gray-50 rounded-[2.5rem] p-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden border-2 border-[#C5A059]/20 shadow-inner">
                            {/* Decorative Background Map Pattern */}
                            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1B263B 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            <div className="relative z-10 w-full space-y-6">
                                {/* CEPSUM Card */}
                                <div className="bg-white p-6 rounded-2xl shadow-xl flex items-start transform hover:-translate-y-1 transition-transform border border-gray-100">
                                    <div className="bg-[#1B263B]/10 p-4 rounded-full mr-4 text-[#1B263B] shrink-0"><Building2 size={28} /></div>
                                    <div>
                                        <div className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest mb-1">Complexe Premium</div>
                                        <h3 className="font-serif font-bold text-xl text-[#1B263B] mb-1">CEPSUM</h3>
                                        <p className="text-sm text-gray-600 mb-2">Centre d'éducation physique et des sports de l'Université de Montréal.</p>
                                        <div className="text-xs text-gray-500 flex items-start font-medium">
                                            <MapPin size={16} className="mr-1 shrink-0 mt-0.5 text-[#8F9779]" /> 
                                            2100 Bd Édouard-Montpetit, Montréal, QC H3T 1J4
                                        </div>
                                    </div>
                                </div>

                                {/* Domicile Card */}
                                <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start transform translate-x-4 hover:-translate-y-1 transition-transform border border-gray-100">
                                    <div className="bg-[#8F9779]/10 p-4 rounded-full mr-4 text-[#8F9779] shrink-0"><Home size={28} /></div>
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Sur Mesure</div>
                                        <h3 className="font-serif font-bold text-lg text-[#1B263B] mb-1">Intervention à Domicile</h3>
                                        <p className="text-sm text-gray-600">Possible selon le matériel disponible sur place (à valider avec votre coach).<br/><span className="text-[#C5A059] font-medium text-xs">*Frais de déplacement applicables.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div>
                        <SectionHeader
                            title="Nos Lieux d'Intervention"
                            subtitle="Des infrastructures de qualité professionnelle pour des résultats optimaux."
                            align="left"
                        />

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Afin d'offrir la meilleure expérience d'encadrement, nous vous accueillons au <strong>CEPSUM</strong>. Ce complexe sportif premium offre des installations de <strong>calibre universitaire et professionnel</strong>, créant le cadre idéal pour favoriser la concentration, la motivation et l'excellence motrice.
                        </p>

                        <div className="bg-[#8F9779]/10 p-6 rounded-2xl border border-[#8F9779]/20 mb-8">
                            <h3 className="flex items-center text-[#1B263B] font-serif font-bold text-xl mb-3">
                                <Home className="mr-2 text-[#8F9779]" /> Service Privé à Domicile
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Nous offrons la flexibilité d'intervenir <strong>directement chez vous</strong>. Cette option sur-mesure est possible si vous disposez d'un espace sécuritaire et de l'équipement nécessaire (à évaluer avec le coach lors de l'appel). Des frais de déplacement s'appliquent.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="flex items-center text-gray-600 font-medium">
                                <CheckCircle2 size={20} className="mr-2 text-[#C5A059]" /> Installations premium
                            </div>
                            <div className="flex items-center text-gray-600 font-medium">
                                <CheckCircle2 size={20} className="mr-2 text-[#C5A059]" /> Équipement de pointe
                            </div>
                            <div className="flex items-center text-gray-600 font-medium">
                                <CheckCircle2 size={20} className="mr-2 text-[#C5A059]" /> Cadre d'entraînement idéal
                            </div>
                            <div className="flex items-center text-gray-600 font-medium">
                                <CheckCircle2 size={20} className="mr-2 text-[#C5A059]" /> Flexibilité à domicile
                            </div>
                        </div>
                    </div>

                </div>

                {/* Benefits Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Benefices CEPSUM */}
                    <div className="bg-[#1B263B] text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700"><Building2 size={160} /></div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 relative z-10 text-white">L'Effet CEPSUM</h3>
                        <p className="text-gray-300 mb-8 relative z-10 text-lg leading-relaxed">
                            Entrer dans un complexe sportif universitaire crée un <strong className="text-white">puissant déclic psychologique</strong>. L'enfant change de posture.
                        </p>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start">
                                <div className="bg-[#C5A059]/20 p-2 rounded-xl mr-4 shrink-0 mt-1">
                                    <CheckCircle2 className="text-[#C5A059]" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">Sanctuaire de Performance</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">Il ne vient pas juste "jouer". L'environnement élève naturellement ses standards, son niveau d'exigence et de concentration.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-[#C5A059]/20 p-2 rounded-xl mr-4 shrink-0 mt-1">
                                    <CheckCircle2 className="text-[#C5A059]" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">Espace Dédié</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">Sortir de sa routine quotidienne pour entrer dans un lieu conçu pour l'excellence sportive offre une coupure mentale idéale pour un focus absolu.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Benefices Domicile */}
                    <div className="bg-[#8F9779] text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700"><Home size={160} /></div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 relative z-10 text-white">L'Avantage à Domicile</h3>
                        <p className="text-[#e2e6d9] mb-8 relative z-10 text-lg leading-relaxed">
                            S'entraîner dans son propre environnement offre une <strong className="text-white">sécurité émotionnelle inégalée</strong>, particulièrement pour les enfants anxieux.
                        </p>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start">
                                <div className="bg-white/20 p-2 rounded-xl mr-4 shrink-0 mt-1">
                                    <CheckCircle2 className="text-white" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">Cocon de Confiance</strong>
                                    <span className="text-white/80 text-sm leading-relaxed">L'athlète évolue sur son territoire. Les barrières tombent plus vite, facilitant une connexion profonde et rapide avec le coach.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-white/20 p-2 rounded-xl mr-4 shrink-0 mt-1">
                                    <CheckCircle2 className="text-white" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">Transfert Immédiat</strong>
                                    <span className="text-white/80 text-sm leading-relaxed">S'entraîner dans sa cour ou au parc local ancre de nouvelles habitudes là où il pratique en solo, maximisant l'autonomie.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Locations;
