import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import PostsPage from './components/pages/PostsPage';
import OnePostPage from './components/pages/OnePostPage';

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
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<OnePostPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
