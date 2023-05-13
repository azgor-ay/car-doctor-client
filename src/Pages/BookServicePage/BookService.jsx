import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookService = () => {
    const service = useLoaderData();
    const { title } = service;

    return (
        <div className="bg-gray-300 p-12 m-5 shadow-2xl rounded-xl">
        <h1 className='text-xl  text-center font-extralight text-primary'>Checkout</h1>
        <h1 className='text-3xl text-center  font-bold'>{title}</h1>
      <div className="grid md:grid-cols-2 gap-5 my-4">
          <input placeholder='First Name' type="text" name="" id="" className="bg-white py-5 text-black px-3"/>
          <input placeholder='Last Name' type="text" name="" id="" className="bg-white py-5 text-black px-3"/>
          <input placeholder='Your Phone' type="text" name="" id="" className="bg-white py-5 text-black px-3"/>
          <input placeholder='Your Email' type="text" name="" id="" className="bg-white py-5 text-black px-3"/>
      </div>
          <textarea placeholder='Your Message' className="mx-auto w-full m-2 p-2" name="" id="" cols="155" rows="7"></textarea>
          <input type="submit" value="Order Confirm" className="btn btn-primary w-full"/>
      </div>
    );
};

export default BookService;