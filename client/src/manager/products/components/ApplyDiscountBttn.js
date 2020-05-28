import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Col,
  Image,
  Row,
  ListGroup,
} from "react-bootstrap";
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
        <i className="fas fa-plus-square mr-1" />
        Descuento
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h3 className="text-center mb-4">{product.name}</h3>
          <Row className="mb-4">
            <Col md={{ span: 3, offset: 2 }}>
              <Image
                src={"/images/products/" + product.photo}
                width="84"
                height="150"
                alt={product.photo}
              />
            </Col>
            <Col md="auto">
              <p className="mb-1">
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
              <p className="mb-1">
                <strong>Unidades vendidas:</strong>
                <span className="ml-2">{product.unitsSold}</span>
              </p>
              <p className="mb-0">
                <strong>Existencia:</strong>
                <span className="ml-2">{product.stock}</span>
              </p>
            </Col>
          </Row>

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
                    <PickDiscountDate />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      <strong>Fecha de término</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <PickDiscountDate />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Porcentaje</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <ListGroup horizontal>
                      <ListGroup.Item className="text-center" action active>
                        5%
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" action>
                        10%
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" action>
                        15%
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" action>
                        20%
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" action>
                        25%
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" action>
                        30%
                      </ListGroup.Item>
                    </ListGroup>
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <Form.Group as={Col}>
                    <p className="mb-1">
                      <strong>Nuevo precio de venta:</strong>
                      <strong className="ml-2 text-danger">
                        {formatNumber(product.price.salePrice)}
                      </strong>
                    </p>
                    <p className="mb-1">
                      <strong>Nueva utilidad:</strong>
                      <strong className="ml-2 text-danger">
                        {formatNumber(product.price.salePrice)}
                      </strong>
                    </p>
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
                    Aplicar Descuento
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
