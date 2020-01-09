import React, { useState } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";

ClientsRow.propTypes = {
  client: PropTypes.object.isRequired
};

function ClientsRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.client.name}</td>
        <td>{props.client.firstSurname}</td>
        <td>{props.client.secondSurname}</td>
        <td>{props.client.email}</td>
        <td>{props.client.createdAt}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.client._id,
              name: props.client.name,
              firstSurname: props.client.firstSurname,
              secondSurname: props.client.secondSurname,
              email: props.client.email,
              phone: props.client.phone,
              createdAt: props.client.createdAt
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form noValidate>
                <h4>Detalle del cliente</h4>
                {/* name */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
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
                <Form.Row>
                  {/* firstSurname */}
                  <Form.Group as={Col}>
                    <Form.Label>Apellido paterno</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="firstSurname"
                      value={values.firstSurname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  {/* secondSurname */}
                  <Form.Group as={Col}>
                    <Form.Label>Apellido materno</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="secondSurname"
                      value={values.secondSurname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  {/* email */}
                  <Form.Group as={Col}>
                    <Form.Label>Correo</Form.Label>
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
                <Form.Row>
                  {/* phone */}
                  <Form.Group as={Col}>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* createdAt */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Fecha de registro</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="createdAt"
                      value={values.createdAt}
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

export default ClientsRow;
