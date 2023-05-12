import React from 'react';
import Carousel from '../../Components/Home/Carousel';
import AboutUs from '../../Components/Home/AboutUs';
import OurServices from '../../Components/Home/OurServices';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;