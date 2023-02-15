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
                <div className='bg-gradient-to-br from-slate-500 via-emerald-400 to-red-500 hover:text-black text-white rounded-2xl font-bold hover:p-5 transform duration-300'>
                {/* bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500 */}
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