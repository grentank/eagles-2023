import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth, useAuthHandlers } from '../../contexts/auth/authContext';

export default function NavBar(): JSX.Element {
  const { logoutHandler } = useAuthHandlers();
  const auth = useAuth();
  console.log(auth);
  return (
    <Navbar /* expand="lg" */ className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          Hello, {auth.user.status === 'authenticated' ? auth.user.name : 'Guest'}
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Link to="/">Main</Link>
          <Link to="/login">Login</Link>
          <Button onClick={() => void logoutHandler()}>Logout</Button>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
