import React, { useState } from "react";
import { Button, Modal, Form, Col, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

DiscountsCreateRow.propTypes = {
  notdiscount: PropTypes.object.isRequired
};

function DiscountsCreateRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const discountSchema = yup.object({
    percentage: yup
      .mixed()
      .notOneOf([0], "Requerido")
      .required("Requerido")
  });

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.notdiscount.name}</td>
        <td className="text-center">{"$" + props.notdiscount.purchasePrice}</td>
        <td className="text-center">{"$" + props.notdiscount.salePrice}</td>
        <td className="text-center">{props.notdiscount.unitsSold}</td>
        <td className="text-center">{props.notdiscount.stock}</td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Promoción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.notdiscount._id,
              name: props.notdiscount.name,
              purchasePrice: props.notdiscount.purchasePrice,
              salePrice: props.notdiscount.salePrice,
              unitsSold: props.notdiscount.unitsSold,
              stock: props.notdiscount.stock,
              percentage: 0,
              newPrice: 0
            }}
            validationSchema={discountSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              values.newPrice =
                values.salePrice - values.salePrice * (values.percentage / 100);
              API.newDiscount(values)
                .then(res => {
                  if (res.data.errmsg) {
                    alert("ERROR => " + res.data.errmsg);
                    setSubmitting(false);
                  } else {
                    alert("Descuento creado");
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
                      disabled
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* purchase price */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
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
                  {/* units sold */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Unidades vendidas</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="unitsSold"
                      value={values.unitsSold}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  {/* stock */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Existencia</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="stock"
                      value={values.stock}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* sale price */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
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
                  {/* percentage */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Descuento
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
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
                    <ErrorMessage
                      className="text-danger"
                      name="percentage"
                      component="div"
                    />
                  </Form.Group>
                  {/* new price */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Nuevo precio</Form.Label>
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
                </Form.Row>
                {/* buttons */}
                <Form.Group className="text-right">
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    className="mr-2"
                  >
                    Cerrar
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Crear
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

export default DiscountsCreateRow;
