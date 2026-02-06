import React from 'react';

const SectionHeader = ({ title, subtitle, light = false }) => (
    <div className="mb-12 text-center">
        <h2 className={`text-3xl md:text-4xl font-serif mb-4 ${light ? 'text-white' : 'text-[#1B263B]'}`}>
            {title}
        </h2>
        <div className={`h-1 w-20 mx-auto mb-6 ${light ? 'bg-white/30' : 'bg-[#C5A059]'}`}></div>
        {subtitle && <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-white/80' : 'text-gray-600'}`}>{subtitle}</p>}
    </div>
);

export default SectionHeader;
