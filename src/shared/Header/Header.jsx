import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Button } from 'react-bootstrap';
import {  CgProfile} from "react-icons/cg";

const Header = () => {
    const {user,logOutUser}=useContext(AuthContext);
  
    const handleLogOut=()=>{
        logOutUser()
        .then()
        .catch(error=>console.log(error))
    }
    return (
        <div>
           <Navbar className='fixed-top ' collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container > 
        <Navbar.Brand className='text-bold '>Chef Table</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           <Link  className='text-decoration-none text-white me-4 text-bold' to='/'>Home</Link>
           <Link   className='text-decoration-none text-white me-4 text-bold' to='/blogs'>Blogs</Link>           
           <Link to='/about' className='text-decoration-none text-white me-4 text-bold'>Chefs</Link>           
          </Nav>
         
          <Nav className='align-items-center'>
                          
                          { user ?
                              
                             <div>
                                
                                <img src={user.photoURL} alt=""  style={{width:'20px',height:'20px',borderRadius:'50%',marginRight:'15px'}} data-toggle="tooltip" data-placement="top" title={user.displayName} />
                                
                               
                                 <Button variant="secondary" onClick={handleLogOut}>Logout</Button>
                             </div>
                              :
                              <Link  to="/login">
                              <Button variant="secondary">Login</Button>
                              </Link>
                          }
                      </Nav>
           
         
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    );
};

export default Header;