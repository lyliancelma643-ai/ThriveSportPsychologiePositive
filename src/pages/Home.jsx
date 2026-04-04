import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
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
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.home.title')}</title>
                <meta name="description" content={t('seo.home.desc')} />
                <link rel="canonical" href="https://thrivesportpositive.com/" />
                
                {/* Open Graph */}
                <meta property="og:title" content={t('seo.home.title')} />
                <meta property="og:description" content={t('seo.home.desc')} />
                <meta property="og:url" content="https://thrivesportpositive.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://thrivesportpositive.com/favicon.png" />
                
                {/* Structured Data (JSON-LD) */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "SportsActivityLocation",
                        "name": "Thrive Sport Positive",
                        "image": "https://thrivesportpositive.com/favicon.png",
                        "description": "${t('seo.home.desc')}",
                        "url": "https://thrivesportpositive.com/",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Montréal",
                            "addressRegion": "QC",
                            "addressCountry": "CA"
                        },
                        "serviceArea": {
                            "@type": "GeoCircle",
                            "geoMidpoint": {
                                "@type": "GeoCoordinates",
                                "latitude": 45.5017,
                                "longitude": -73.5673
                            },
                            "geoRadius": "50000"
                        },
                        "priceRange": "$$"
                    }
                    `}
                </script>
            </Helmet>
            <Hero 
                setBookingStep={setBookingStep} 
                openDiagnostic={() => setIsDiagnosticOpen(true)} 
            />
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
