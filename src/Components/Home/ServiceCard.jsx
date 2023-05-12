import React from "react";

const ServiceCard = ({service}) => {
    console.log(service);
    const {img, title, price} = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Car Services"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{title}</h2>
        <p className="text-left text-xl text-error font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
