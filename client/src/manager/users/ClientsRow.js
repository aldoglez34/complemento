import React, { useState } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";
const moment = require("moment");

const ClientsRow = React.memo(({ client }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const printFavorites = () => {
    let text = [];
    client.favorites.forEach((f) => {
      let { name } = f;
      text.push(name + "\n");
    });
    return text.join("");
  };

  const formatDate = (date) => {
    let convertedDate = moment(moment(date).format(moment.HTML5_FMT.DATE));
    return convertedDate.format("DD/MMMM/YYYY");
  };

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{client.name}</td>
        <td>{client.firstSurname}</td>
        <td>{client.email}</td>
        <td className="text-right">{client.favorites.length}</td>
        <td className="text-right">{formatDate(client.createdAt)}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light">
          <Formik
            initialValues={{
              _id: client._id,
              name: client.name,
              firstSurname: client.firstSurname,
              email: client.email,
              phone: client.phone,
              favorites: printFavorites(),
              createdAt: client.createdAt,
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form noValidate>
                <h3 className="managerTitleModal">CLIENTE</h3>
                <hr className="myDivider" />
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
  client: PropTypes.object.isRequired,
};

export default ClientsRow;
