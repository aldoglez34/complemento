import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import moment from "moment";

const LastClientCard = React.memo(({ client }) => {
  moment.locale("es");

  return (
    <Card>
      <Card.Header>
        <strong>Último Cliente</strong>
      </Card.Header>
      {Object.keys(client).length ? (
        <>
          <Card.Body>
            <Card.Title>
              <h4>{`${client.name} ${client.firstSurname} ${client.secondSurname}`}</h4>
            </Card.Title>
            <Card.Text className="d-flex flex-column">
              <span>{client.email}</span>
              <span>{client.phone}</span>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {moment(client.createdAt).format("LLLL")}
            </small>
          </Card.Footer>
        </>
      ) : (
        <Card.Body>
          <Card.Text>
            <em>No hay usuarios registrados aún</em>
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
});

LastClientCard.propTypes = {
  client: PropTypes.object.isRequired,
};

export default LastClientCard;
