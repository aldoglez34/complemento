import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import * as managerActions from "../../../redux-actions/manager";
import API from "../../../utils/API";
import { Table, Spinner, Row, Col, Button } from "react-bootstrap";
import ProductsRow from "./ProductsRow";

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
      <Row className="mb-3">
        <Col md={8} className="d-flex align-items-center">
          <h2 className="mb-0 text-dark">
            <strong>Productos</strong>
          </h2>
        </Col>
        <Col md={4} className="mt-1 mt-md-0 text-md-right">
          <Button variant="success" href="/manager/products/create">
            <i className="fas fa-pills mr-2" />
            Nuevo Producto
          </Button>
        </Col>
      </Row>
      {products ? (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Categoría</th>
              <th className="text-center">Precio de compra</th>
              <th className="text-center">Precio de venta</th>
              <th className="text-center">Existencia</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => {
              return <ProductsRow key={p._id} product={p} />;
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
