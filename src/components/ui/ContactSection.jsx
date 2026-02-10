import React from 'react';

const ContactSection = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 mt-24 text-center pb-24">
            <div className="bg-[#1B263B] rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
                {/* Decorative blurred circle */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Une question ? Un projet spécifique ?</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto relative z-10">
                    Nous sommes à l'écoute pour discuter des besoins de votre enfant ou pour toute demande d'information.
                </p>

                <a href="mailto:thrive.psypositive@gmail.com" className="inline-flex items-center gap-3 bg-white text-[#1B263B] px-8 py-4 rounded-full font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg relative z-10">
                    <span>thrive.psypositive@gmail.com</span>
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
