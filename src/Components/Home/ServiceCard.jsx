import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

  const { _id, img, title, price } = service;
  console.log(_id);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Car Services" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{title}</h2>
        <p className="text-left text-xl text-error font-bold">${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-secondary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
