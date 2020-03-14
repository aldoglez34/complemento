import React from "react";
import { Button, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const QtyPicker = React.memo(
  ({ handleDecrementQty, handleIncrementQty, qty }) => {
    return (
      <div className="d-flex flex-row">
        <Button
          style={{
            outline: "none",
            boxShadow: "none"
          }}
          onClick={handleDecrementQty}
          className="rounded-0"
          variant="light"
          title="Quitar uno"
        >
          <i className="fas fa-minus text-danger" />
        </Button>
        <FormControl
          readOnly
          className="text-right border border-light rounded-0"
          style={{
            outline: "none",
            boxShadow: "none"
          }}
          value={qty}
        />
        <Button
          style={{
            outline: "none",
            boxShadow: "none"
          }}
          onClick={handleIncrementQty}
          className="rounded-0"
          variant="light"
          title="Agregar uno"
        >
          <i className="fas fa-plus text-danger" />
        </Button>
      </div>
    );
  }
);

QtyPicker.propTypes = {
  handleDecrementQty: PropTypes.func.isRequired,
  handleIncrementQty: PropTypes.func.isRequired,
  qty: PropTypes.number.isRequired
};

export default QtyPicker;
