import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import MessagesPage from './components/pages/MessagesPage';
import OneMessagePage from './components/pages/OneMessagePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import { useAuth } from './contexts/auth/authContext';
import Loader from './components/HOC/Loader';
import ApiService from './services/apiService';
import PrivateRouter from './components/HOC/PrivateRouter';

function App(): JSX.Element {
  const { user } = useAuth();
  return (
    <Container>
      <Loader isLoading={user.status === 'pending'}>
        <>
          <Row>
            <Col>
              <button
                onClick={() => {
                  ApiService.getMessages().then(console.log).catch(console.log);
                }}
              >
                TEST MESSAGES
              </button>
              <NavBar />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col xs={12}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/messages" element={<MessagesPage />} />
                <Route
                  path="/messages/:id"
                  element={
                    <PrivateRouter
                      isAllowed={user.status === 'authenticated'}
                      redirectPath="/login"
                    >
                      <OneMessagePage />
                    </PrivateRouter>
                  }
                />
                <Route element={<PrivateRouter isAllowed={user.status === 'guest'} />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                </Route>
              </Routes>
            </Col>
          </Row>
        </>
      </Loader>
    </Container>
  );
}

export default App;
