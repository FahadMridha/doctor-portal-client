import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppiontmentOptions from "./AppiontmentOptions";
import BookingModal from "../bookingModal/BookingModal";
const AvailableAppointments = ({ selectedDate }) => {
  const [appiontmentOptions, setAppiontmentOptions] = useState([]);
  const [tretment, setTretment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppiontmentOptions(data));
  }, []);
  return (
    <section className="my-16">
      <p className="text-center font-bold text-primary">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gape-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appiontmentOptions.map((options) => (
          <AppiontmentOptions
            key={options._id}
            appiontmentOption={options}
            setTretment={setTretment}
          />
        ))}
      </div>
      {tretment && (
        <BookingModal
          tretment={tretment}
          setTretment={setTretment}
          selectedDate={selectedDate}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
