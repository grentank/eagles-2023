import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth, useAuthHandlers } from '../../contexts/auth/authContext';
import AddMessageModal from './AddMessageModal';

export default function NavBar(): JSX.Element {
  const [show, setShow] = useState(false);
  const { logoutHandler } = useAuthHandlers();
  const auth = useAuth();
  console.log(auth);
  return (
    <>
      <Navbar /* expand="lg" */ className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            Hello, {auth.user.status === 'authenticated' ? auth.user.name : 'Guest'}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/messages">
              Messages
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={Button} onClick={() => void logoutHandler()}>
              Logout
            </Nav.Link>
            <Nav.Link as={Button} onClick={() => setShow(true)}>
              POST
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <AddMessageModal show={show} handleClose={() => setShow(false)} />
    </>
  );
}
