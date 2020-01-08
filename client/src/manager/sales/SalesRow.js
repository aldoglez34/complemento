import React, { useState } from "react";
import { Modal, Form, Col, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";

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
        <td>{props.sale.purchaseDate}</td>
        <td className="text-center">{props.sale.products.length}</td>
        <td className="text-center">{props.sale.subTotal}</td>
        <td className="text-center">{props.sale.shipment}</td>
        <td className="text-center">{props.sale.grandTotal}</td>
        <td>{props.sale.client ? props.sale.client.email : ""}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de venta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              purchaseDate: props.sale.purchaseDate,
              subTotal: props.sale.subTotal,
              shipment: props.sale.shipment,
              grandTotal: props.sale.grandTotal,
              client: props.sale.client ? props.sale.client.email : ""
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="purchaseDate"
                      value={values.purchaseDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Label>Productos</Form.Label>
                </Form.Row>
                <ul>
                  {props.sale.products.map(p => {
                    return (
                      <li
                        key={p.product._id}
                      >{`${p.product.name} x ${p.qty} a ${p.salePrice}`}</li>
                    );
                  })}
                </ul>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Subtotal</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="subTotal"
                        value={values.subTotal}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Envío</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="shipment"
                        value={values.shipment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Gran total</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        name="grandTotal"
                        value={values.grandTotal}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Cliente</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="client"
                      value={values.client}
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

export default SalesRow;
