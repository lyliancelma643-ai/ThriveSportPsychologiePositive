import React from 'react';
import { Award, BookOpen, ShieldCheck, Users, GraduationCap, Activity, Quote } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ContactSection from '../components/ui/ContactSection';

const About = () => {
    return (
        <div className="py-20 bg-gray-50/50">
            <div className="max-w-4xl mx-auto px-4 text-center mb-16">
                <SectionHeader
                    title="L'Élite du Mentorat Sportif"
                    subtitle="Nous ne sommes pas juste des entraîneurs. Nous sommes des éducateurs de la confiance."
                />
                <p className="text-xl text-gray-600 leading-relaxed">
                    Fondé par d'anciens athlètes de haut niveau reconvertis en psychologie, Thrive comble le fossé entre la performance brute et le bien-être mental.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-[#1B263B]/10 rounded-full flex items-center justify-center text-[#1B263B] mb-6">
                        <Users size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-4">Sélection Drastique</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Chaque mentor est trié sur le volet selon deux critères non-négociables : une <strong>expérience terrain significative</strong> (athlète universitaire ou pro) et une solide <strong>connaissance académique</strong> en psychologie ou pédagogie.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#8F9779] to-[#C5A059]"></div>
                    <div className="w-16 h-16 bg-[#8F9779]/10 rounded-full flex items-center justify-center text-[#8F9779] mb-6">
                        <BookOpen size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-4">Formation Thrive Certifiée</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Avant de rencontrer votre enfant, tous nos coachs suivent une formation intensive à la <strong>Psychologie Positive Appliquée</strong>. Ce cursus est vérifié et validé par notre comité pédagogique pour garantir l'approche Thrive.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059] mb-6">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1B263B] mb-4">Test & Validation</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        La théorie ne suffit pas. Chaque coach passe un <strong>examen pratique</strong> en situation réelle. Seuls ceux qui démontrent 100% de maîtrise de la communication positive et de la sécurité affective sont validés.
                    </p>
                </div>
            </div>

            {/* History & Philosophy Section */}
            <section className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Quote size={200} />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1B263B] mb-10 text-center">L'Histoire Thrive : De la Glace à la Science</h2>

                        <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                            <p>
                                <span className="font-serif text-[#C5A059] text-2xl mr-1 font-bold">Thrive</span> est né d'une trajectoire unique : celle d'un <strong>athlète de haut niveau</strong> confronté aux extrêmes de la pression sportive, combinée à la rigueur intellectuelle de l'<strong>Université de Montréal</strong>.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
                                <div>
                                    <h3 className="text-[#1B263B] font-bold mb-4 flex items-center text-lg"><GraduationCap className="mr-3 text-[#8F9779]" /> L'Alliance Scientifique UdeM</h3>
                                    <p className="text-sm leading-7">
                                        Ce projet a été co-construit main dans la main avec des professeurs émérites de l'Université de Montréal. Ils ont accompagné le développement de la méthode d'A à Z, validant l'analyse minutieuse de plus de <strong>120 études scientifiques</strong>. Thrive repose sur des bases prouvées et fiables.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#1B263B] font-bold mb-4 flex items-center text-lg"><Activity className="mr-3 text-[#8F9779]" /> La Science de la Mesure</h3>
                                    <p className="text-sm leading-7">
                                        Nous ne devinons pas le progrès, nous le mesurons. Grâce à des échelles scientifiques reconnues, nous évaluons l'état de l'enfant <strong>avant et après chaque séance</strong>. Ces données permettent un débriefing précis aux parents pour valoriser concrètement chaque victoire et ancrer la confiance.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center relative py-8 mt-4 border-t border-gray-100">
                                <p className="font-serif text-[#1B263B] text-2xl italic leading-relaxed">
                                    "Nous pensons que l'essence de la joie et de la prospérité naît de la positivité."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection />
        </div>
    );
};

export default About;
