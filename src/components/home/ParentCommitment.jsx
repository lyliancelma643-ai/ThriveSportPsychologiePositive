import React from 'react';
import { ShieldCheck, GraduationCap, HeartHandshake } from 'lucide-react';

const ParentCommitment = () => {
    return (
        <section className="py-16 bg-[#F8F9FA] border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-[#1B263B] mb-4">Notre Engagement Parents</h2>
                    <p className="text-gray-600">Parce que votre tranquillité d'esprit est aussi importante que sa performance.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="font-bold text-[#1B263B] mb-2">Sécurité & Éthique</h3>
                        <p className="text-sm text-gray-500">Tous nos entraîneurs sont vérifiés et formés à l'approche non-violente. Zéro tolérance pour la pression toxique.</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                            <HeartHandshake size={24} />
                        </div>
                        <h3 className="font-bold text-[#1B263B] mb-2">Anxiété de Performance</h3>
                        <p className="text-sm text-gray-500">Nous transformons le stress du match en énergie positive. Votre enfant apprend à gérer la pression, pas à la subir.</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="font-bold text-[#1B263B] mb-2">Bénéfices Scolaires</h3>
                        <p className="text-sm text-gray-500">La discipline et la confiance acquises sur le terrain se reflètent directement dans ses résultats scolaires.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParentCommitment;
