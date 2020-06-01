import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import APIManager from "../../utils/APIManager";
import { Table, Spinner } from "react-bootstrap";
import TopRightBttn from "../components/TopRightBttn";
import ProvidersRow from "./ProvidersRow";

const Providers = React.memo(() => {
  const [providers, setProviders] = useState();

  useEffect(() => {
    APIManager.mngr_fetchProviders()
      .then((res) => setProviders(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar los proveedores.");
      });
  }, []);

  return (
    <ManagerLayout
      leftBarActive="Proveedores"
      title="Proveedores"
      topBttn={
        <TopRightBttn
          text={
            <>
              <i className="fas fa-plus-square mr-2" />
              <span>Proveedor</span>
            </>
          }
          link="/manager/providers/new"
        />
      }
    >
      {providers ? (
        providers.length ? (
          <>
            <Table striped size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0 pb-3">Nombre</th>
                  <th className="text-center border-0 pb-3">RFC</th>
                  <th className="text-center border-0 pb-3">Correo</th>
                  <th className="text-center border-0 pb-3">Teléfono</th>
                  <th className="text-center border-0 pb-3">Dirección</th>
                  <th className="text-center border-0 pb-3">Productos</th>
                  <th className="text-center border-0 pb-3"></th>
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
