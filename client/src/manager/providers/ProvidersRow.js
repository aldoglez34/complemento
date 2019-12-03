import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../../utils/API";

ProvidersRow.propTypes = {
  provider: PropTypes.object.isRequired
};

function ProvidersRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const providerSchema = yup.object({
    name: yup
      .string()
      .min(3, "Nombre demasiado corto")
      .required("Requerido"),
    rfc: yup
      .string()
      .length(12, "Formato incorrecto")
      .required("Requerido"),
    email: yup
      .string()
      .email("Formato de email incorrecto")
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Formato incorrecto")
      .length(10, "Formato incorrecto"),
    fullAddress: yup.string()
  });

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.provider.name}</td>
        <td>{props.provider.rfc}</td>
        <td>{props.provider.email}</td>
        <td>{props.provider.phone}</td>
        <td>{props.provider.fullAddress}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de Proveedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.provider._id,
              name: props.provider.name,
              rfc: props.provider.rfc,
              email: props.provider.email,
              phone: props.provider.phone,
              fullAddress: props.provider.fullAddress
            }}
            validationSchema={providerSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              API.updateProvider(values)
                .then(res => {
                  if (res.data.errmsg) {
                    alert("ERROR => " + res.data.errmsg);
                    setSubmitting(false);
                  } else {
                    alert("Proveedor actualizada");
                    handleClose();
                    window.location.reload();
                  }
                })
                .catch(err => console.log(err));
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
                      maxLength="100"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="name"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>RFC</Form.Label>
                    <Form.Control
                      maxLength="12"
                      type="text"
                      name="rfc"
                      value={values.rfc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ textTransform: "uppercase" }}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="rfc"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                      maxLength="100"
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="email"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      maxLength="10"
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="phone"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      maxLength="250"
                      type="text"
                      name="fullAddress"
                      value={values.fullAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="fullAddress"
                      component="div"
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
                    Guardar
                  </Button>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProvidersRow;
