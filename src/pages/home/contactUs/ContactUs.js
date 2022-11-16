import React from "react";
import ButtonComponent from "../../../component/buttonomponent/ButtonComponent";

const ContactUs = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-lg text-bold text-primary ">Contact Us</h3>
        <h3 className="text-2xl   ">Stay connected with us</h3>
      </div>
      <div className="flex  justify-evenly">
        <div className="grid max-w-screen-lg grid-cols-1  py-6 rounded-lg md:px-12 lg:px-16 xl:px-32  dark:text-gray-100">
          <form
            novalidate=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div>
              <label for="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label for="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded dark:bg-gray-800"
              ></textarea>
            </div>
            <div className="text-center">
              <ButtonComponent>Submit</ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
