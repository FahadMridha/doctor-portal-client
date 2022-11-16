import React, { useState } from "react";
import AppionmentBanner from "../appionmentBanner/AppionmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppionmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppointments
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default Appointment;
