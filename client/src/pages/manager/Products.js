import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "./ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import API from "../../utils/API";
import { Table, Spinner, Row, Col, Button } from "react-bootstrap";
import ProductRow from "./ProductRow";

function Products() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Productos"));
    dispatch(managerActions.setBackBttn(null));
    // fetch products
    API.fetchProductsManager()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout>
      {/* <h3>
        <strong className="ml-1 text-dark">PRODUCTOS</strong>
      </h3> */}
      <Row className="mb-3">
        <Col md={8} className="d-flex align-items-center">
          <h3 className="mb-0 text-dark">
            <strong>PRODUCTOS</strong>
          </h3>
        </Col>
        <Col md={4} className="mt-1 mt-md-0 text-md-right">
          <Button variant="success" href="/manager/products/new">
            Nuevo Producto
          </Button>
        </Col>
      </Row>
      {products ? (
        <Table bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio de compra</th>
              <th>Precio de venta</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => {
              return <ProductRow key={p._id} product={p} />;
            })}
          </tbody>
        </Table>
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" className="spinnerStyle" />
        </div>
      )}
    </ManagerLayout>
  );
}

export default Products;
