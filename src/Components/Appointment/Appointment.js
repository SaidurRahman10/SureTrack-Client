import React, { useState } from 'react';

import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';




const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  
    return (
      <div className='mx-10 '>

        <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <AvailableAppointments selectedDate={selectedDate} />
      </div>
        
            
      
    );
};

export default Appointment;