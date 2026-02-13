import { useState } from 'react';
import { PROGRAMS_DATA } from '../data/programs';

const useBooking = (setCurrentPage) => {
    const [bookingStep, setBookingStep] = useState('calendar'); // 'calendar' | 'form' | 'payment' | 'success'
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isRecurring, setIsRecurring] = useState(false);
    const [bookingData, setBookingData] = useState({
        program: "Non spécifié",
        wellbeing: 5,
        confidence: "Moyenne (Hésitation)",
        objective: "Plaisir & Bien-être",
        name: "",
        age: "",
        sport: null
    });

    const handleSelectProgram = (programName) => {
        setBookingData({ ...bookingData, program: programName });
        setBookingStep('sport');
        setIsRecurring(false); // Reset recurrence
        setSelectedDate(null);
        setSelectedTime(null);
        setCurrentPage('booking');
    };

    return {
        bookingStep,
        setBookingStep,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        isRecurring,
        setIsRecurring,
        bookingData,
        setBookingData,
        handleSelectProgram
    };
};

export default useBooking;
