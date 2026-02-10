import React from 'react';
import PermaGrid from '../components/method/PermaGrid';
import ScientificProof from '../components/method/ScientificProof';

import ScorecardLevels from '../components/method/ScorecardLevels';
import EliteDashboard from '../components/method/EliteDashboard';
import MethodSidebar from '../components/method/MethodSidebar';
import ContactSection from '../components/ui/ContactSection';

const Method = ({ setCurrentPage, setBookingStep }) => {
    return (
        <div className="py-20 bg-[#FAFAFA]">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

                    {/* Left Column: Sidebar (Sticky) */}
                    <MethodSidebar setCurrentPage={setCurrentPage} setBookingStep={setBookingStep} />

                    {/* Right Column: Content */}
                    <main className="space-y-24">

                        {/* Section 1: Intro */}
                        <section id="intro" className="text-center pt-8">
                            <span className="text-[#8F9779] font-bold uppercase tracking-widest text-sm">La Science du Succès</span>
                            <h1 className="text-5xl md:text-6xl font-serif text-[#1B263B] mt-4 mb-6 leading-tight">
                                Le Modèle PERMA <br />
                                <span className="text-4xl md:text-5xl text-gray-400 italic font-serif">appliqué au sport.</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                                Développé par le Dr. Martin Seligman, père de la psychologie positive, ce modèle est notre boussole. Nous ne devinons pas comment motiver votre enfant, nous appliquons une science validée.
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
