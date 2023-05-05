import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import { Container } from 'react-bootstrap';

const ChefRecipe = () => {
    return (
        <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1625772415023-66f9b62a12b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZ2xhZGVzaGklMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80")',backgroundSize:'cover',backgroundPosition:'',backgroundRepeat:'no-repeat' }}>
            <Header></Header>
            <Container>
            <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipe;