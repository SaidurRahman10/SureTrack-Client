import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import SureTrack from '../../assets/banner/SureTrack.png'



const AppointmentBanner = ({selectedDate , setSelectedDate}) => {
   
    return (
        <div 
        className=''>
    
             <div className='text-center '>
<br />
  <h1 className='text-3xl font-bold '>Car Servicing Appointment Form</h1>
  <h5 className='text-xl font-semibold text-slate-500 mt-3'>Schedule Your Visit</h5>
             </div>
  
        <div className='mt-8 md:flex md:justify-around '>
            <div className='flex justify-center'>
                <div>

       <DayPicker
       mode='single'
        selected={selectedDate}
        onSelect={setSelectedDate}

       />
  
            </div>
                </div>

                <img className='w-auto h-56 mt-12 hidden md:block' src={SureTrack} alt="" />
        </div>


  
          </div>
               
    
        
    );
};

export default AppointmentBanner;