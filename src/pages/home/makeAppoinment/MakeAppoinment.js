import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appiontment from "../../../assets/images/appointment.png";
import ButtonComponent from "../../../component/buttonomponent/ButtonComponent";

const MakeAppoinment = () => {
  return (
    <div>
      <section
        className=" mt-32 "
        style={{
          background: `url(${appiontment})`,
        }}
      >
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={doctor}
              alt=""
              className=" -mt-32 lg:w-1/2 hidden md:block lg:block rounded-lg shadow-2xl"
            />
            <div>
              <h3 className="text-lg text-primary font-bold">Appointment</h3>
              <h1 className="text-4xl font-bold text-white">
                Make an appointment Today
              </h1>
              <p className="py-6 text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <ButtonComponent>Get started</ButtonComponent>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppoinment;
