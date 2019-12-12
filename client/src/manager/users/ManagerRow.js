import React, { useState } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";

ManagerRow.propTypes = {
  manager: PropTypes.object.isRequired
};

function ManagerRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.manager.name}</td>
        <td>{props.manager.firstSurname}</td>
        <td>{props.manager.secondSurname}</td>
        <td>{props.manager.email}</td>
      </tr>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="mb-0">Manager</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.manager._id,
              name: props.manager.name,
              firstSurname: props.manager.firstSurname,
              secondSurname: props.manager.secondSurname,
              email: props.manager.email
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form noValidate>
                {/* name */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
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
                  {/* firstSurname */}
                  <Form.Group as={Col} md={4}>
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
                  {/* secondSurname */}
                  <Form.Group as={Col} md={4}>
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
                  <Form.Group as={Col} md={6}>
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
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ManagerRow;
