import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      
        <div className='bg-dark'>
        <Container className=' d-lg-flex  text-white align-items-center justify-content-around'>
        <div className='pt-4'>
            <h3>Chef Table</h3>
            <p>Visit our place to feel the root</p>
        </div>
        <div className='mt-4'>
           <Link className='text-decoration-none text-white' to='/'> <p className='mb-0'>Home </p></Link>
           <Link className='text-decoration-none text-white' to='/blogs'> <p className='mb-0'>Blogs</p></Link>
           <Link className='text-decoration-none text-white'> <p className='mb-0'>Our Chef</p></Link>
        </div>
        <div className='mt-4'>
            <h4>Get in touch</h4>
            <p className='mb-0'>Mobile: +880457336778</p>
            <p className='mb-0'> Email: cheftable123@gmail.com</p>
            <p className='pb-4'>Location: dhanmondi</p>
        </div>
        </Container>
        </div>
      
    );
};

export default Footer;