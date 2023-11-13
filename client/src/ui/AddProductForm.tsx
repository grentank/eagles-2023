import React from 'react';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import type { AddProductHandlerType } from '../types/handlers';

type AddProductFormProps = {
  addProductHandler: AddProductHandlerType;
};

function AddProductForm({
  addProductHandler,
}: AddProductFormProps): JSX.Element {
  console.log('form rerender');
  return (
    <Form
      onSubmit={(e) => {
        void addProductHandler(e);
        e.currentTarget.reset();
      }}
    >
      <InputGroup className="mb-3">
        <InputGroup.Text>Title and price</InputGroup.Text>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
        />
        <Form.Control
          type="text"
          name="price"
          placeholder="Enter price"
        />
      </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          as="textarea"
          rows={3}
          placeholder="Enter description"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          name="img"
          placeholder="Enter image url"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default React.memo(AddProductForm);
