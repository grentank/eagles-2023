import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProductForm from './ui/AddProductForm';
import ProductList from './ui/ProductList';

import useProducts from './customHooks/useProducts';

function App(): JSX.Element {
  const { products, addProductHandler, deleteProductHandler } = useProducts();
  return (
    <Container>
      <Row className="justify-content-center m-3">
        <Col xs={5}>
          <AddProductForm addProductHandler={addProductHandler} />
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <ProductList deleteProductHandler={deleteProductHandler} products={products} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
