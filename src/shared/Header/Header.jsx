import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='text-bold '>Chef Table</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           <Link to='/' className='text-decoration-none text-white me-4 text-bold'>Home</Link>
           <Link to='/blogs'  className='text-decoration-none text-white me-4 text-bold'>Blogs</Link>           
           <Link  className='text-decoration-none text-white me-4 text-bold'>About</Link>           
          </Nav>
          <Nav>
            <Nav.Link >profile pic</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    );
};

export default Header;