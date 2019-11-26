import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "./ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import API from "../../utils/API";
import { Table, Spinner, Row, Col, Button } from "react-bootstrap";
import ProvidersRow from "./ProvidersRow";

function Providers() {
  const dispatch = useDispatch();

  const [providers, setProviders] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Proveedores"));
    dispatch(managerActions.setBackBttn(null));
    // fetch products
    API.fetchProvidersManager()
      .then(res => setProviders(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout>
      <Row className="mb-3">
        <Col md={8} className="d-flex align-items-center">
          <h2 className="mb-0 text-dark">
            <strong>Proveedores</strong>
          </h2>
        </Col>
        <Col md={4} className="mt-1 mt-md-0 text-md-right">
          <Button variant="success" href="/manager/providers/create">
            <i className="fas fa-truck-moving mr-2" />
            Nuevo proveedor
          </Button>
        </Col>
      </Row>
      {providers ? (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>Nombre del Proveedor</th>
              <th>RFC</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {providers.map(p => {
              return <ProvidersRow key={p._id} provider={p} />;
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

export default Providers;
