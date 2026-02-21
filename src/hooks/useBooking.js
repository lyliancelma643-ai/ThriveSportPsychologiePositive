import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROGRAMS_DATA } from '../data/programs';

const useBooking = () => {
    const navigate = useNavigate();
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
        setBookingData(prev => {
            const newData = { ...prev, program: programName };
            // If sport is already selected (e.g. coming from Sport page), go to Cal.com
            // Otherwise, go to Sport selection
            if (newData.sport) {
                setBookingStep('cal');
            } else {
                setBookingStep('sport');
            }
            return newData;
        });

        setIsRecurring(false); // Reset recurrence
        setSelectedDate(null);
        setSelectedTime(null);
        navigate('/booking');
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
