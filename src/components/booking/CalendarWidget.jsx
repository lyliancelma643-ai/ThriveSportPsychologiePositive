import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, CheckCircle2, Repeat, AlertCircle } from 'lucide-react';

const CalendarWidget = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime, isRecurring, setIsRecurring, setBookingStep }) => {
    const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

    const getMonday = (d) => {
        d = new Date(d);
        const day = d.getDay(),
            diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.setDate(diff));
    }

    useEffect(() => {
        setCurrentWeekStart(getMonday(new Date()));
    }, []);

    const changeWeek = (direction) => {
        const next = new Date(currentWeekStart);
        next.setDate(next.getDate() + (direction * 7));
        // Empêcher d'aller dans le passé (semaine actuelle minimum)
        if (direction === -1 && next < getMonday(new Date())) return;
        setCurrentWeekStart(next);
    }

    const weekDays = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(currentWeekStart);
        d.setDate(d.getDate() + i);
        return d;
    });

    const timeSlots = ['09:00', '10:30', '13:00', '14:30', '16:00', '17:30'];

    const isSlotAvailable = (date, time) => {
        const str = date.toDateString() + time;
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        // Rareté artificielle : plus de créneaux pris le WE
        const threshold = isWeekend ? 0.3 : 0.55;
        const normalized = Math.abs(Math.sin(hash));
        return normalized < threshold;
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#1B263B] flex items-center">
                    <Calendar className="mr-2 text-[#8F9779]" size={24} />
                    Semaine du {currentWeekStart.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
                </h3>
                <div className="flex space-x-2">
                    <button onClick={() => changeWeek(-1)} className="p-2 rounded-full hover:bg-gray-100 border border-gray-200"><ChevronLeft size={20} /></button>
                    <button onClick={() => changeWeek(1)} className="p-2 rounded-full hover:bg-gray-100 border border-gray-200"><ChevronRight size={20} /></button>
                </div>
            </div>

            <div className="overflow-x-auto pb-4">
                <div className="min-w-[800px]">
                    <div className="grid grid-cols-8 gap-2 mb-2">
                        <div className="flex items-center justify-center text-xs font-bold text-gray-400 uppercase">Heure</div>
                        {weekDays.map((d, i) => (
                            <div key={i} className={`text-center p-2 rounded-t-lg ${d.toDateString() === new Date().toDateString() ? 'bg-[#8F9779]/10 text-[#8F9779]' : ''}`}>
                                <div className="text-[10px] uppercase font-bold text-gray-400">{d.toLocaleDateString('fr-FR', { weekday: 'short' })}</div>
                                <div className={`font-bold text-lg ${d.toDateString() === new Date().toDateString() ? 'text-[#8F9779]' : 'text-[#1B263B]'}`}>
                                    {d.getDate()}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                        {timeSlots.map((time) => (
                            <div key={time} className="grid grid-cols-8 gap-2 h-14">
                                <div className="flex items-center justify-center text-xs font-bold text-[#1B263B] bg-gray-50 rounded-lg">
                                    {time}
                                </div>
                                {weekDays.map((date, i) => {
                                    const available = isSlotAvailable(date, time);
                                    const isSelected = selectedDate?.toDateString() === date.toDateString() && selectedTime === time;
                                    return (
                                        <button
                                            key={i}
                                            disabled={!available}
                                            onClick={() => {
                                                setSelectedDate(date);
                                                setSelectedTime(time);
                                            }}
                                            className={`
                      relative rounded-lg flex flex-col items-center justify-center text-xs transition-all border
                      ${!available
                                                    ? 'bg-gray-100 border-transparent cursor-not-allowed opacity-60'
                                                    : isSelected
                                                        ? 'bg-[#1B263B] border-[#1B263B] text-white shadow-lg scale-105 z-10'
                                                        : 'bg-white border-gray-200 text-[#1B263B] hover:border-[#8F9779] hover:shadow-md'
                                                }
                    `}
                                        >
                                            {!available ? (
                                                <span className="text-[10px] font-bold text-gray-400 rotate-[-15deg]">COMPLET</span>
                                            ) : (
                                                <>
                                                    {isSelected ? <CheckCircle2 size={16} /> : <span className="font-bold">Libre</span>}
                                                </>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Option Récurrence */}
            {selectedDate && selectedTime && (
                <div
                    onClick={() => setIsRecurring(!isRecurring)}
                    className={`
          mt-2 p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center
          ${isRecurring ? 'border-[#8F9779] bg-[#8F9779]/5' : 'border-gray-100 bg-gray-50 hover:border-gray-200'}
        `}
                >
                    <div className={`
          w-6 h-6 rounded-md border-2 mr-3 flex items-center justify-center transition-colors shrink-0
          ${isRecurring ? 'bg-[#8F9779] border-[#8F9779]' : 'border-gray-300 bg-white'}
        `}>
                        {isRecurring && <CheckCircle2 size={16} className="text-white" />}
                    </div>
                    <div>
                        <p className="font-bold text-[#1B263B] text-sm flex items-center">
                            <Repeat size={16} className="mr-2 text-[#8F9779]" /> Réserver ce créneau pour toutes les semaines
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            Simplifiez votre logistique : la même séance sera réservée automatiquement chaque semaine. Modifiable ultérieurement.
                        </p>
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row justify-between items-center bg-[#FFF8E1] p-4 rounded-xl border border-[#FFE082] mt-4">
                <div className="flex items-center text-[#F57F17] mb-2 md:mb-0">
                    <AlertCircle size={18} className="mr-2" />
                    <span className="text-xs font-bold">Forte demande : Il ne reste que 3 places cette semaine.</span>
                </div>
                <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setBookingStep('form')}
                    className="w-full md:w-auto bg-[#1B263B] text-white px-8 py-3 rounded-xl font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center hover:bg-[#253550] transition-all shadow-lg"
                >
                    Réserver ce créneau <ChevronRight className="ml-2" size={18} />
                </button>
            </div>
        </div>
    );
};

export default CalendarWidget;
