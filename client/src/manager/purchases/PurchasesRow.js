import React, { useState } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";

PurchasesRow.propTypes = {
  purchase: PropTypes.object.isRequired
};

function PurchasesRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.purchase.grandTotal}</td>
        <td>{props.purchase.createdAt}</td>
      </tr>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          <Formik
            initialValues={{
              grandTotal: props.sale.saleDate,
              createdAt: props.sale.createdAt
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <h4>Detalle de venta</h4>
                {/* grand total */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Gran total</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="grandTotal"
                      value={values.grandTotal}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* date */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Productos</Form.Label>
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
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PurchasesRow;
