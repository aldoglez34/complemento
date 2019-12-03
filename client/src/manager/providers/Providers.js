import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
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
    API.fetchProvidersManager()
      .then(res => setProviders(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout
      title="Proveedores"
      button={{ text: "Nuevo Proveedor", to: "/manager/providers/create" }}
    >
      {providers ? (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">RFC</th>
              <th className="text-center">Correo</th>
              <th className="text-center">Teléfono</th>
              <th className="text-center">Dirección</th>
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
