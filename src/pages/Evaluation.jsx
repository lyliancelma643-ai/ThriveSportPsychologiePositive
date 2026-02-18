import React from 'react';
import DiagnosticWidget from '../components/ui/DiagnosticWidget';
import SectionHeader from '../components/ui/SectionHeader';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

const Evaluation = ({ handleSelectProgram }) => {
    React.useEffect(() => {
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "30min", { origin: "https://app.cal.com" });
        Cal.ns["30min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    }, []);

    return (
        <div className="pt-24 pb-24 bg-[#F8F9FA] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    title="Votre Séance d'Évaluation Offerte"
                    subtitle="La première étape pour transformer le potentiel de votre enfant. Sans engagement."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

                    {/* Left Column: Diagnostic Tool */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#1B263B] mb-2 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-[#1B263B] text-white flex items-center justify-center mr-3 text-sm">1</span>
                                Le Bilan Rapide
                            </h3>
                            <p className="text-gray-600 text-sm">Répondez à ces 3 questions pour nous aider à préparer la séance.</p>
                        </div>
                        <DiagnosticWidget handleSelectProgram={handleSelectProgram} />
                    </div>

                    {/* Right Column: Contact & Next Steps */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-[#1B263B] mb-2 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-[#1B263B] text-white flex items-center justify-center mr-3 text-sm">2</span>
                                Planifier la Rencontre
                            </h3>
                            <p className="text-gray-600 text-sm mb-6">Laissez vos coordonnées pour qu'un mentor vous contacte sous 24h.</p>

                            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Votre Nom</label>
                                        <input type="text" className="w-full p-3 bg-gray-50 rounded-xl border border-gray-100 focus:ring-2 focus:ring-[#8F9779] outline-none" placeholder="Ex: Jean Dupont" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Email</label>
                                        <input type="email" className="w-full p-3 bg-gray-50 rounded-xl border border-gray-100 focus:ring-2 focus:ring-[#8F9779] outline-none" placeholder="jean@exemple.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Téléphone</label>
                                        <input type="tel" className="w-full p-3 bg-gray-50 rounded-xl border border-gray-100 focus:ring-2 focus:ring-[#8F9779] outline-none" placeholder="514 123 4567" />
                                    </div>
                                    <button
                                        className="w-full py-4 bg-[#8F9779] text-white font-bold rounded-xl hover:bg-[#7A8266] transition-all flex items-center justify-center shadow-lg mt-4"
                                        data-cal-link="thrive-psychologie-positive/30min"
                                        data-cal-namespace="30min"
                                        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                    >
                                        Valider ma demande <ArrowRight className="ml-2" size={18} />
                                    </button>
                                </form>
                                <p className="text-xs text-center text-gray-400 mt-4">Vos données sont confidentielles et ne seront jamais partagées.</p>
                            </div>
                        </div>

                        {/* Contact Direct */}
                        <div className="bg-[#1B263B] text-white p-8 rounded-[2rem] shadow-lg">
                            <h4 className="font-serif font-bold text-xl mb-4">Contact Direct</h4>
                            <div className="space-y-4 text-sm">
                                <a href="mailto:thrive.psypositive@gmail.com" className="flex items-center hover:text-[#C5A059] transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4"><Mail size={18} /></div>
                                    thrive.psypositive@gmail.com
                                </a>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4"><Phone size={18} /></div>
                                    (263) 362-2030 (Lundi-Samedi 9h-18h)
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Evaluation;
