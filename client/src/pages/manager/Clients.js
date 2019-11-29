import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "./ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import { Table, Spinner, Row, Col } from "react-bootstrap";
import ClientsRow from "./ClientsRow";
import API from "../../utils/API";

function Clients() {
  const dispatch = useDispatch();

  const [clients, setClientes] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Clientes"));
    dispatch(managerActions.setBackBttn(null));
    API.fetchClientsManager()
      .then(res => setClientes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout>
      <Row className="mb-3">
        <Col md={8} className="d-flex align-items-center">
          <h2 className="mb-0 text-dark">
            <strong>Clientes</strong>
          </h2>
        </Col>
      </Row>
      {clients ? (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Apellido paterno</th>
              <th className="text-center">Apellido materno</th>
              <th className="text-center">Email</th>
              <th className="text-center">Fecha de registro</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(c => {
              return <ClientsRow key={c._id} client={c} />;
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

export default Clients;
