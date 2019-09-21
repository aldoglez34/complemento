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
        className="helpbttn d-flex justify-content-center align-items-center p-0"
        onClick={handleShow}
      >
        <i className="arrow fas fa-question text-white h2 p-0 m-0" />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Necesitas ayuda?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Body, links, stuff</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HelpButton;
