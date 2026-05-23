import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const ProcessSteps = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const arrowGroupRef = useRef(null);
    const rafId = useRef(null);

    const steps = [
        {
            number: t('home.process.step1_n', { defaultValue: '01' }),
            title: t('home.process.step1_t'),
            desc: t('home.process.step1_d')
        },
        {
            number: t('home.process.step2_n', { defaultValue: '02' }),
            title: t('home.process.step2_t'),
            desc: t('home.process.step2_d')
        },
        {
            number: t('home.process.step3_n', { defaultValue: '03' }),
            title: t('home.process.step3_t'),
            desc: t('home.process.step3_d')
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            
            rafId.current = requestAnimationFrame(() => {
                if (!sectionRef.current || !arrowGroupRef.current) return;
                
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const isDesktop = window.innerWidth >= 768;
                
                let progress = 0;
                
                if (isDesktop) {
                    // The section has height 250vh.
                    // It becomes sticky when rect.top reaches 0.
                    // We have 150vh of scroll distance to fill the arrow (250vh - 100vh).
                    const scrollableDistance = rect.height - windowHeight;
                    progress = -rect.top / scrollableDistance;
                } else {
                    // Normal scroll behavior (mobile)
                    const start = windowHeight * 0.75;
                    const end = -rect.height + windowHeight * 0.25;
                    progress = (start - rect.top) / (start - end);
                }
                
                // Clamp progress between 0 and 1
                progress = Math.max(0, Math.min(1, progress));
                
                // Apply directly to the DOM for 60fps fluidity (bypassing React state)
                arrowGroupRef.current.style.clipPath = `inset(0 ${100 - progress * 100}% 0 0)`;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial position
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-white relative md:h-[250vh]">
            <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col justify-center py-20 md:py-0 overflow-hidden relative">
                {/* Background Animated Arrow (Exponential curve) */}
                <div className="absolute inset-0 z-0 flex justify-center items-end md:items-center pointer-events-none overflow-hidden px-4 md:px-0">
                    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-6xl md:h-auto h-full" preserveAspectRatio="xMinYMax meet">
                        <defs>
                            <linearGradient id="arrowGradient" x1="0" y1="400" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#8F9779" stopOpacity="0.05" />
                                <stop offset="40%" stopColor="#8F9779" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#8F9779" stopOpacity="0.9" />
                            </linearGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="8" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        
                        {/* Gray track (Silhouette) */}
                        <path d="M 50 390 C 300 380, 500 270, 650 110 L 600 60 L 800 0 L 740 200 L 690 150 C 550 320, 300 395, 50 390 Z" fill="#F3F4F6" />
                        
                        {/* Green filling arrow (Faceted Group) */}
                        {/* Hardware acceleration enabled with will-change */}
                        <g ref={arrowGroupRef} filter="url(#glow)" style={{ clipPath: 'inset(0 100% 0 0)', willChange: 'clip-path' }}>
                            
                            {/* Plane 2: Main Shaft (Base Gradient) */}
                            <path d="M 50 390 C 320 385, 520 280, 670 130 L 690 150 C 550 320, 300 395, 50 390 Z" fill="url(#arrowGradient)" />
                            
                            {/* Plane 1: Top Shaft (Lighter Face) */}
                            <path d="M 50 390 C 300 380, 500 270, 650 110 L 670 130 C 520 280, 320 385, 50 390 Z" fill="url(#arrowGradient)" />
                            <path d="M 50 390 C 300 380, 500 270, 650 110 L 670 130 C 520 280, 320 385, 50 390 Z" fill="white" fillOpacity="0.2" />
                            
                            {/* Plane 4: Right Arrowhead (Darker Face) */}
                            <path d="M 670 130 L 800 0 L 740 200 L 690 150 Z" fill="url(#arrowGradient)" />
                            <path d="M 670 130 L 800 0 L 740 200 L 690 150 Z" fill="black" fillOpacity="0.1" />
                            
                            {/* Plane 3: Left Arrowhead (Lighter Face) */}
                            <path d="M 670 130 L 650 110 L 600 60 L 800 0 Z" fill="url(#arrowGradient)" />
                            <path d="M 670 130 L 650 110 L 600 60 L 800 0 Z" fill="white" fillOpacity="0.15" />
                            
                        </g>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif text-[#1B263B] mb-4">{t('home.process.title')}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {t('home.process.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative p-8 rounded-[2rem] bg-gray-50/90 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="text-5xl font-serif text-[#E5E7EB] absolute top-4 right-4 font-bold">
                                    {step.number}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-[#1B263B] mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
