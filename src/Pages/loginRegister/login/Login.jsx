import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
const Login = () => {
  const [error,setError]=useState('');
    const {signInUser,logInWithGoogle,logInWithGithub}=useContext(AuthContext);
    const navigate=useNavigate();
  const location=useLocation();
  const from=location?.state?.from?.pathname || '/';
    const handdleSignIn=event=>{ 
        event.preventDefault();
        setError('');
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signInUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from,{replace:true});       
        })
        .catch(err=>{
            console.error(err)
            setError(err.message);
        })
        form.reset()
    }
    const handleLogInWithGoogle=()=>{
        logInWithGoogle()
        .then(result=>{
            const user=result.user;
            navigate(from,{replace:true});
            console.log(user);
           })
           .catch(error=>{
            console.log(error)
           })
        }
        const handleGithubSignIn=()=>{
           logInWithGithub()
            .then(result=>{
                const githubUser=result.user;
                console.log(githubUser);
                navigate(from,{replace:true});
                
            })
            .catch(error=>{
                console.log(error);
            })
        }
    
    return (
        <div className='d-flex flex-column align-items-center pt-5'>
           <h1 className='text-center text-bold mt-5'>Please Login</h1>
           <div className='mb-5 mx-auto bg-dark text-white  p-4 d-inline-block' style={{width:'400px'}}>
           <Form onSubmit={handdleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" required placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="outline-light" type="submit" >
        Login
      </Button>
      <div className='text-danger'>{error}</div>
    </Form>
           </div>
           <div >
           <Button variant="outline-dark me-3" onClick={handleLogInWithGoogle}>Sign in with google <FaGoogle></FaGoogle></Button>
           <Button variant="outline-dark ms-3" onClick={handleGithubSignIn}>Sign in with github  <FaGithub></FaGithub></Button>
           </div>
           <p className='mb-5 mt-3'>Are not a member? please <Link to='/register'>Register</Link></p>
        </div>
    );
}; 

export default Login;