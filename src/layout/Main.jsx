import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Banner from '../Pages/Banner/Banner';
import About from '../Pages/About/About';
import Choose from '../Pages/choose/Choose';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Choose></Choose>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;