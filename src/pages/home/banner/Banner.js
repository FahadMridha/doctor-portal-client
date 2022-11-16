import React from "react";
import chair from "../../../assets/images/chair.png";
import ButtonComponent from "../../../component/buttonomponent/ButtonComponent";

const Banner = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" rounded lg:w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              We custom-make veneers for trusted dentists so you get the most
              beautiful, natural-looking smile. Connect with a Trusted Dentist.
            </p>
            <ButtonComponent>getting start</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
