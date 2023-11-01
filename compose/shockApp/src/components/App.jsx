import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MainPage from './MainPage';

export default function App({ user }) {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/shock" element={<MainPage user={user} />} />
      </Routes>
    </Container>
  );
}
