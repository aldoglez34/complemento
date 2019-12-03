import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import * as managerActions from "../../../redux-actions/manager";
import API from "../../../utils/API";
import { Table, Spinner, Row, Col, Button } from "react-bootstrap";
import DiscountsRow from "./DiscountsRow";

function Discounts() {
  const dispatch = useDispatch();

  const [discounts, setDiscounts] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Promociones"));
    dispatch(managerActions.setBackBttn(null));
    // fetch products
    API.fetchDiscountsManager()
      .then(res => setDiscounts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout>
      <Row className="mb-3">
        <Col md={8} className="d-flex align-items-center">
          <h2 className="mb-0 text-dark">
            <strong>Promociones</strong>
          </h2>
        </Col>
        <Col md={4} className="mt-1 mt-md-0 text-md-right">
          <Button variant="success" href="/manager/discounts/create">
            <i className="fas fa-tags mr-2" />
            Nueva Promoción
          </Button>
        </Col>
      </Row>
      {discounts ? (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th className="text-center">Producto</th>
              <th className="text-center">Precio de compra</th>
              <th className="text-center">Precio de venta</th>
              <th className="text-center">Descuento</th>
              <th className="text-center">Nuevo precio de venta</th>
            </tr>
          </thead>
          <tbody>
            {discounts.map(d => {
              return <DiscountsRow key={d._id} discount={d} />;
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

export default Discounts;
