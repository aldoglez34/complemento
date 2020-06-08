import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import moment from "moment";

const LastProvider = React.memo(({ provider }) => {
  moment.locale("es");

  return (
    <Card>
      <Card.Header>
        <strong>Último Proveedor</strong>
      </Card.Header>
      {Object.keys(provider).length ? (
        <>
          <Card.Body>
            <Card.Title>
              <h4>{provider.name}</h4>
            </Card.Title>
            <Card.Text className="d-flex flex-column">
              <span>{provider.email}</span>
              <span>{provider.phone}</span>
              <span>{provider.fullAddress}</span>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {moment(provider.createdAt).format("LLLL")}
            </small>
          </Card.Footer>
        </>
      ) : (
        <Card.Body>
          <Card.Text>
            <em>No hay nada aquí</em>
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
});

LastProvider.propTypes = {
  provider: PropTypes.object.isRequired,
};

export default LastProvider;
