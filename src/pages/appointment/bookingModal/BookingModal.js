import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ tretment, setTretment, selectedDate, refetch }) => {
  const { name: tretmentName, slots, price } = tretment; //tretment is an appionment options just diffrent name
  const date = format(selectedDate, "PP");

  const { user } = useContext(AuthContext);
  const handlerBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appiontmentDate: date,
      tretment: tretmentName,
      patient: name,
      slot,
      email,
      phone,
      price,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTretment(null);
          toast.success("booking comfired");
          refetch();
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => console.log(error));
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
          <h3 className="text-lg font-bold">{tretmentName}</h3>
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
              defaultValue={user?.displayName}
              disabled
              placeholder="Your name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
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
