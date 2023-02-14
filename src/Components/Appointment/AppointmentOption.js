import React from "react";



const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots , img } = appointmentOption;
  return (
    <div >
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={img}
            alt="Parts"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="text-white font-semibold text-base">{slots.length > 0 ? slots[0] : 'Try Other Day'}</p>
          <p className="text-sm">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
          <div className="card-actions justify-start">
            <button className=" items-center hover:px-10 hover:py-3 duration-300 transform bg-gradient-to-r from-cyan-400 via-teal-500 to-stone-200 hover:bg-transparent hover:bg-gradient-to-l text-white px-3 rounded-md py-2 font-bold text-xs hidden md:block"><span className="flex gap-2">Book Appointment </span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
