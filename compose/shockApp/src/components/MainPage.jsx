import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MainPage({ user }) {
  return (
    <Row>
      <Col className="text-center mt-4" xs={12}>
        {!user
          ? (
            <h3>Контент доступен только авторизованным пользователям</h3>
          )
          : (
            <>
              <h3>Шок контент 18+!</h3>
              <img src="/shock/img/shock.jpg" alt="logo" height={200} />
            </>
          )}
      </Col>
    </Row>
  );
}

export default MainPage;
