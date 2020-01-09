import React, { useState } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";

MessagesRow.propTypes = {
  message: PropTypes.object.isRequired
};

function MessagesRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.message.sentAt}</td>
        <td className="text-center">{props.message.name}</td>
        <td className="text-center">{props.message.email}</td>
        <td className="text-center">
          {props.message.message.length > 25
            ? props.message.message.slice(0, 25) + "..."
            : props.message.message}
        </td>
      </tr>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          <Formik
            initialValues={{
              sentAt: props.message.sentAt,
              name: props.message.name,
              email: props.message.email,
              message: props.message.message
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <h4>Detalle del mensaje</h4>
                {/* date */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="sentAt"
                      value={values.sentAt}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* name */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Nombre del cliente</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* email */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* message */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      disabled
                      as="textarea"
                      rows="5"
                      type="text"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MessagesRow;
