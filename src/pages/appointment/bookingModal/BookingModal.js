import { format } from "date-fns";
import React from "react";

const BookingModal = ({ tretment, setTretment, selectedDate }) => {
  const { name, slots } = tretment; //tretment is an appionment options just diffrent name
  const date = format(selectedDate, "PP");
  const handlerBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appiontmentDate: date,
      tretment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTretment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handlerBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              placeholder={date}
              className="input w-full input-bordered"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="input w-full input-bordered "
            />
            <input
              name="phone"
              type="text"
              placeholder="Your phone"
              className="input w-full input-bordered "
            />
            <input className="btn bg-accent" type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
