import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./helpButton.scss";

function HelpButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button title="Ayuda" className="helpbttn" onClick={handleShow}>
        <i className="fas fa-question qMark" />
      </button>

      <Modal className="modal-open" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Necesitas ayuda?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          En Complemento Natural estamos disponibles para ti. Puedes marcarnos
          al <strong>2281112031</strong> de Lunes a Viernes en horario de 9AM a
          9PM. O si prefieres puedes enviarnos un correo a
          <strong> complemento.natural@gmail.com</strong> y nosotros te
          responderemos a la brevedead.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" className="mr-auto" onClick={handleClose}>
            <i className="fas fa-angle-double-left mr-1" />
            Seguir comprando
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HelpButton;
