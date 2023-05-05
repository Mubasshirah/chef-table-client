import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../../assets/about.jpg';
const About = () => {
    return (
        <Container className='d-lg-flex align-items-lg-center justify-content-lg-between my-5 '>
            <div className=' text-white p-3' style={{backdropFilter:'blur(18px)'}}>
                <h1>Our Story</h1>
                <hr className='w-50' />
                <p >Chef Table is a rich and diverse culinary tradition that is known for its bold flavors, use of spices, and love of fish and rice. It is a must-try for anyone interested in experiencing the unique and delicious flavors of Bangladeshi cuisine.</p>
            </div>
            <div>
                <img src={about} className='img-fluid' />
            </div>
        </Container>
    );
};

export default About;