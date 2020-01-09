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

  const printProducts = () => {
    let text = [];
    props.sale.products.forEach(p => {
      let { qty, salePrice } = p;
      let name = p.product.name;
      let x = qty
        .toString()
        .concat(" ", name, " a ", salePrice.toString(), "\n");
      text.push(x);
    });
    return text.join("");
  };

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

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          <Formik
            initialValues={{
              purchaseDate: props.sale.purchaseDate,
              products: printProducts(),
              subTotal: props.sale.subTotal,
              shipment: props.sale.shipment,
              grandTotal: props.sale.grandTotal,
              clientName: props.sale.client
                ? props.sale.client.name +
                  " " +
                  props.sale.client.firstSurname +
                  " " +
                  props.sale.client.secondSurname
                : "",
              clientEmail: props.sale.client ? props.sale.client.email : "",
              clientPhone: props.sale.client ? props.sale.client.phone : "",
              state: props.sale.address.state,
              city: props.sale.address.city,
              municipality: props.sale.address.municipality,
              neighborhood: props.sale.address.neighborhood,
              street: props.sale.address.street,
              zipcode: props.sale.address.zipCode
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <h4>Detalle de venta</h4>
                {/* date */}
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
                {/* products */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Productos</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="4"
                      disabled
                      type="text"
                      name="products"
                      value={values.products}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* prices */}
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
                {/* client */}
                <h4 className="mt-3">Cliente</h4>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="clientName"
                      value={values.clientName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="clientEmail"
                      value={values.clientEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="clientPhone"
                      value={values.clientPhone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* address */}
                <h4 className="mt-3">Dirección de entrega</h4>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Municipio</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="municipality"
                      value={values.municipality}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Colonia</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="neighborhood"
                      value={values.neighborhood}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={8}>
                    <Form.Label>Calle</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="street"
                      value={values.street}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Código postal</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="zipcode"
                      value={values.zipcode}
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
