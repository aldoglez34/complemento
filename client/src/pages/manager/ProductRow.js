import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

ProductRow.propTypes = {
  product: PropTypes.object.isRequired
};

function ProductRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr onClick={handleShow}>
        <td>{props.product.name}</td>
        <td>{props.product.category}</td>
        <td>{props.product.purchasePrice}</td>
        <td>{props.product.salePrice}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Datos del producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>Aquí va la info del producto: {props.product.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={() => alert("datos guardados")}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductRow;
