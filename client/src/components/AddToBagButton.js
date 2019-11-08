import React, { useState, useEffect } from "react";
import { OverlayTrigger, Tooltip, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

AddToBagButton.propTypes = {
  product: PropTypes.object.isRequired
};

function AddToBagButton(props) {
  // state used by the modal
  const [show, setShow] = useState(false);

  // closing modal
  const handleClose = () => {
    // close modal
    setShow(false);
    // steps to refresh the page
    // save the position of the window in the localstorage
    localStorage.setItem("last-ypos", window.pageYOffset);
    // refresh the window
    window.location.reload();
  };

  // showing modal
  const handleShow = () => {
    // get the counter and increase it
    let counter = localStorage.getItem("cn_counter");
    counter++;
    // save the new item
    localStorage.setItem("cn_item" + counter, props.product._id);
    // set the increased counter back in the local storage
    localStorage.setItem("cn_counter", counter);
    // show modal
    setShow(true);
  };

  const scrollTopIfNeeded = () => {
    let ypos = localStorage.getItem("last-ypos");
    if (ypos) {
      window.scrollTo(0, ypos);
      localStorage.removeItem("last-ypos");
    }
  };

  useEffect(() => {
    scrollTopIfNeeded();
  }, []);

  return props.product.stock > 0 ? (
    <>
      <Button variant="success" block onClick={handleShow}>
        Agregar
        <i className="fas fa-shopping-bag ml-1" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          El producto <strong>{props.product.name}</strong> ha sido agregado
          exitosamente a tu bolsa de compras.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" href="/cart">
            Ir a mis compras
            <i className="fas fa-shopping-bag ml-1" />
            <i className="fas fa-angle-double-right ml-1" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <>
      <OverlayTrigger
        overlay={
          <Tooltip id="tooltip-disabled">No disponible por el momento</Tooltip>
        }
      >
        <span className="w-100">
          <Button
            disabled
            block
            variant="success"
            style={{ pointerEvents: "none" }}
          >
            Agregar
            <i className="fas fa-shopping-bag ml-1" />
          </Button>
        </span>
      </OverlayTrigger>
    </>
  );
}

export default AddToBagButton;
