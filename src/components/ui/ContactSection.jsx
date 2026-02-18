import React from 'react';
import DiagnosticWidget from './DiagnosticWidget';

const ContactSection = ({ handleSelectProgram }) => {
    return (
        <section className="max-w-5xl mx-auto px-4 mt-24 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Diagnostic Widget */}
                <DiagnosticWidget handleSelectProgram={handleSelectProgram} />

                {/* Contact Widget */}
                <div className="bg-[#1B263B] rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center text-center">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-6">Une question spécifique ?</h2>
                        <p className="text-white/70 mb-8 leading-relaxed">
                            Vous préférez échanger de vive voix ou par écrit avant de vous lancer ? Nous sommes là pour vous guider.
                        </p>

                        <a
                            href="mailto:thrive.psypositive@gmail.com"
                            className="inline-flex items-center gap-3 bg-white text-[#1B263B] px-8 py-4 rounded-full font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <span>thrive.psypositive@gmail.com</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
