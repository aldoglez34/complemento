import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import "./helpButton.scss";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

function HelpButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupschema = yup.object({
    name: yup
      .string()
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .min(3, "Nombre demasiado corto")
      .required("Requerido"),
    email: yup
      .string()
      .email("Formato de correo incorrecto")
      .required("Requerido"),
    message: yup.string().required("Requerido")
  });

  return (
    <>
      <button title="Ayuda" className="helpbttn" onClick={handleShow}>
        <i className="fas fa-comments qMark" />
      </button>

      <Modal className="modal-open" show={show} onHide={handleClose}>
        <Modal.Body>
          <h4>¿Necesitas ayuda?</h4>
          <p>
            ¿Tienes dudas sobre algún producto? Envíanos tus
            preguntas/comentarios y nosotros nos pondremos en contacto contigo.
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: ""
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              API.postMessage(values)
                .then(res => {
                  if (!res.data.errors) {
                    alert(
                      "Mensaje enviado con éxito. Nos pondremos en contacto contigo al correo proporcionado. "
                    );
                    handleClose();
                  } else {
                    alert(res.data.errors.message);
                  }
                })
                .catch(err => console.log(err));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                {/* name */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Nombre</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="150"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.name && !errors.name}
                      isInvalid={touched.name && !!errors.name}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="name"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* email */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Correo electrónico</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="150"
                      type="text"
                      placeholder="Ingresa tu correo"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="email"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* message */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Mensaje</strong>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Ingresa tu mensaje"
                      maxLength="500"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.message && !errors.message}
                      isInvalid={touched.message && !!errors.message}
                    />
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Row className="px-1">
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                  <Button
                    className="ml-auto"
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Enviar
                  </Button>
                </Form.Row>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HelpButton;
