import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import APIManager from "../../utils/APIManager";
import { Table, Spinner, Row, Button } from "react-bootstrap";
import MessagesRow from "./MessagesRow";

const Messages = React.memo(() => {
  const [messages, setMessages] = useState();
  const [filtered, setFiltered] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    APIManager.mngr_fetchMessages()
      .then((res) => {
        setMessages(res.data);
        setFiltered(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar los mensajes.");
      });
  }, []);

  const filterProducts = (criteria) => {
    switch (criteria) {
      case "unread":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter ? messages : messages.filter((msg) => !msg.seen)
        );
        break;
      case "lastWeek":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter ? messages : messages.filter((msg) => !msg.seen)
        );
        break;
      case "lastMonth":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter ? messages : messages.filter((msg) => !msg.seen)
        );
        break;
      default:
        setFiltered(messages);
    }
  };

  const filters = () => {
    return (
      <Row className="px-3 pb-2 mt-2">
        <Button
          disabled={messages ? false : true}
          active={filter === "unread" ? true : false}
          className="filterBttnManager"
          title="No leídos"
          onClick={() => filterProducts("unread")}
        >
          <i className="fas fa-eye-slash mr-1" />
          No leídos
        </Button>
        <Button
          disabled={messages ? false : true}
          active={filter === "lastWeek" ? true : false}
          className="filterBttnManager ml-2"
          title="Última semana"
          onClick={() => filterProducts("lastWeek")}
        >
          <i className="far fa-calendar-alt mr-1" />
          Última semana
        </Button>
        <Button
          disabled={messages ? false : true}
          active={filter === "lastMonth" ? true : false}
          className="filterBttnManager ml-2"
          title="Último mes"
          onClick={() => filterProducts("lastMonth")}
        >
          <i className="far fa-calendar-alt mr-1" />
          Último mes
        </Button>
      </Row>
    );
  };

  return (
    <ManagerLayout
      filters={filters()}
      leftBarActive="Mensajes"
      title="Mensajes"
    >
      {filtered ? (
        filtered.length ? (
          <>
            <Table striped hover size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Cliente</th>
                  <th className="text-center border-0">Correo</th>
                  <th className="text-center border-0">Enviado</th>
                  <th className="text-center border-0">Mensaje</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => {
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
