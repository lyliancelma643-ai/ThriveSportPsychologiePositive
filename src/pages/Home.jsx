import React from 'react';
import Hero from '../components/home/Hero';
import AuthorityBar from '../components/home/AuthorityBar';
import PainPoints from '../components/home/PainPoints';
import Comparison from '../components/home/Comparison';
import MethodTeaser from '../components/home/MethodTeaser';
import Testimonials from '../components/home/Testimonials';
import Faq from '../components/home/Faq';
import Cta from '../components/home/Cta';
import ContactSection from '../components/ui/ContactSection';
import DiagnosticWidget from '../components/ui/DiagnosticWidget';

import Locations from '../components/home/Locations';
import ProcessSteps from '../components/home/ProcessSteps';
import ParentCommitment from '../components/home/ParentCommitment';
import Logistics from '../components/home/Logistics';

const Home = ({ setBookingStep, handleSelectProgram }) => {
    const [isDiagnosticOpen, setIsDiagnosticOpen] = React.useState(false);

    return (
        <>
            <Hero setBookingStep={setBookingStep} />
            <AuthorityBar />
            <ProcessSteps />
            <PainPoints />
            <Comparison
                setBookingStep={setBookingStep}
                openDiagnostic={() => setIsDiagnosticOpen(true)}
            />
            <MethodTeaser />
            <Logistics />
            <Locations />
            <Testimonials />
            <ParentCommitment />
            <Faq />
            <div id="contact-section">
                <ContactSection handleSelectProgram={handleSelectProgram} />
            </div>

            {/* Diagnostic Modal */}
            {isDiagnosticOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="relative w-full max-w-lg">
                        <DiagnosticWidget
                            handleSelectProgram={(key) => {
                                setIsDiagnosticOpen(false);
                                handleSelectProgram(key);
                            }}
                            onClose={() => setIsDiagnosticOpen(false)}
                            isModal={true}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
