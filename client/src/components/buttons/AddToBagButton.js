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
    dispatch(cartActions.addItem({ _id: props.product._id }));
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
        title={
          props.product.stock > 0
            ? null
            : "Este producto no se encuentra disponible"
        }
        disabled={props.product.stock > 0 ? false : true}
      >
        Comprar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h4 className="mb-3">Producto agreado a tu bolsa</h4>
          <div className="mb-3">
            El producto <strong>{props.product.name}</strong> ha sido agregado
            exitosamente a tu bolsa de compras.
          </div>
          <div className="d-flex flex-row">
            <Button variant="outline-success" onClick={handleClose}>
              <i className="fas fa-angle-double-left mr-1" />
              Seguir comprando
            </Button>
            <Button className="ml-auto" variant="outline-danger" href="/cart">
              Proceder con el pago
              <i className="fas fa-angle-double-right ml-1" />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddToBagButton;
