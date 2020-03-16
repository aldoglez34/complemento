import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import MessagesRow from "./MessagesRow";

const Messages = React.memo(function Messages() {
  const [messages, setMessages] = useState();

  useEffect(() => {
    API.fetchMessages()
      .then(res => setMessages(res.data))
      .catch(err => {
        console.log(err.response);
        alert(err.response.data.msg);
      });
  }, []);

  return (
    <ManagerLayout leftBarActive="Mensajes" title="Mensajes">
      {messages ? (
        messages.length ? (
          <>
            <Table striped hover size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Fecha</th>
                  <th className="text-center border-0">Nombre del cliente</th>
                  <th className="text-center border-0">Correo electrónico</th>
                  <th className="text-center border-0">Mensaje</th>
                </tr>
              </thead>
              <tbody>
                {messages.map(m => {
                  return <MessagesRow key={m._id} message={m} />;
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

export default Messages;
