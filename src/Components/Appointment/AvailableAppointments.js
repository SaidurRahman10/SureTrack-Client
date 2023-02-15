import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [selectedService, setSelectedService] = useState(null)
    

    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <div>
            <p className='text-center mt-8 font-bold mb-5'>Available Appointments on {format(selectedDate , 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                appointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    setSelectedService={setSelectedService}
                 
                    />)
            }
            </div>
            
       {  selectedService &&    <BookingModal
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            selectedDate={selectedDate}

          
            />}
        </div>
    );
};

export default AvailableAppointments;