import React, { useState } from 'react';
import { ArrowRight, Info, CheckCircle2, AlertCircle, Trophy, Heart, Zap, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PROGRAMS_DATA } from '../../data/programs';

const DiagnosticWidget = ({ handleSelectProgram, onClose, isModal = false }) => {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({
        score: null,
        obstacle: null,
        goal: null
    });
    const [showInfo, setShowInfo] = useState(false);

    const obstacles = [
        { id: 'confiance', label: t('diagnostic.obs_1'), icon: <Heart size={18} /> },
        { id: 'stress', label: t('diagnostic.obs_2'), icon: <AlertCircle size={18} /> },
        { id: 'focus', label: t('diagnostic.obs_3'), icon: <Brain size={18} /> },
        { id: 'colere', label: t('diagnostic.obs_4'), icon: <Zap size={18} /> },
    ];

    const goals = [
        { id: 'plaisir', label: t('diagnostic.goal_1'), icon: <Heart size={18} /> },
        { id: 'performance', label: t('diagnostic.goal_2'), icon: <Trophy size={18} /> },
        { id: 'serenite', label: t('diagnostic.goal_3'), icon: <Brain size={18} /> },
    ];

    const handleNext = (key, value) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
        if (step < 3) {
            setStep(step + 1);
        } else {
            setStep('result');
        }
    };

    const resetDiagnostic = () => {
        setAnswers({ score: null, obstacle: null, goal: null });
        setStep(1);
        setShowInfo(false);
    };

    const getRecommendation = () => {
        const { score, goal } = answers;

        // Base recommendation on score
        let recommendation = { key: 'Essentiel', color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-100', text: t('diagnostic.rec_ess_title') };

        if (score <= 4) {
            recommendation = { key: 'Performance', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100', text: t('diagnostic.rec_perf_title') };
        } else if (score <= 7) {
            recommendation = { key: 'Avance', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100', text: t('diagnostic.rec_adv_title') };
        }

        // Adjust based on Goal (e.g. High Performance goal might bump up the need even if score is okay-ish)
        if (goal === 'performance' && recommendation.key === 'Essentiel') {
            recommendation = { key: 'Avance', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100', text: t('diagnostic.rec_adv_perf_title') };
        }

        return recommendation;
    };

    const rec = step === 'result' ? getRecommendation() : null;
    const program = rec ? PROGRAMS_DATA[rec.key] : null;

    return (
        <div className={`bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 relative overflow-hidden flex flex-col justify-center min-h-[500px] w-full max-w-lg mx-auto ${isModal ? 'animate-in zoom-in duration-300' : ''}`}>

            {onClose && (
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 z-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            )}

            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8F9779]/10 rounded-full blur-2xl -mr-8 -mt-8"></div>

            <div className="relative z-10 h-full flex flex-col">

                {/* Header Progress */}
                {step !== 'result' && (
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('diagnostic.q_progress', { current: step })}</span>
                        <div className="flex space-x-1">
                            <div className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-[#1B263B]' : 'bg-gray-200'} `}></div>
                            <div className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-[#1B263B]' : 'bg-gray-200'} `}></div>
                            <div className={`w-2 h-2 rounded-full ${step >= 3 ? 'bg-[#1B263B]' : 'bg-gray-200'} `}></div>
                        </div>
                    </div>
                )}

                {/* STEP 1: WELLBEING */}
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right duration-300">
                        <h2 className="text-2xl font-serif font-bold text-[#1B263B] mb-2">{t('diagnostic.q1_title')}</h2>
                        <p className="text-gray-500 text-sm mb-8">{t('diagnostic.q1_desc')}</p>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center px-1">
                                <span className="text-xs font-bold text-gray-400 uppercase">{t('diagnostic.q1_lbl_sad')}</span>
                                <button onClick={() => setShowInfo(!showInfo)} className="text-[#8F9779] hover:text-[#1B263B] transition-colors"><Info size={16} /></button>
                                <span className="text-xs font-bold text-gray-400 uppercase">{t('diagnostic.q1_lbl_happy')}</span>
                            </div>

                            {showInfo && (
                                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                                    <p className="mb-1"><strong>1-4 :</strong> {t('diagnostic.q1_info_1')}</p>
                                    <p className="mb-1"><strong>5-7 :</strong> {t('diagnostic.q1_info_2')}</p>
                                    <p><strong>8-10 :</strong> {t('diagnostic.q1_info_3')}</p>
                                </div>
                            )}

                            <div className="grid grid-cols-5 gap-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => handleNext('score', num)}
                                        className="h-12 rounded-xl border border-gray-100 hover:border-[#8F9779] hover:bg-[#8F9779] hover:text-white font-bold text-gray-400 transition-all duration-300"
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 2: OBSTACLE */}
                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right duration-300">
                        <h2 className="text-2xl font-serif font-bold text-[#1B263B] mb-2">{t('diagnostic.q2_title')}</h2>
                        <p className="text-gray-500 text-sm mb-8">{t('diagnostic.q2_desc')}</p>

                        <div className="grid grid-cols-2 gap-4">
                            {obstacles.map((obs) => (
                                <button
                                    key={obs.id}
                                    onClick={() => handleNext('obstacle', obs.id)}
                                    className="p-4 rounded-xl border border-gray-100 hover:border-[#8F9779] hover:bg-[#8F9779] hover:text-white transition-all duration-300 text-left group"
                                >
                                    <span className="text-gray-400 group-hover:text-white mb-2 block transition-colors">{obs.icon}</span>
                                    <span className="font-bold text-[#1B263B] group-hover:text-white text-sm block transition-colors">{obs.label}</span>
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setStep(step - 1)} className="mt-8 text-xs text-gray-400 hover:text-[#1B263B] underline">{t('diagnostic.btn_back')}</button>
                    </div>
                )}

                {/* STEP 3: GOAL */}
                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right duration-300">
                        <h2 className="text-2xl font-serif font-bold text-[#1B263B] mb-2">{t('diagnostic.q3_title')}</h2>
                        <p className="text-gray-500 text-sm mb-8">{t('diagnostic.q3_desc')}</p>

                        <div className="space-y-3">
                            {goals.map((g) => (
                                <button
                                    key={g.id}
                                    onClick={() => handleNext('goal', g.id)}
                                    className="w-full p-4 rounded-xl border border-gray-100 hover:border-[#8F9779] hover:bg-[#8F9779] hover:text-white transition-all duration-300 flex items-center group"
                                >
                                    <span className="text-gray-400 group-hover:text-white mr-4 transition-colors">{g.icon}</span>
                                    <span className="font-bold text-[#1B263B] group-hover:text-white transition-colors">{g.label}</span>
                                    <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setStep(step - 1)} className="mt-8 text-xs text-gray-400 hover:text-[#1B263B] underline">{t('diagnostic.btn_back')}</button>
                    </div>
                )}

                {step === 'result' && (
                    <div className="animate-in fade-in slide-in-from-right duration-500 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <span className="text-xs bg-[#1B263B] text-white px-2 py-1 rounded">{t('diagnostic.res_score', { score: answers.score })}</span>
                                {answers.goal === 'performance' && <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">{t('diagnostic.res_obj_perf')}</span>}
                            </div>
                            <button onClick={resetDiagnostic} className="text-xs text-gray-400 hover:text-[#1B263B] underline">{t('diagnostic.btn_restart')}</button>
                        </div>

                        <div className={`p-4 rounded-xl border ${rec.border} ${rec.bg} mb-4`}>
                            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${rec.color}`}>{rec.text}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {rec.key === 'Performance' && t('diagnostic.rec_perf_desc')}
                                {rec.key === 'Avance' && t('diagnostic.rec_adv_desc')}
                                {rec.key === 'Essentiel' && t('diagnostic.rec_ess_desc')}
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">{t('diagnostic.rec_label')}</p>
                            <h3 className="text-xl font-bold text-[#1B263B]">{t(`programs.${rec.key}.label`)}</h3>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3 mb-6 space-y-2 flex-grow">
                            {program.features.slice(0, 3).map((_, i) => (
                                <div key={i} className="flex items-start text-xs text-gray-600">
                                    <CheckCircle2 size={14} className="text-[#8F9779] mr-2 shrink-0 mt-0.5" />
                                    {t(`programs.${rec.key}.f${i}`)}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => handleSelectProgram(rec.key)}
                            className="w-full py-4 bg-[#1B263B] text-white rounded-xl font-bold hover:bg-[#253550] transition-all flex items-center justify-center shadow-lg hover:translate-y-[-2px]"
                        >
                            {t('diagnostic.btn_choose')} <ArrowRight size={16} className="ml-2" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiagnosticWidget;
