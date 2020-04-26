import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import APIManager from "../../utils/APIManager";
import { Table, Spinner } from "react-bootstrap";
import NewProvider from "./NewProvider";
import ProvidersRow from "./ProvidersRow";

const Providers = React.memo(function Providers() {
  const [providers, setProviders] = useState();

  useEffect(() => {
    APIManager.mngr_fetchProviders()
      .then((res) => setProviders(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error.");
      });
  }, []);

  return (
    <ManagerLayout
      leftBarActive="Proveedores"
      title="Proveedores"
      newBttn={<NewProvider />}
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
                  <th className="text-center border-0">Productos</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((p) => {
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
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </ManagerLayout>
  );
});

export default Providers;
