import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const Register = () => {

    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const {  handleUpdate ,auth,user,createUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleRegister=event=>{
        event.preventDefault();
        setSuccess('');
        setError('');
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        const photo=form.photo.value;
           console.log(name,photo);
        if(email===''){
          alert('email field cannot be empty');
          return;
        }
        if(password===''){
          alert('password field cannot be empty');
          return;
        }
       
       if(password.length<6){
            setError('password must have more than six character');
            return;
        }
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(photo);
            handleUpdate(name,photo)
            
            setSuccess('seccessfully signed up')
            navigate('/');
            console.log(user)
        })
        .catch(err=>{
            console.error(err)
        })
        form.reset()
        
      
    }
   
    return (
        <div className='d-flex flex-column align-items-center pt-5'>
        <h1 className='text-center text-bold mt-5'>Please Register</h1>
        <div className='mb-5 mx-auto bg-dark text-white  p-4 d-inline-block' style={{width:'400px'}}>
        <Form onSubmit={handleRegister}>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Your name</Form.Label>
     <Form.Control type="text" name="name" required placeholder="Enter your name" />
     
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Photo URL</Form.Label>
     <Form.Control type="text" name="photo" placeholder="Enter your photo url" />
     
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" name="email"required placeholder="Enter email" />
     
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" name="password" required placeholder="Password" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Check me out" />
   </Form.Group>
   <Button variant="outline-light" type="submit">
     Register
   </Button>
   <div className='text-danger'>{error}</div>
    <div className='text-success'>{success}</div>
   <p>Already a member ? <Link to="/login">login</Link></p>
 </Form>
        </div>
        </div>
    );
};

export default Register;