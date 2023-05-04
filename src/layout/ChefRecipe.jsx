import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import { Container } from 'react-bootstrap';

const ChefRecipe = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipe;