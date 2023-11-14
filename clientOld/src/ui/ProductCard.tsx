import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import type {
  AddProductFormData,
  ProductType,
} from '../types/product';
import { useProductsDispatch } from '../HOCs/contexts/products/productsContext';
import useProductsCoolWay from '../customHooks/useProductsCoolWay';

type ProductCardProps = {
  product: ProductType;
};

function ProductCard({ product }: ProductCardProps): JSX.Element {
  console.log('card render');
  const dispatch = useProductsDispatch();
  const { deleteHandler, editProductHandler } =
    useProductsCoolWay(dispatch);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      {isEditing ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(
              new FormData(e.currentTarget),
            ) as AddProductFormData;
            void editProductHandler(formData, product.id).then(() =>
              setIsEditing(false),
            );
          }}
        >
          <Form.Control
            type="text"
            name="title"
            defaultValue={product.title}
          />
          <Form.Control
            type="text"
            name="price"
            defaultValue={product.price}
          />

          <Form.Control
            type="text"
            name="description"
            defaultValue={product.description}
          />

          <Form.Control
            type="text"
            name="img"
            defaultValue={product.img}
          />

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      ) : (
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="muted">
            Added{' '}
            {(
              (new Date().valueOf() -
                new Date(product.createdAt).valueOf()) /
              (1000 * 60)
            ).toFixed()}{' '}
            minutes ago
          </Card.Text>
          <Button
            variant="danger"
            onClick={() => {
              void deleteHandler(product.id);
            }}
          >
            Delete
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </Button>
        </Card.Body>
      )}
    </Card>
  );
}

export default React.memo(ProductCard);
