import React, { useState } from "react";
import {
  Container,
  Image,
  Form,
  Button,
  Spinner,
  Col,
  Row,
} from "react-bootstrap";
import API from "../../utils/API";
import Layout from "../../components/Layout";
import Slide from "react-reveal/Slide";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import HelpButton from "../../components/helpbutton/HelpButton";
import { formatNumber } from "../../utils/formatNumber";
import moment from "moment";

const Tracker = React.memo(() => {
  const [sale, setSale] = useState();
  const [showSaleArea, setShowSaleArea] = useState(false);

  const yupschema = yup.object({
    saleId: yup.string().min(24, "Formato inválido").required("Requerido"),
  });

  const formatDate = (date) => {
    let convertedDate = moment(moment(date).format(moment.HTML5_FMT.DATE));
    return convertedDate.format("DD MMM YYYY");
  };

  return (
    <Layout>
      <Container className="my-4">
        <div className="text-center text-md-left">
          <Image
            className="mb-4"
            src="./images/footer/tracking.png"
            width="105"
            height="105"
          />
        </div>

        <h2>Rastreador de Pedidos</h2>
        <hr className="myDivider" />

        <Formik
          initialValues={{
            saleId: "",
          }}
          validationSchema={yupschema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setShowSaleArea(true);
            setSale();
            API.trackSale(values.saleId)
              .then((res) => {
                setSale(res.data);
                setSubmitting(false);
              })
              .catch((err) => {
                console.log(err.response);
                err.response.data.msg
                  ? alert(err.response.data.msg)
                  : alert("Ocurrió un error al buscar el código del pedido.");
              });
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
            <Form noValidate onSubmit={handleSubmit}>
              {/* saleId */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    className="w-25"
                    maxLength="24"
                    type="text"
                    placeholder="Ingresa el código de tu pedido"
                    name="saleId"
                    value={values.saleId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.saleId && !errors.saleId}
                    isInvalid={touched.saleId && !!errors.saleId}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="saleId"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              {/* search button */}
              <Button
                className="shadow-sm"
                variant="warning"
                type="submit"
                disabled={isSubmitting}
              >
                Buscar
              </Button>
            </Form>
          )}
        </Formik>
        <br />
        {/* sale details */}
        {showSaleArea ? (
          <Slide top>
            <h2>Detalle del Pedido</h2>
            <hr className="myDivider" />
            <div className="bg-light rounded mt-4 px-2 py-3">
              {sale ? (
                <Container>
                  <Row>
                    <Col md={6}>
                      {/* status */}
                      <h4>Estatus: </h4>
                      <p className="lead text-danger mb-3 ml-2 ">
                        {sale.status}
                      </p>
                      {/* code */}
                      <h4>Código del pedido: </h4>
                      <p className="lead text-danger mb-3 ml-2 ">{sale._id}</p>
                      {/* address */}
                      <h4>Dirección:</h4>
                      <p className="mb-0">
                        <strong className="ml-2">Calle:</strong>
                        <span className="ml-2">
                          {sale.buyer.address.street}
                        </span>
                      </p>
                      <p className="mb-0">
                        <strong className="ml-2">Colonia:</strong>
                        <span className="ml-2">
                          {sale.buyer.address.neighborhood}
                        </span>
                      </p>
                      <p className="mb-0">
                        <strong className="ml-2">Municipio:</strong>
                        <span className="ml-2">
                          {sale.buyer.address.municipality}
                        </span>
                      </p>
                      <p className="mb-0">
                        <strong className="ml-2">Ciudad:</strong>
                        <span className="ml-2">{sale.buyer.address.city}</span>
                      </p>
                      <p className="mb-0">
                        <strong className="ml-2">Estado:</strong>
                        <span className="ml-2">{sale.buyer.address.state}</span>
                      </p>
                      <p className="mb-3">
                        <strong className="ml-2">Código postal:</strong>
                        <span className="ml-2">
                          {sale.buyer.address.zipCode}
                        </span>
                      </p>
                      <h4>Comprador:</h4>
                      <p className="mb-0">
                        <strong className="ml-2">Nombre:</strong>
                        <span className="ml-2">{sale.buyer.name}</span>
                      </p>
                      <p className="mb-0">
                        <strong className="ml-2">Apellido paterno:</strong>
                        <span className="ml-2">{sale.buyer.firstSurname}</span>
                      </p>
                      <p className="mb-0">
                        <strong className="ml-2">Apellido materno:</strong>
                        <span className="ml-2">{sale.buyer.secondSurname}</span>
                      </p>
                      <p className="mb-0">
                        <strong className="ml-2">Teléfono:</strong>
                        <span className="ml-2">{sale.buyer.phone}</span>
                      </p>
                      <p className="mb-0">
                        <strong className="ml-2">Correo electrónico:</strong>
                        <span className="ml-2">{sale.buyer.email}</span>
                      </p>
                    </Col>
                    <Col md={6}>
                      {/* date */}
                      <h4 className="mt-3 mt-md-0">Fecha de compra: </h4>
                      <span className="ml-2 lead">
                        {formatDate(sale.saleDate)}
                      </span>
                      {/* subTotal */}
                      <h4 className="mt-3">Sub-total: </h4>
                      <span className="ml-2 lead">
                        {formatNumber(sale.subTotal)}
                      </span>
                      {/* shipment */}
                      <h4 className="mt-3">Costo de envío: </h4>
                      <span className="ml-2 lead">
                        {formatNumber(sale.shipment)}
                      </span>
                      {/* grandTotal */}
                      <h4 className="mt-3">Total: </h4>
                      <span className="ml-2 lead">
                        {formatNumber(sale.grandTotal)}
                      </span>
                      {/* productos */}
                      <h4 className="mt-3">Productos: </h4>
                      <ul className="list-unstyled ml-2">
                        {sale.products.map((p) => {
                          return (
                            <li key={p.name}>
                              {p.name +
                                " (" +
                                p.qty +
                                ")" +
                                " a " +
                                formatNumber(p.salePrice) +
                                " = " +
                                formatNumber(p.totalByProduct)}
                            </li>
                          );
                        })}
                      </ul>
                    </Col>
                  </Row>
                </Container>
              ) : (
                <div className="text-center my-4">
                  <Spinner variant="warning" animation="grow" role="status" />
                </div>
              )}
            </div>
          </Slide>
        ) : null}

        <HelpButton />
      </Container>
    </Layout>
  );
});

export default Tracker;
