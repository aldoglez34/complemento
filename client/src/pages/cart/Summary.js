import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const Summary = React.memo(({ counter, subTotal, shipment, total }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex flex-row">
          <span className="text-muted">Cantidad de productos:</span>
          <strong className="ml-auto">{counter}</strong>
        </div>
        <div className="d-flex flex-row">
          <span className="text-muted">Subtotal:</span>
          <strong className="ml-auto">{subTotal}</strong>
        </div>
        <div className="d-flex flex-row">
          <span className="text-muted">Envío:</span>
          <strong className="ml-auto">{shipment}</strong>
        </div>
        <hr />
        <div className="d-flex flex-row">
          <h4 className="m-0 text-success">Total:</h4>
          <h4 className="ml-auto text-success">{total}</h4>
        </div>
      </Card.Body>
    </Card>
  );
});

Summary.propTypes = {
  counter: PropTypes.number.isRequired,
  subTotal: PropTypes.string.isRequired,
  shipment: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired
};

export default Summary;
