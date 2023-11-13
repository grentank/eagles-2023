import React, { useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import type { ProductType } from '../types/product';
import ProductCard from './ProductCard';
import type { DeleteHandlerType } from '../types/handlers';

type ProductListProps = {
  products: ProductType[];
  deleteProductHandler: DeleteHandlerType;
};

export default function ProductList({
  products,
  deleteProductHandler,
}: ProductListProps): JSX.Element {
  const dateInfo = useMemo(
    () => ({
      currentDate: new Date(),
      initialLength: 0,
    }),
    [],
  );

  return (
    <Row className="justify-content-center">
      {products.map((product) => (
        <Col xs={4} key={product.id}>
          <ProductCard
            dateInfo={dateInfo}
            deleteProductHandler={deleteProductHandler}
            product={product}
          />
        </Col>
      ))}
    </Row>
  );
}
