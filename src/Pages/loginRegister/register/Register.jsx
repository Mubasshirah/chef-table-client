import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const {user,createUser}=useContext(AuthContext);
    const handleRegister=event=>{
        event.preventDefault();
        setSuccess('');
        setError('');
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        const photo=form.photo.value;
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('password must have uppercase');
            return;
        }
        else if(!/(?=.*[!@#$&*])/.test(password)){
            setError('password must have special letter');
            return;
        }
        else if(password.length<8){
            setError('password must have more than eight character');
            return;
        }
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            updateProfileName(user,name,photo);
            setSuccess('seccessfully signed up')
            console.log(user)
        })
        .catch(err=>{
            console.error(err)
        })
        form.reset()
        
      
    }
    const updateProfileName=(user,name,photo)=>{
        updateProfile(user,{displayName:name,photoUrL:photo})
        .then(()=>{
            console.log('user name updated')
        })
        .catch(error=>{
            console.error(error.message)
        })
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