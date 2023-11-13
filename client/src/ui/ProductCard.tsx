import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type { ProductType } from '../types/product';
import type { DeleteHandlerType } from '../types/handlers';

type ProductCardProps = {
  product: ProductType;
  deleteProductHandler: DeleteHandlerType;
  dateInfo: { currentDate: Date; initialLength: number };
};

function ProductCard({
  product,
  deleteProductHandler,
  dateInfo,
}: ProductCardProps): JSX.Element {
  //   console.log(dateInfo.currentDate.valueOf());
  //   console.log(product.createdAt.valueOf());
  console.log('card render');
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text className="muted">
          Added{' '}
          {(
            (dateInfo.currentDate.valueOf() -
              new Date(product.createdAt).valueOf()) /
            (1000 * 60)
          ).toFixed()}{' '}
          minutes ago
        </Card.Text>
        <Button
          variant="danger"
          onClick={() => deleteProductHandler(product.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default React.memo(ProductCard);
