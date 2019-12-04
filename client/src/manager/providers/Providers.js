import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
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
        providers.length ? (
          <>
            <Table striped hover size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Nombre</th>
                  <th className="text-center border-0">RFC</th>
                  <th className="text-center border-0">Correo</th>
                  <th className="text-center border-0">Teléfono</th>
                  <th className="text-center border-0">Dirección</th>
                </tr>
              </thead>
              <tbody>
                {providers.map(p => {
                  return <ProvidersRow key={p._id} provider={p} />;
                })}
              </tbody>
            </Table>
          </>
        ) : (
          <em>No hay nada aquí</em>
        )
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" className="spinnerStyle" />
        </div>
      )}
    </ManagerLayout>
  );
}

export default Providers;
