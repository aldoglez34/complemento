import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired
};

function AddToCartButton(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    // close modal
    setShow(false);
    // refresh page so the cart counter updates
    window.location.reload();
  };
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

  return (
    <>
      <Button
        variant="outline-success"
        block
        onClick={handleShow}
        title="Agregar a tu carrito"
      >
        Agregar
        <i className="fas fa-shopping-cart ml-1" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Éxito.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El producto <strong>{props.product.name}</strong> ha sido agregado
          exitosamente a tu carrito.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" href="/cart">
            Ir al carrito
            <i className="fas fa-shopping-cart ml-1" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToCartButton;
