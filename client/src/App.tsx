import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProductForm from './ui/AddProductForm';
import ProductList from './ui/ProductList';
import { useProductsDispatch } from './HOCs/contexts/products/productsContext';
import useProductsCoolWay from './customHooks/useProductsCoolWay';

function App(): JSX.Element {
  const dispatch = useProductsDispatch();
  const { initialLoadProducts } = useProductsCoolWay(dispatch)
  useEffect(() => {
    void initialLoadProducts();
  }, [])
  return (
    <Container>
      <Row className="justify-content-center m-3">
        <Col xs={5}>
          <AddProductForm />
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
