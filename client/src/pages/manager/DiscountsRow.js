import React, { useState } from "react";
import { Button, Modal, Form, Col, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

DiscountsRow.propTypes = {
  discount: PropTypes.object.isRequired
};

function DiscountsRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const calculateNewPrice = (oldPrice, percentage) => {
    return oldPrice * (percentage / 100);
  };

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.discount.name}</td>
        <td className="text-center">{"$" + props.discount.purchasePrice}</td>
        <td className="text-center">{"$" + props.discount.salePrice}</td>
        <td className="text-center">
          {props.discount.discount.percentage + "%"}
        </td>
        <td className="text-center">
          {"$" + props.discount.discount.newPrice}
        </td>
      </tr>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Detalle</Modal.Title>
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
                      value={calculateNewPrice(
                        values.salePrice,
                        values.percentage
                      )}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* purchasePrice */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
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
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Precio de venta</Form.Label>
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
                </Form.Row>
                {/* percentage */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Descuento</Form.Label>
                    <Form.Control
                      name="clientAbr"
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
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Nuevo precio de venta</Form.Label>
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
                </Form.Row>
                {/* buttons */}
                <Form.Group className="text-right">
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    className="mr-2"
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Guardar cambios
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

export default DiscountsRow;
