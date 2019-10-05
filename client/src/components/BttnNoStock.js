import React from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

function BttnNoStock() {
  return (
    <>
      <OverlayTrigger
        overlay={
          <Tooltip id="tooltip-disabled">No disponible por el momento.</Tooltip>
        }
      >
        <span className="d-inline-block">
          <Button
            disabled
            variant="secondary"
            style={{ pointerEvents: "none" }}
          >
            Agregar
            <i className="fas fa-shopping-cart ml-1" />
          </Button>
        </span>
      </OverlayTrigger>
    </>
  );
}

export default BttnNoStock;
