import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import * as managerActions from "../../redux/actions/manager";
import { Table, Spinner, Tabs, Tab } from "react-bootstrap";
import ClientsRow from "./ClientsRow";
import ManagerRow from "./ManagerRow";
import API from "../../utils/API";

function Users() {
  const dispatch = useDispatch();

  const [clients, setClientes] = useState();
  const [managers, setManagers] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Usuarios"));
    dispatch(managerActions.setBackBttn(null));
    API.fetchClientsManager()
      .then(res => setClientes(res.data))
      .catch(err => console.log(err));
    API.fetchManagers()
      .then(res => setManagers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout title="Usuarios" button={null}>
      <Tabs defaultActiveKey="clientes" id="uncontrolled-tab-example">
        <Tab eventKey="clientes" title="Clientes">
          {clients ? (
            clients.length ? (
              <>
                <Table
                  className="mt-3"
                  striped
                  hover
                  size="sm"
                  responsive
                  variant="white"
                >
                  <thead>
                    <tr>
                      <th className="text-center border-0">Nombre(s)</th>
                      <th className="text-center border-0">Apellido paterno</th>
                      <th className="text-center border-0">Apellido materno</th>
                      <th className="text-center border-0">Email</th>
                      <th className="text-center border-0">
                        Fecha de registro
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map(c => {
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
              <Spinner
                animation="grow"
                role="status"
                className="spinnerStyle"
              />
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
                  hover
                  size="sm"
                  responsive
                  variant="white"
                >
                  <thead>
                    <tr>
                      <th className="text-center border-0">Nombre(s)</th>
                      <th className="text-center border-0">Apellido paterno</th>
                      <th className="text-center border-0">Apellido materno</th>
                      <th className="text-center border-0">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {managers.map(m => {
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
              <Spinner
                animation="grow"
                role="status"
                className="spinnerStyle"
              />
            </div>
          )}
        </Tab>
      </Tabs>
    </ManagerLayout>
  );
}

export default Users;
