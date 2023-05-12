import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/SharedComponents/Footer';
import Header from '../Components/SharedComponents/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;