import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='py-5'>
            <h3>What is the differences between uncontrolled and controlled components?</h3>
            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            <h3>How to validate React props using PropTypes?</h3>
            <p>PropTypes.any : The prop can be of any data type. <br />
                PropTypes.bool : The prop should be a Boolean.<br />
                PropTypes.number : The prop should be a number.<br />
                PropTypes.string : The prop should be a string.<br />
                PropTypes.func : The prop should be a function.<br />
                PropTypes.array : The prop should be an array.</p>
            <h3>Tell us the difference between nodejs and express js.
            </h3>
            <p>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            <h3>What is a custom hook, and why will you create a custom hook?</h3>
            <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
        </Container>
    );
};

export default Blogs;