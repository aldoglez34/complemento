import React from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

function BttnNoFav() {
  return (
    <>
      <OverlayTrigger
        overlay={
          <Tooltip id="tooltip-disabled">
            Inicia sesión para guardar en tus favoritos.
          </Tooltip>
        }
      >
        <span className="d-inline-block">
          <Button
            disabled
            variant="secondary"
            className="border-0 ml-1"
            style={{ pointerEvents: "none" }}
          >
            <i className="fas fa-heart" />
          </Button>
        </span>
      </OverlayTrigger>
    </>
  );
}

export default BttnNoFav;
