import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MainPage({ user }) {
  return (
    <Row>
      <Col className="text-center mt-4" xs={12}>
        {user
          ? (
            <>
              <h3>Вы авторизованы</h3>
              <a href="/api/logout">Выйти</a>
            </>
          )
          : (
            <>
              <h3>Вы не авторизованы</h3>
              <a href="/auth/signin">Войти</a>
              <br />
              <a href="/auth/signup">Зарегестрироваться</a>
            </>
          )}
      </Col>
    </Row>
  );
}

export default MainPage;
