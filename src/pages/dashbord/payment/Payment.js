import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
  const booking = useLoaderData();
  // console.log(booking);
  const { price, slot, appiontmentDate, tretment } = booking;

  return (
    <div>
      <h2 className="text-3xl">Payment for {tretment}</h2>
      <h3 className="tetx-xl">
        Please pay <strong>${price}</strong> for your appionment on
        {appiontmentDate} at {slot}
      </h3>

      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
