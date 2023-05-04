import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='d-flex flex-column align-items-center pt-5'>
           <h1 className='text-center text-bold mt-5'>Please Login</h1>
           <div className='mb-5 mx-auto bg-dark text-white  p-4 d-inline-block'>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="outline-light" type="submit">
        Login
      </Button>
    </Form>
           </div>
           <div >
           <Button variant="outline-dark me-3">Sign in with facebook  <FaFacebook></FaFacebook></Button>
           <Button variant="outline-dark ms-3">Sign in with github  <FaGithub></FaGithub></Button>
           </div>
           <p className='mb-5 mt-3'>Are not a member? please <Link to='/register'>Register</Link></p>
        </div>
    );
}; 

export default Login;