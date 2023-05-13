import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const OurServices = () => {
    const [services, setServices]= useState([])
    useEffect(()=>{
         fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data => setServices(data)) 
    }, [])
    return (
        <div className='text-center mx-auto mt-12'>
            <strong className='text-error text-xl'>Service</strong>
            <h3 className='text-5xl font-bold my-5'>Our Service Area</h3>
            <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-3 gap-10'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <button className='btn btn-outline btn-secondary rounded-none my-10'>More Services</button>
        </div>
    );
};

export default OurServices;