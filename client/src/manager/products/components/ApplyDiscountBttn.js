import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { Formik } from "formik";
import { formatNumber } from "../../../utils/formatNumber";
import PropTypes from "prop-types";
import PickDiscountDate from "../components/PickDiscountDate";

const ApplyDiscountBttn = React.memo(({ product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" size="sm" onClick={handleShow}>
        Aplicar descuento
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h3>Aplicar Descuento</h3>
          <p className="mt-3 mb-1">
            <strong>Producto:</strong>
            <span className="ml-2">{product.name}</span>
          </p>
          <p className="mb-1">
            <strong>Precio de la última compra:</strong>
            <span className="ml-2">
              {formatNumber(product.price.latestPurchasePrice)}
            </span>
          </p>
          <p className="mb-1">
            <strong>Precio de venta:</strong>
            <span className="ml-2">
              {formatNumber(product.price.salePrice)}
            </span>
          </p>
          <hr />
          <Formik
            initialValues={{
              name: "",
            }}
            // validationSchema={yupschema}
            validateOnBlur={true}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
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
              <Form className="mt-2" noValidate onSubmit={handleSubmit}>
                {/* dates */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      <strong>Fecha de inicio</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    {/* <Form.Control
                      maxLength="150"
                      type="text"
                      placeholder="Ingresa el nombre"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.name && !errors.name}
                      isInvalid={touched.name && !!errors.name}
                    /> */}
                    <PickDiscountDate />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      <strong>Fecha de término</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    {/* <Form.Control
                      maxLength="150"
                      type="text"
                      placeholder="Ingresa el nombre"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.name && !errors.name}
                      isInvalid={touched.name && !!errors.name}
                    /> */}
                    <PickDiscountDate />
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Group>
                  <Button
                    className="shadow-sm"
                    variant="warning"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Aplicar
                  </Button>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
});

ApplyDiscountBttn.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ApplyDiscountBttn;
