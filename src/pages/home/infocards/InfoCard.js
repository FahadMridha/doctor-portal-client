import React from "react";

const InfoCard = ({ card }) => {
  const { description, bgClass, name, icon } = card;
  return (
    <div>
      <div className={`card md:card-side p-6 shadow-xl text-white ${bgClass}`}>
        <figure>
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
