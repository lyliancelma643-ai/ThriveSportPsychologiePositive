import React from 'react';
import { Helmet } from 'react-helmet-async';
import PermaGrid from '../components/method/PermaGrid';
import ScientificProof from '../components/method/ScientificProof';

import ScorecardLevels from '../components/method/ScorecardLevels';
import EliteDashboard from '../components/method/EliteDashboard';
import MethodSidebar from '../components/method/MethodSidebar';
import ContactSection from '../components/ui/ContactSection';

const Method = ({ setBookingStep }) => {
    return (
        <div className="py-20 bg-[#FAFAFA]">
            <Helmet>
                <title>Méthode PERMA Enfant | Psychologie Appliquée — Thrive</title>
                <meta name="description" content="Transformez le potentiel de votre enfant avec la méthode PERMA enfant. Une pédagogie positive validée par la science pour booster sa confiance. Découvrez-la !" />
                <link rel="canonical" href="https://thrivetutorpositive.com/methode" />
            </Helmet>
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

                    {/* Left Column: Sidebar (Sticky) */}
                    <MethodSidebar setBookingStep={setBookingStep} />

                    {/* Right Column: Content */}
                    <main className="space-y-24">

                        {/* Section 1: Intro */}
                        <section id="intro" className="text-center pt-8">
                            <span className="text-[#8F9779] font-bold uppercase tracking-widest text-sm">La Science du Succès</span>
                            <h1 className="text-4xl md:text-5xl font-serif text-[#1B263B] mt-4 mb-6 leading-tight">
                                La méthode PERMA enfant : <br />
                                <span className="text-3xl md:text-4xl text-gray-500 italic font-serif">La psychologie positive appliquée au sport-études.</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                                L'échec scolaire ou la perte de motivation ne sont pas des fatalités. Chez Thrive, nous utilisons la méthode PERMA enfant, un modèle validé par la science et la psychologie positive, pour transformer l'approche mentale de votre jeune athlète. Plutôt que de punir les mauvaises notes, notre pédagogie renforce les émotions positives, l'engagement et l'accomplissement. En appliquant ces stratégies mentales issues du sport de haut niveau à leurs devoirs, nos étudiants-athlètes développent une résilience académique redoutable et une véritable passion pour l'apprentissage.
                            </p>
                        </section>

                        {/* Section 2: PERMA */}
                        <section id="perma" className="scroll-mt-32">
                            <PermaGrid />
                        </section>

                        {/* Section 3: Scorecard */}
                        <section id="scorecard" className="scroll-mt-32">
                            <ScorecardLevels />
                        </section>

                        {/* Section 4: Science */}
                        <section id="science" className="scroll-mt-32">
                            <ScientificProof />
                        </section>

                        {/* Section 5: Dashboard */}
                        <section id="dashboard" className="scroll-mt-32 -mx-4 md:mx-0 rounded-[3rem] overflow-hidden">
                            <EliteDashboard />
                        </section>

                        {/* Section 6: Tools */}


                    </main>
                </div>
                <ContactSection />
            </div>
        </div>
    );
};

export default Method;
