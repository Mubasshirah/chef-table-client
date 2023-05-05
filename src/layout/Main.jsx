import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Banner from '../Pages/Banner/Banner';
import About from '../Pages/About/About';
import Choose from '../Pages/choose/Choose';
import Chef from '../Pages/chef/Chef';

const Main = () => {
    return (
        <div style={{backgroundImage:'url("https://us.123rf.com/450wm/somegirl/somegirl1905/somegirl190500113/124101230-authentic-indian-dishes-and-snacks.jpg?ver=6")',backgroundSize:'cover',backgroundPosition:'',backgroundRepeat:'no-repeat' }}>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Choose></Choose>
            <Chef></Chef>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;