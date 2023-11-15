import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddMessageForm(): JSX.Element {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBody">
        <Form.Label>Body</Form.Label>
        <Form.Control type="text" as="textarea" rows={3} placeholder="Body" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
