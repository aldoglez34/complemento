import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

ProvidersRow.propTypes = {
  provider: PropTypes.object.isRequired
};

function ProvidersRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupschema = yup.object({
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
      .email("Formato de correo incorrecto")
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(10, "Formato incorrecto"),
    fullAddress: yup.string().min(3, "Dirección demasiado corta")
  });

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.provider.name}</td>
        <td>{props.provider.rfc}</td>
        <td>{props.provider.email}</td>
        <td>{props.provider.phone}</td>
        <td>{props.provider.fullAddress}</td>
        <td className="text-center">{props.provider.productCount}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="mb-0">Editar Proveedor</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.provider._id,
              name: props.provider.name,
              rfc: props.provider.rfc,
              email: props.provider.email,
              phone: props.provider.phone,
              fullAddress: props.provider.fullAddress,
              productCount: props.provider.productCount
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              API.updateProvider(values)
                .then(res => {
                  if (res.data.errmsg) {
                    alert("ERROR => " + res.data.errmsg);
                    setSubmitting(false);
                  } else {
                    alert("Proveedor actualizado");
                    handleClose();
                    window.location.reload();
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
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      maxLength="150"
                      type="text"
                      placeholder="Ingresa el nombre"
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
                {/* rfc */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>RFC</Form.Label>
                    <Form.Control
                      maxLength="12"
                      type="text"
                      placeholder="Ingresa el RFC"
                      name="rfc"
                      value={values.rfc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.rfc && !errors.rfc}
                      isInvalid={touched.rfc && !!errors.rfc}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="rfc"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* email */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                      maxLength="100"
                      type="text"
                      placeholder="Ingresa el correo"
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
                {/* phone */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      maxLength="10"
                      type="text"
                      placeholder="Ingresa el teléfono"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.phone && !errors.phone}
                      isInvalid={touched.phone && !!errors.phone}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="phone"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* full address */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      maxLength="200"
                      type="text"
                      placeholder="Ingresa la dirección"
                      name="fullAddress"
                      value={values.fullAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.fullAddress && !errors.fullAddress}
                      isInvalid={touched.fullAddress && !!errors.fullAddress}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="fullAddress"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* product count */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Productos</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="productCount"
                      value={values.productCount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.productCount && !errors.productCount}
                      isInvalid={touched.productCount && !!errors.productCount}
                    />
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Row className="px-1 mt-2">
                  <Button disabled variant="danger" onClick={handleClose}>
                    <i className="fas fa-times-circle mr-1" />
                    Borrar
                  </Button>
                  <Button
                    className="ml-auto"
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <i className="fas fa-check-circle mr-1" />
                    Guardar
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

export default ProvidersRow;