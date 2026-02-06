import React from 'react';
import { ChevronLeft, Calendar, Sparkles, Repeat, ArrowRight, Info } from 'lucide-react';

const BookingForm = ({
    bookingData,
    setBookingData,
    setBookingStep,
    selectedDate,
    selectedTime,
    isRecurring,
    onSubmit,
    submitLabel
}) => {
    const [showWellbeingInfo, setShowWellbeingInfo] = React.useState(false);
    return (
        <div className="animate-in slide-in-from-right duration-500">
            {selectedDate && (
                <button onClick={() => setBookingStep('calendar')} className="flex items-center text-gray-400 hover:text-[#1B263B] mb-6 transition-colors">
                    <ChevronLeft size={18} className="mr-1" /> Retour au calendrier
                </button>
            )}

            {selectedDate && (
                <div className="mb-8 p-4 bg-[#F8F9FA] rounded-2xl flex items-center justify-between border border-gray-100">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#8F9779]/10 flex items-center justify-center text-[#8F9779] mr-4"><Calendar size={20} /></div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase">Créneau sélectionné</p>
                            <p className="font-bold text-[#1B263B]">{selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {selectedTime}</p>
                            {isRecurring && (
                                <p className="text-xs text-[#8F9779] font-bold flex items-center mt-1">
                                    <Repeat size={12} className="mr-1" /> Récurrent (Hebdomadaire)
                                </p>
                            )}
                        </div>
                    </div>
                    <Sparkles className="text-[#C5A059] opacity-50" />
                </div>
            )}

            <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-[#1B263B]">Parlez-nous de votre enfant</h2>
                <p className="text-gray-500 italic mt-2">Ces informations permettent au mentor de préparer la séance.</p>
            </div>

            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">Prénom de l'enfant</label>
                        <input type="text" value={bookingData.name} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none" placeholder="Ex: Thomas" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">Âge</label>
                        <input type="number" value={bookingData.age} onChange={(e) => setBookingData({ ...bookingData, age: e.target.value })} className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none" placeholder="Ex: 8" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="block text-sm font-bold text-[#1B263B] uppercase tracking-tight text-[10px] mb-0">Niveau de bien-être actuel (1-10)</label>
                        <button
                            type="button"
                            onClick={() => setShowWellbeingInfo(!showWellbeingInfo)}
                            className="text-[#8F9779] hover:text-[#1B263B] transition-colors flex items-center text-xs font-semibold"
                        >
                            <Info size={14} className="mr-1" />
                            Comprendre l'échelle
                        </button>
                    </div>

                    {showWellbeingInfo && (
                        <div className="mb-4 p-4 bg-[#F8F9FA] rounded-xl border border-gray-100 text-sm text-gray-600 animate-in fade-in zoom-in-95 duration-200">
                            <div className="grid grid-cols-2 gap-4 mb-3 pb-3 border-b border-gray-100">
                                <div>
                                    <span className="font-bold text-[#1B263B] block mb-1">1 = Extrêmement triste</span>
                                    <span className="text-xs">Renfermé sur soi, détresse visible</span>
                                </div>
                                <div className="text-right">
                                    <span className="font-bold text-[#1B263B] block mb-1">10 = Très joyeux</span>
                                    <span className="text-xs">Épanoui, confiant, ouvert</span>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-[#1B263B] mb-2 text-xs uppercase">Critères d'aide à la décision :</p>
                                <ul className="space-y-1 list-disc pl-4 text-xs">
                                    <li><strong className="text-[#1B263B]">Notes basses (1-4) :</strong> L'enfant ne parle pas, pleure souvent, a peur de quitter ses parents, s'isole...</li>
                                    <li><strong className="text-[#1B263B]">Notes moyennes (5-7) :</strong> Quelques moments de joie mais fragile, hésitant dans les interactions.</li>
                                    <li><strong className="text-[#1B263B]">Notes hautes (8-10) :</strong> Va vers les autres, sourit, gère bien la séparation, un petit problème précis à résoudre.</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between gap-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <button
                                type="button"
                                key={n}
                                onClick={() => setBookingData({ ...bookingData, wellbeing: n })}
                                className={`flex-1 py-3 border rounded-lg font-bold transition-all ${bookingData.wellbeing === n ? 'bg-[#8F9779] text-white border-[#8F9779]' : 'border-gray-100 hover:border-[#8F9779]/50'}`}
                            >
                                {n}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">Principal défi ou trait de caractère</label>
                    <select
                        value={bookingData.childTrait || ''}
                        onChange={(e) => setBookingData({ ...bookingData, childTrait: e.target.value })}
                        className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none appearance-none"
                    >
                        <option value="" disabled>Sélectionnez une option...</option>
                        <option value="Peur d'agir">Peur d'agir / Hésitation</option>
                        <option value="Ne parle pas aux autres">Ne parle pas aux autres / Timidité</option>
                        <option value="Est seul(e) à l'école">Est seul(e) à l'école / Isolement</option>
                        <option value="Manque de confiance">Manque de confiance en soi</option>
                        <option value="Difficultés de concentration">Difficultés de concentration</option>
                        <option value="Gestion des émotions">Difficulté à gérer ses émotions</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">Troubles diagnostiqués ou suspectés (Optionnel)</label>
                    <select
                        value={bookingData.childDisorder || ''}
                        onChange={(e) => setBookingData({ ...bookingData, childDisorder: e.target.value })}
                        className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none appearance-none"
                    >
                        <option value="" disabled>Sélectionnez une option...</option>
                        <option value="Aucun">Aucun</option>
                        <option value="TDAH">TDAH (Déficit de l'Attention)</option>
                        <option value="TSA">TSA (Spectre de l'Autisme)</option>
                        <option value="Dyslexie">Dyslexie</option>
                        <option value="Dysorthographie">Dysorthographie</option>
                        <option value="Dyscalculie">Dyscalculie</option>
                        <option value="Dysphasie">Dysphasie</option>
                        <option value="Dyspraxie">Dyspraxie</option>
                        <option value="Anxiété">Trouble de l'Anxiété</option>
                        <option value="TOP">Trouble de l'Opposition (TOP)</option>
                        <option value="HPI">Haut Potentiel Intellectuel (HPI)</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#1B263B] mb-2 uppercase tracking-tight text-[10px]">Description libre (Optionnel)</label>
                    <textarea
                        value={bookingData.childNotes || ''}
                        onChange={(e) => setBookingData({ ...bookingData, childNotes: e.target.value })}
                        className="w-full p-4 border border-gray-100 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#8F9779] outline-none min-h-[100px]"
                        placeholder="Parlez-nous un peu plus de votre enfant, de ses besoins spécifiques ou de ce que vous aimeriez travailler."
                    />
                </div>

                <button
                    type="button"
                    onClick={() => onSubmit ? onSubmit() : setBookingStep('payment')}
                    disabled={!bookingData.name || !bookingData.age}
                    className="w-full py-5 bg-[#1B263B] text-white font-bold rounded-2xl shadow-xl hover:bg-[#253550] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {submitLabel || (
                        <>Aller au paiement <ArrowRight className="ml-2" /></>
                    )}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
