import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import type { AxiosError } from 'axios';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import MessagesPage from './components/pages/MessagesPage';
import OneMessagePage from './components/pages/OneMessagePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import type { AuthState } from './types/auth';
import AuthService, { authInstance } from './services/authService';
import ApiService, { apiInstance } from './services/apiService';

function App(): JSX.Element {
  const [auth, setAuth] = useState<AuthState>({ accessToken: '', user: { status: 'pending' } });
  const refreshAuth = async (): Promise<AuthState['accessToken']> => {
    const refreshedAuth = await AuthService.refresh();
    setAuth(refreshedAuth);
    return refreshedAuth.accessToken;
  };

  const loginHandler = async (formData): Promise<void> => {
    const newAuth = await AuthService.login(formData);
    setAuth(newAuth);
  };
  const logoutHandler = async (): Promise<void> => {
    await AuthService.logout();
    setAuth({ accessToken: '', user: { status: 'guest' } });
  };

  useEffect(() => {
    const requestIntercept = apiInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseIntercept = apiInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refreshAuth();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiInstance.interceptors.request.eject(requestIntercept);
      apiInstance.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);

  const getPosts = async (): Promise<void> => {
    try {
      const messages = await ApiService.getMessages();
      console.log(messages);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(auth);
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
          <Button onClick={logoutHandler}>logout test</Button>
          <Button onClick={refreshAuth}>refresh test</Button>
          <Button onClick={getPosts}>getposts test</Button>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/messages/:id" element={<OneMessagePage />} />
            <Route path="/login" element={<LoginPage loginHandler={loginHandler} />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
