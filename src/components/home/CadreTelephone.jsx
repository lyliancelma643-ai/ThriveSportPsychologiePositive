import React from 'react';

// Cadre de téléphone arrondi autour d'une capture de l'app.
//  src, alt   capture (rapport 560 × 1218)
//  priorite   true → image du hero (pas de lazy, fetchPriority high)
//  className  largeur et position (ex. « w-44 »)
const CadreTelephone = ({ src, alt, priorite = false, className = '' }) => (
    <div
        className={`${className.includes('absolute') ? '' : 'relative'} rounded-[2.25rem] bg-[#1B263B] p-[7px] shadow-2xl ring-1 ring-black/10 ${className}`}
    >
        <img
            src={src}
            alt={alt}
            width="560"
            height="1218"
            loading={priorite ? undefined : 'lazy'}
            fetchPriority={priorite ? 'high' : undefined}
            decoding="async"
            className="block w-full h-auto rounded-[1.8rem] bg-white"
        />
    </div>
);

export default CadreTelephone;
