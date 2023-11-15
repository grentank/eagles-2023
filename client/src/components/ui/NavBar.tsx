import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <Navbar /* expand="lg" */ className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Link to="/">Main</Link>
          <Link to="/login">Login</Link>
          <Button>Logout</Button>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
