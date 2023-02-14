import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    console.log(appointmentOptions);
    return (
        <div>
            <p className='text-center mt-8 font-bold mb-5'>Available Appointments on {format(selectedDate , 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                appointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    />)
            }
            </div>
        </div>
    );
};

export default AvailableAppointments;