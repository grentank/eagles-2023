import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MainPage from './MainPage';
import AppNavBar from './AppNavBar/AppNavBar';

export default function App({ inDocker }) {
  return (
    <Container>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<MainPage inDocker={inDocker} />} />
      </Routes>
    </Container>
  );
}
