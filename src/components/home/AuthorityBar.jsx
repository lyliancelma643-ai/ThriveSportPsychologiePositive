import React from 'react';
import { Brain, Target, ShieldCheck } from 'lucide-react';

const AuthorityBar = () => {
    return (
        <div className="bg-[#1B263B] text-white py-6 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-70 text-sm font-medium uppercase tracking-widest text-center">
                    <div className="flex items-center"><Brain size={18} className="mr-2 text-[#C5A059]" /> Supervisé par l'UdeM</div>
                    <div className="hidden md:block h-1 w-1 bg-white rounded-full"></div>
                    <div className="flex items-center"><Target size={18} className="mr-2 text-[#C5A059]" /> Expertise Sportive & Académique</div>
                    <div className="hidden md:block h-1 w-1 bg-white rounded-full"></div>
                    <div className="flex items-center"><ShieldCheck size={18} className="mr-2 text-[#C5A059]" /> Approche Scientifique PERMA</div>
                </div>
            </div>
        </div>
    );
};

export default AuthorityBar;
