import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button, Form, Col, InputGroup } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

AddDiscount.propTypes = {
  product: PropTypes.object.isRequired
};

function AddDiscount(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupSchema = yup.object({
    percentage: yup
      .mixed()
      .notOneOf([0], "Requerido")
      .required("Requerido"),
    newProfit: yup
      .number()
      .positive("Debe ser positivo")
      .required("Requerido")
  });

  return (
    <>
      <Button variant="outline-success" className="mr-2" onClick={handleShow}>
        <i className="fas fa-plus-circle mr-1" />
        Descuento
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="mb-0">Descuento</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.product._id,
              name: props.product.name,
              purchasePrice: props.product.purchasePrice,
              salePrice: props.product.salePrice,
              percentage: 0,
              newPrice: "",
              begins: "",
              ends: ""
            }}
            validationSchema={yupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
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
                    <Form.Label>Producto</Form.Label>
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
                {/* purchasePrice */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Compra</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="purchasePrice"
                        value={values.purchasePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                  {/* salePrice */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Venta</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="salePrice"
                        value={values.salePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                  {/* profit */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Utilidad</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="profit"
                        value={values.salePrice - values.purchasePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <hr />
                {/* percentage */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Descuento</Form.Label>
                    <Form.Control
                      as="select"
                      type="text"
                      name="percentage"
                      value={values.percentage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.percentage && !errors.percentage}
                      isInvalid={touched.percentage && !!errors.percentage}
                    >
                      <option value={0} disabled>
                        Elige...
                      </option>
                      <option value={10}>10%</option>
                      <option value={15}>15%</option>
                      <option value={20}>20%</option>
                      <option value={30}>30%</option>
                      <option value={40}>40%</option>
                      <option value={50}>50%</option>
                    </Form.Control>
                  </Form.Group>
                  {/* newPrice */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Venta (nuevo)</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="newPrice"
                        value={
                          values.percentage === 0
                            ? ""
                            : values.salePrice -
                              values.salePrice * (values.percentage / 100)
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                  {/* new profit */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Utilidad (nueva)</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="newProfit"
                        value={
                          values.percentage === 0
                            ? ""
                            : values.salePrice -
                              values.salePrice * (values.percentage / 100) -
                              values.purchasePrice
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.newProfit && !errors.newProfit}
                        isInvalid={touched.newProfit && !!errors.newProfit}
                      />
                    </InputGroup>
                    <ErrorMessage
                      className="text-danger"
                      name="newProfit"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* dates */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Inicio</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="begins"
                      value={values.begins}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Término</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="ends"
                      value={values.ends}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Row className="px-1 mt-2">
                  <Button
                    className="ml-auto"
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <i className="fas fa-check-circle mr-1" />
                    Crear
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

export default AddDiscount;
