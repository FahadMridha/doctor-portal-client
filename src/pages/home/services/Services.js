import React from "react";

import fluroied from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: "1",
      name: "Fluoride Treatment",
      description:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels.",
      img: fluroied,
    },
    {
      id: "2",
      name: "Cavity Filling",
      description:
        "Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure.",
      img: cavity,
    },
    {
      id: "3",
      name: "Teeth Whitening",
      description:
        "Best Teeth Whitening At LASER DENTAL In Uttara. We Utilise World ",
      img: fluroied,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our services
        </h3>
        <h2 className="text-3xl font-semibold text-e uppercase">
          Services We Provide
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {serviceData.flatMap((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
