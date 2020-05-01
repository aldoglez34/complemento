import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import APIManager from "../../utils/APIManager";

const ProvidersRow = React.memo(({ provider }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupschema = yup.object({
    name: yup.string().min(1, "Nombre demasiado corto").required("Requerido"),
    rfc: yup.string().length(12, "Formato incorrecto").required("Requerido"),
    email: yup
      .string()
      .email("Formato de correo incorrecto")
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(10, "Formato incorrecto")
      .required("Requerido"),
    fullAddress: yup
      .string()
      .min(3, "Dirección demasiado corta")
      .required("Requerido"),
  });

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{provider.name}</td>
        <td>{provider.rfc}</td>
        <td>{provider.email}</td>
        <td>{provider.phone}</td>
        <td>{provider.fullAddress}</td>
        <td className="text-center">{provider.productCount}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light">
          <Formik
            initialValues={{
              _id: provider._id,
              name: provider.name,
              rfc: provider.rfc,
              email: provider.email,
              phone: provider.phone,
              fullAddress: provider.fullAddress,
              productCount: provider.productCount,
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              APIManager.mngr_updateProvider(values)
                .then((res) => {
                  if (res.data.errmsg) {
                    alert("ERROR => " + res.data.errmsg);
                    setSubmitting(false);
                  } else {
                    alert("Proveedor actualizado");
                    handleClose();
                    window.location.reload();
                  }
                })
                .catch((err) => {
                  console.log(err.response);
                  err.response.data.msg
                    ? alert(err.response.data.msg)
                    : alert("Ocurrió un error al actualizar el proveedor.");
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <h3 className="managerTitleModal">DETALLE</h3>
                <hr className="myDivider" />
                {/* name */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Nombre</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
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
                    <Form.Label>
                      <strong>RFC</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
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
                    <Form.Label>
                      <strong>Correo</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
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
                    <Form.Label>
                      <strong>Teléfono</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
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
                    <Form.Label>
                      <strong>Dirección</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
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
                    <Form.Label>
                      <strong>Productos</strong>
                    </Form.Label>
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
                <div className="text-center mt-2">
                  <Button
                    size="lg"
                    variant="dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    GUARDAR
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
});

ProvidersRow.propTypes = {
  provider: PropTypes.object.isRequired,
};

export default ProvidersRow;
