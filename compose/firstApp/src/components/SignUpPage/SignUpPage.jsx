import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function SignUpPage() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (data.name && data.email && data.password) {
      axios.post('/api/signup', data)
        .then((res) => {
          if (res.status === 200) {
            window.location = '/';
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Row className="d-flex justify-content-center mt-4">
      <Col md={4}>
        <h3>SignIn</h3>
        <Form onSubmit={submitHandler}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Enter name" />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default SignUpPage;
