import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MainPage from './MainPage';
import AppNavBar from './AppNavBar/AppNavBar';
import SignInPage from './SignInPage/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage';

export default function App({ user }) {
  return (
    <Container>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
      </Routes>
    </Container>
  );
}
