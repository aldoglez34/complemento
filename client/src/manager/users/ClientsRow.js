import React, { useState } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";

const ClientsRow = React.memo(function ClientsRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const printFavorites = () => {
    let text = [];
    props.client.favorites.forEach(f => {
      let { name } = f;
      text.push(name + "\n");
    });
    return text.join("");
  };

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.client.name}</td>
        <td>{props.client.firstSurname}</td>
        <td>{props.client.email}</td>
        <td className="text-center">{props.client.favorites.length}</td>
        <td>{props.client.createdAt}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.client._id,
              name: props.client.name,
              firstSurname: props.client.firstSurname,
              email: props.client.email,
              phone: props.client.phone,
              favorites: printFavorites(),
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
                {/* firstSurname */}
                <Form.Row>
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
                {/* email */}
                <Form.Row>
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
                {/* phone */}
                <Form.Row>
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
                {/* favorites */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Favoritos</Form.Label>
                    <Form.Control
                      disabled
                      as="textarea"
                      rows="5"
                      type="text"
                      name="favorites"
                      value={values.favorites}
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
});

ClientsRow.propTypes = {
  client: PropTypes.object.isRequired
};

export default ClientsRow;
