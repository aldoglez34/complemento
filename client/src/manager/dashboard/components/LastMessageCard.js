import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import moment from "moment";

const LastMessageCard = React.memo(({ message }) => {
  moment.locale("es");

  return (
    <Card className="text-right">
      {Object.keys(message).length ? (
        <blockquote className="blockquote mb-0 card-body">
          <p className="lead mb-1 text-info">{message.subject}</p>
          <small className="text-muted">
            {moment(message.sentAt).format("LLLL")}
          </small>
          <footer className="blockquote-footer">
            <small className="text-muted">{message.name}</small>
          </footer>
        </blockquote>
      ) : (
        <em>No hay mensajes aún</em>
      )}
    </Card>
  );
});

LastMessageCard.propTypes = {
  message: PropTypes.object.isRequired,
};

export default LastMessageCard;
