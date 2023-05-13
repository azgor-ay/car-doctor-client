import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;
  console.log(service);
  return (
    <div className="bg-gray-300 p-12 m-5 shadow-2xl rounded-xl">
      <h1>Checkout</h1>
      <h1>{title}</h1>
    <div className="grid md:grid-cols-2 ">
        <input type="text" name="" id="" className="bg-white border-2 p-2 m-2"/>
        <input type="text" name="" id="" className="bg-white border-2 p-2 m-2"/>
        <input type="text" name="" id="" className="bg-white border-2 p-2 m-2"/>
        <input type="text" name="" id="" className="bg-white border-2 p-2 m-2"/>
    </div>
        <textarea className="mx-auto w-full m-2 p-2" name="" id="" cols="155" rows="7"></textarea>
        <input type="submit" value="Order Confirm" className="btn btn-primary w-full"/>
    </div>
  );
};

export default CheckOut;
