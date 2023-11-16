import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import type { AxiosError } from 'axios';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import MessagesPage from './components/pages/MessagesPage';
import OneMessagePage from './components/pages/OneMessagePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Loader from './components/HOC/Loader';
import PrivateRouter from './components/HOC/PrivateRouter';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { loadInitialMessages } from './redux/slices/messages/thunkActions';
import { checkUserThunk, refreshThunk } from './redux/slices/auth/authThunks';
import { apiInstance } from './services/apiService';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { user, accessToken } = useAppSelector((store) => store.auth);

  useEffect(() => {
    void dispatch(loadInitialMessages());
    void dispatch(checkUserThunk());
  }, []);

  useEffect(() => {
    const requestInterceptor = apiInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(refreshThunk());
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      apiInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user]);

  return (
    <Container>
      <Loader isLoading={user.status === 'pending'}>
        <>
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
