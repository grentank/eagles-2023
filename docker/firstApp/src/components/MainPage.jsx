import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MainPage({ inDocker }) {
  return (
    <Row>
      <Col className="text-center mt-4" xs={12}>
        {JSON.parse(inDocker)
          ? (
            <>
              <h3>Run in docker</h3>
              <img src="/img/docker-logo.png" alt="logo" height={100} />
            </>
          )
          : <h3>Run without docker</h3>}
      </Col>
    </Row>
  );
}

export default MainPage;
