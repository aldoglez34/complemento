import React, { useState } from "react";
import { Button, Modal, Form, Col, InputGroup, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";

DiscountsRow.propTypes = {
  discount: PropTypes.object.isRequired
};

function DiscountsRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>
          {props.discount.name}
          {props.discount.stock === 0 ? (
            <Badge
              pill
              className="ml-1"
              variant="warning"
              style={{ fontFamily: "Arial" }}
            >
              Sin existencias
            </Badge>
          ) : null}
          {props.discount.discount.hasDiscount ? (
            <Badge
              title="Este producto tiene descuento"
              pill
              className="ml-1"
              variant="warning"
              style={{ fontFamily: "Arial" }}
            >
              {props.discount.discount.percentage + "%"}
            </Badge>
          ) : null}
        </td>
        <td className="text-center">{"$" + props.discount.purchasePrice}</td>
        <td className="text-center">{"$" + props.discount.salePrice}</td>
        <td className="text-center">
          {"$"}
          {props.discount.salePrice - props.discount.purchasePrice}
        </td>
        <td className="text-center">
          {"$" + props.discount.discount.newPrice}
        </td>
        <td className="text-center">
          {"$"}
          {props.discount.discount.newPrice - props.discount.purchasePrice}
        </td>
      </tr>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Descuento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.discount._id,
              name: props.discount.name,
              purchasePrice: props.discount.purchasePrice,
              salePrice: props.discount.salePrice,
              percentage: props.discount.discount.percentage,
              newPrice: props.discount.discount.newPrice
            }}
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
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Precio de compra</Form.Label>
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
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Venta (original)</Form.Label>
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
                  {/* salePrice */}
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Venta (con descuento)</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="newPrice"
                        value={values.newPrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                  {/* profit */}
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Utilidad</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="salePrice"
                        value={values.newPrice - values.purchasePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                {/* percentage */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Descuento</Form.Label>
                    <Form.Control
                      name="percentage"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      as="select"
                      defaultValue={values.percentage}
                    >
                      <option value={10}>10%</option>
                      <option value={14}>15%</option>
                      <option value={20}>20%</option>
                      <option value={30}>30%</option>
                      <option value={40}>40%</option>
                      <option value={50}>50%</option>
                    </Form.Control>
                  </Form.Group>
                  {/* newPrice */}
                  <Form.Group as={Col} md={3}>
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
                          values.salePrice -
                          values.salePrice * (values.percentage / 100)
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                  {/* new profit */}
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Utilidad (nueva)</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="newPrice"
                        value={values.newPrice - values.purchasePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Row className="px-1 mt-2">
                  <Button variant="danger" onClick={handleClose}>
                    <i className="fas fa-times-circle mr-1" />
                    Terminar
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

export default DiscountsRow;
