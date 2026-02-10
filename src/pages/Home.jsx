import React from 'react';
import Hero from '../components/home/Hero';
import AuthorityBar from '../components/home/AuthorityBar';
import PainPoints from '../components/home/PainPoints';
import Comparison from '../components/home/Comparison';
import MethodTeaser from '../components/home/MethodTeaser';
import Testimonials from '../components/home/Testimonials';
import Faq from '../components/home/Faq';
import Cta from '../components/home/Cta';

import Locations from '../components/home/Locations';

const Home = ({ setCurrentPage, setBookingStep }) => {
    return (
        <>
            <Hero setCurrentPage={setCurrentPage} setBookingStep={setBookingStep} />
            <AuthorityBar />
            <PainPoints />
            <Comparison />
            <MethodTeaser setCurrentPage={setCurrentPage} />
            <Locations />
            <Testimonials />
            <Faq />
            <Cta setCurrentPage={setCurrentPage} setBookingStep={setBookingStep} />
        </>
    );
};

export default Home;
