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

import Locations from '../components/home/Locations';
import ProcessSteps from '../components/home/ProcessSteps';
import ParentCommitment from '../components/home/ParentCommitment';
import Logistics from '../components/home/Logistics';

const Home = ({ setCurrentPage, setBookingStep, handleSelectProgram }) => {
    return (
        <>
            <Hero setCurrentPage={setCurrentPage} setBookingStep={setBookingStep} />
            <AuthorityBar />
            <ProcessSteps />
            <PainPoints />
            <Comparison />
            <MethodTeaser setCurrentPage={setCurrentPage} />
            <Logistics />
            <Locations />
            <Testimonials />
            <ParentCommitment />
            <Faq />
            <div id="contact-section">
                <ContactSection handleSelectProgram={handleSelectProgram} />
            </div>
        </>
    );
};

export default Home;
