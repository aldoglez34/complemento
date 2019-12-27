import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/actions/cart";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

AddToBagButton.propTypes = {
  product: PropTypes.object.isRequired
};

function AddToBagButton(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    // close modal
    setShow(false);
    // save the position of the window in the localstorage
    localStorage.setItem("last-ypos", window.pageYOffset);
    // refresh the window
    window.location.reload();
  };

  const handleShow = () => {
    dispatch(
      cartActions.addItem({ _id: props.product._id, name: props.product.name })
    );
    setShow(true);
  };

  useEffect(() => {
    // scroll after refreshing
    let ypos = localStorage.getItem("last-ypos");
    if (ypos) {
      window.scrollTo(0, ypos);
      localStorage.removeItem("last-ypos");
    }
  }, []);

  return (
    <>
      <Button
        variant="success"
        block
        onClick={handleShow}
        size={props.size}
        title={props.product.stock > 0 ? "Compra rápida" : "No hay existencias"}
        disabled={props.product.stock > 0 ? false : true}
      >
        Comprar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Producto agregado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El producto <strong>{props.product.name}</strong> ha sido agregado
          exitosamente a tu bolsa de compras.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Sigue comprando
          </Button>
          <Button variant="danger" href="/cart">
            Proceder con el pago
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToBagButton;
