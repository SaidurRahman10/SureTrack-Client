import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [selectedService, setSelectedService] = useState(null)
    
    const {data:appointmentOptions = [], isLoading} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/appointmentOptions')
            const data = await res.json();
            return data;
        }
     
       
    })

    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // },[])
    return (
        <div className='pb-10'>
            <p className='text-center mt-16  mb-5 font-extrabold '>Available Appointments on {format(selectedDate , 'PP')}</p>

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