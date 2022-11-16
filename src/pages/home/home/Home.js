import React from "react";
import Banner from "../banner/Banner";
import ContactUs from "../contactUs/ContactUs";
import DentalCare from "../dentalCare/DentalCare";
import InfoCards from "../infocards/InfoCards";
import MakeAppoinment from "../makeAppoinment/MakeAppoinment";
import Services from "../services/Services";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <DentalCare />
      <MakeAppoinment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
