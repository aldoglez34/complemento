import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

AddToShoppingBadBttn.propTypes = {
  product: PropTypes.object.isRequired
};

function AddToShoppingBadBttn(props) {
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
    localStorage.setItem("cn_item" + counter, props.product.productId);
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

  return (
    <>
      <Button
        variant="outline-success"
        block
        onClick={handleShow}
        title="Agregar a tu bolsa de compras"
      >
        Agregar
        <i className="fas fa-shopping-bag ml-1" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Éxito.</Modal.Title>
        </Modal.Header>
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
  );
}

export default AddToShoppingBadBttn;
