import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const service = useLoaderData()
    // const {title} = service
    console.log(service);
    return (
        <div>
            <h1>Checkout</h1>
            {/* <h1>{title}</h1> */}
        </div>
    );
};

export default CheckOut;