import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./helpButton.css";

function HelpButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        title="Ayuda"
        className="d-flex justify-content-center align-items-center p-0 shadow helpbttn"
        onClick={handleShow}
      >
        ¿Ayuda?
        {/* <i className="fas fa-question-circle h1 p-0 m-0 text-light" /> */}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Necesitas ayuda?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Body, links, stuff</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HelpButton;
