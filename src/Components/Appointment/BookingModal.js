import { format } from 'date-fns';
import React from 'react';
import carArt from '../../assets/carArt.png'

const BookingModal = ({selectedService, setSelectedService , selectedDate}) => {
    const {name: serviceName, slots} = selectedService; // selected service is selected appointment details...
    const date = format(selectedDate, 'PP')

    const handelBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking = {
           selectedDate:date,
           serviceName,
           name,
           email,
           slot,
           phone

        }
        console.log(booking);
        setSelectedService(null)
    }
   
    return (
        <div>
         
<input type="checkbox" id="booking-modal" className="modal-toggle" />


<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <img className='w-auto h-28 mx-auto' src={carArt} alt="" />
    <h3 className="text-lg font-bold text-center uppercase">{serviceName}</h3>


    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-4 mt-4'>
    <input type="text" value={date} placeholder="Type here" className="input input-bordered w-full " disabled />
    <select name='slot' className="select select-bordered w-full ">
  { slots &&
    slots.map((slot, i) => 
  <option key={i} value={slot}>{slot}</option>)
  }
</select>
    <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
    <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full " />
    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
    <input className='w-full  items-center  hover:py-3 duration-300 transform bg-gradient-to-r from-sky-300 via-teal-600 to-stone-400 hover:bg-transparent hover:bg-gradient-to-l text-white  rounded-md py-2 font-bold text-xs ' type="submit" value="Submit" />
    </form>

  </div>
</div>
        </div>
    );
};

export default BookingModal;