import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='d-flex flex-column align-items-center pt-5'>
        <h1 className='text-center text-bold mt-5'>Please Register</h1>
        <div className='mb-5 mx-auto bg-dark text-white  p-4 d-inline-block' style={{width:'400px'}}>
        <Form>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Your name</Form.Label>
     <Form.Control type="text" name="name" required placeholder="Enter your name" />
     
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Photo URL</Form.Label>
     <Form.Control type="text" name="name" placeholder="Enter your photo url" />
     
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" name="email" placeholder="Enter email" />
     
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" name="password" placeholder="Password" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Check me out" />
   </Form.Group>
   <Button variant="outline-light" type="submit">
     Register
   </Button>
   <p>Already a member ? <Link to="/login">login</Link></p>
 </Form>
        </div>
        </div>
    );
};

export default Register;