import React from 'react';

const SectionHeader = ({ title, subtitle, light = false, isH1 = false }) => {
    const TitleTag = isH1 ? 'h1' : 'h2';

    return (
        <div className="mb-12 text-center">
            <TitleTag className={`text-3xl md:text-4xl font-serif mb-4 ${light ? 'text-white' : 'text-[#1B263B]'}`}>
                {title}
            </TitleTag>
            <div className={`h-1 w-20 mx-auto mb-6 ${light ? 'bg-white/30' : 'bg-[#C5A059]'}`}></div>
            {subtitle && <p className={`max-w-3xl mx-auto text-lg leading-relaxed ${light ? 'text-white/80' : 'text-gray-600'}`}>{subtitle}</p>}
        </div>
    );
};

export default SectionHeader;
