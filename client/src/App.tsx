import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import MessagesPage from './components/pages/MessagesPage';
import OneMessagePage from './components/pages/OneMessagePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';

function App(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/messages/:id" element={<OneMessagePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
