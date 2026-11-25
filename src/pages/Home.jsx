import React from 'react';
import SEO from '../components/seo/SEO';
import { useTranslation } from 'react-i18next';
import Hero from '../components/home/Hero';
import PainPoints from '../components/home/PainPoints';
import Comparison from '../components/home/Comparison';
import Faq from '../components/home/Faq';
import ContactSection from '../components/ui/ContactSection';
import ProcessSteps from '../components/home/ProcessSteps';

const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <SEO 
                title={t('seo.home.title')}
                description={t('seo.home.desc')}
                url="https://thrivesportpositive.com/"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "SportsActivityLocation",
                    "name": "THRIVE Sport Positive",
                    "image": "https://thrivesportpositive.com/favicon.png",
                    "description": t('seo.home.desc'),
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
                }}
            />
            <Hero />
            <ProcessSteps />
            <PainPoints />
            <Comparison />
            <Faq />
            <div id="contact-section">
                <ContactSection />
            </div>
        </>
    );
};

export default Home;
