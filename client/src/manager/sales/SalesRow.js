import React, { useState } from "react";
import { Modal, Form, Col, InputGroup, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { formatNumber } from "../../utils/formatNumber";
import moment from "moment";

const SalesRow = React.memo(({ sale }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const printProducts = () => {
    let text = [];
    sale.products.forEach((p) => {
      let { qty, salePrice } = p;
      let name = p.name;
      let x = qty
        .toString()
        .concat(" ", name, " a ", salePrice.toString(), "\n");
      text.push(x);
    });
    return text.join("");
  };

  const formatDate = (date) => {
    let convertedDate = moment(moment(date).format(moment.HTML5_FMT.DATE));
    return convertedDate.format("DD/MM/YYYY");
  };

  return (
    <>
      <tr className="rowStyle">
        <td>{sale.status}</td>
        <td className="text-right">{formatDate(sale.saleDate)}</td>
        <td className="text-right">{sale.products.length}</td>
        <td className="text-right">{formatNumber(sale.subTotal)}</td>
        <td className="text-right">{formatNumber(sale.shipment)}</td>
        <td className="text-right">{formatNumber(sale.grandTotal)}</td>
        <td>{sale.buyer.name + " " + sale.buyer.firstSurname}</td>
        <td>{sale.buyer.address.state}</td>
        <td className="text-center">
          <Button onClick={handleShow} variant="info" size="sm">
            <i className="fas fa-search" />
          </Button>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light">
          <Formik
            initialValues={{
              purchaseDate: formatDate(sale.saleDate),
              products: printProducts(),
              subTotal: sale.subTotal,
              shipment: sale.shipment,
              grandTotal: sale.grandTotal,
              clientName:
                sale.buyer.name +
                " " +
                sale.buyer.firstSurname +
                " " +
                sale.buyer.secondSurname,
              clientEmail: sale.buyer ? sale.buyer.email : "",
              clientPhone: sale.buyer ? sale.buyer.phone : "",
              state: sale.buyer.address.state,
              city: sale.buyer.address.city,
              municipality: sale.buyer.address.municipality,
              neighborhood: sale.buyer.address.neighborhood,
              street: sale.buyer.address.street,
              zipcode: sale.buyer.address.zipCode,
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <h3 className="managerTitleModal">VENTA</h3>
                <hr className="myDivider" />
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
                <h3 className="managerTitleModal">CLIENTE</h3>
                <hr className="myDivider" />
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
                <h3 className="managerTitleModal">DIRECCIÓN</h3>
                <hr className="myDivider" />
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
});

SalesRow.propTypes = {
  sale: PropTypes.object.isRequired,
};

export default SalesRow;
