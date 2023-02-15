import React from "react";

const AppointmentOption = ({ appointmentOption , setSelectedService }) => {
  const { name, slots, img } = appointmentOption;
  // console.log(appointmentOption);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl image-full ">
        <figure>
          <img src={img} alt="Parts" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold uppercase">{name}</h2>
          <p className="text-white font-semibold text-base">
            {slots.length > 0 ? slots[0] : "Try Other Day"}
          </p>
          <p className="text-sm">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div className="card-actions justify-start">
            <label
            disabled={slots.length === 0}
              htmlFor="booking-modal"
              onClick={()=> setSelectedService(appointmentOption)}
            
              className="items-center hover:px-10 hover:py-3 duration-300 transform bg-gradient-to-r from-cyan-400 via-teal-500 to-stone-200 hover:bg-transparent hover:bg-gradient-to-l text-white px-3 rounded-md py-2 font-bold text-xs "
            >
              Book Appointment{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
