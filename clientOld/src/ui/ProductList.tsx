import React from 'react';
import { Col, Row } from 'react-bootstrap';
import type { ProductType } from '../types/product';
import ProductCard from './ProductCard';
import { useProductsContext } from '../HOCs/contexts/products/productsContext';

export default function ProductList(): JSX.Element {
  const { products } = useProductsContext();
  return (
    <Row className="justify-content-center">
      {products.map((product) => (
        <Col xs={4} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
