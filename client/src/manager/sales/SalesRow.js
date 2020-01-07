import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import API from "../../utils/API";

SalesRow.propTypes = {
  sale: PropTypes.object.isRequired
};

function SalesRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td className="text-center">{props.sale.products.length}</td>
        <td className="text-center">{props.sale.subTotal}</td>
        <td className="text-center">{props.sale.shipment}</td>
        <td className="text-center">{props.sale.grandTotal}</td>
        <td>{props.sale.client ? props.sale.client : null}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de venta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              products: props.sale.products,
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

export default SalesRow;
