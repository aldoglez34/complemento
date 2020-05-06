import React from "react";
import { Button, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const QtyPickerForCart = React.memo(
  ({ qty, _id, handleDecrementQty, handleIncrementQty }) => {
    return (
      <div className="d-flex flex-row">
        <Button
          style={{
            outline: "none",
            boxShadow: "none",
          }}
          size="sm"
          onClick={() => handleDecrementQty(_id)}
          className="rounded-0"
          variant="light"
          title="Quitar uno"
        >
          <i className="fas fa-minus text-danger" />
        </Button>
        <FormControl
          readOnly
          className="text-right rounded-0 qtypickerforcart"
          style={{
            outline: "none",
            boxShadow: "none",
          }}
          value={qty}
        />
        <Button
          style={{
            outline: "none",
            boxShadow: "none",
          }}
          onClick={() => handleIncrementQty(_id)}
          className="rounded-0"
          variant="light"
          title="Agregar uno"
          size="sm"
        >
          <i className="fas fa-plus text-danger" />
        </Button>
      </div>
    );
  }
);

QtyPickerForCart.propTypes = {
  qty: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  handleDecrementQty: PropTypes.func.isRequired,
  handleIncrementQty: PropTypes.func.isRequired,
};

export default QtyPickerForCart;
