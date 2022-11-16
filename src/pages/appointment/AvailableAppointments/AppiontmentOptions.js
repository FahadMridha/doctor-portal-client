import React from "react";

const AppiontmentOptions = ({ appiontmentOption, setTretment }) => {
  const { name, slots } = appiontmentOption;
  return (
    <div className="card text-center shadow-xl">
      <div className="card-body ">
        <h2 className="text-2xl text-secondary font-bold text-center ">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "tray another day"}</p>
        <p>
          {slots.length}
          {slots.length > 1 ? "spaces" : "space"} avilable
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTretment(appiontmentOption)}
            htmlFor="booking-modal"
            className="btn text-white btn-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppiontmentOptions;
