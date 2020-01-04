import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import "./helpButton.scss";
import { Formik } from "formik";
import * as yup from "yup";

function HelpButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupschema = yup.object({
    name: yup
      .string()
      .min(3, "Nombre demasiado corto")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido")
  });

  return (
    <>
      <button title="Ayuda" className="helpbttn" onClick={handleShow}>
        <i className="fas fa-comments qMark" />
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
          <p>
            O si lo prefieres puedes dejarnos un mensaje con tu correo y
            nosotros nos pondremos en contacto contigo a la brevedad.
          </p>
          <Formik
            initialValues={{
              name: "",
              productCount: ""
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                {/* name */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      maxLength="80"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* productCount */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Ingresa tu mensaje"
                      maxLength="250"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Group className="text-right">
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    className="mr-2"
                  >
                    Cerrar
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Enviar
                  </Button>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="success" className="mr-auto" onClick={handleClose}>
            <i className="fas fa-angle-double-left mr-1" />
            Seguir comprando
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default HelpButton;
