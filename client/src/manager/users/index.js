import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import { Table, Spinner, Tabs, Tab } from "react-bootstrap";
import ClientsRow from "./ClientsRow";
import ManagerRow from "./ManagerRow";
import APIManager from "../../utils/APIManager";

const Users = React.memo(() => {
  const [clients, setClientes] = useState();
  const [managers, setManagers] = useState();

  useEffect(() => {
    APIManager.mngr_fetchClients()
      .then((res) => setClientes(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar los clientes.");
      });
    APIManager.mngr_fetchManagers()
      .then((res) => setManagers(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar los administradores.");
      });
  }, []);

  return (
    <ManagerLayout leftBarActive="Usuarios" title="Usuarios" button={null}>
      <Tabs defaultActiveKey="clientes" id="uncontrolled-tab-example">
        <Tab eventKey="clientes" title="Clientes">
          {clients ? (
            clients.length ? (
              <>
                <Table
                  className="mt-3"
                  striped
                  size="sm"
                  responsive
                  variant="white"
                >
                  <thead>
                    <tr>
                      <th className="text-center border-0">Nombre</th>
                      <th className="text-center border-0">Apellido paterno</th>
                      <th className="text-center border-0">Correo</th>
                      <th className="text-center border-0">Favoritos</th>
                      <th className="text-center border-0">Registro</th>
                      <th className="text-center border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((c) => {
                      return <ClientsRow key={c._id} client={c} />;
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
        </Tab>
        <Tab eventKey="administradores" title="Administradores">
          {managers ? (
            managers.length ? (
              <>
                <Table
                  className="mt-3"
                  striped
                  size="sm"
                  responsive
                  variant="white"
                >
                  <thead>
                    <tr>
                      <th className="text-center border-0">Nombre</th>
                      <th className="text-center border-0">Apellido paterno</th>
                      <th className="text-center border-0">Apellido materno</th>
                      <th className="text-center border-0">Correo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {managers.map((m) => {
                      return <ManagerRow key={m._id} manager={m} />;
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
        </Tab>
      </Tabs>
    </ManagerLayout>
  );
});

export default Users;
