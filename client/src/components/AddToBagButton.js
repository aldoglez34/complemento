import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../redux-actions/cart";
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
    dispatch(cartActions.addItem(props.product._id));
    // get the counter and increase it
    // let counter = localStorage.getItem("cn_counter");
    // counter++;
    // // save the new item
    // localStorage.setItem("cn_item" + counter, props.product._id);
    // // set the increased counter back in the local storage
    // localStorage.setItem("cn_counter", counter);
    // show modal
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

  return props.product.stock > 0 ? (
    <>
      <Button className="addtobagbuttonstyle" block onClick={handleShow}>
        Agregar
        <i className="fas fa-shopping-bag ml-1" />
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
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button className="globalbttn" href="/cart">
            Ir a mis compras
            <i className="fas fa-shopping-bag ml-1" />
            <i className="fas fa-angle-double-right ml-1" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <Button
      disabled
      block
      className="addtobagbuttonstyle"
      title="No disponible por el momento"
    >
      Agregar
      <i className="fas fa-shopping-bag ml-1" />
    </Button>
  );
}

export default AddToBagButton;
