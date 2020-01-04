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
          <p>
            Puedes marcarnos al <strong>2281112031</strong> de Lunes a Viernes
            en horario de 9:00 AM a 9:00 PM. También puedes enviar un correo a{" "}
            <strong>complementonatural@gmail.com</strong>
          </p>
          <p>O si lo prefieres puedes dejarnos un mensaje a continuación:</p>
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
