import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const SiteNav = () => {
  return (
   <header>
    <Navbar bg='dark' expand='lg' variant='dark'>
        <Container>
        <Navbar.Brand href="#home">Test1_App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navms-md-auto">
                <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   </header>
  );
}

export default SiteNav;