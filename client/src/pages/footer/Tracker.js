import React, { useState } from "react";
import { Container, Image, Form, Button, Spinner, Col } from "react-bootstrap";
import API from "../../utils/API";
import Layout from "../../components/Layout";
import Slide from "react-reveal/Slide";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const Tracker = React.memo(() => {
  const [sale, setSale] = useState();
  const [showSaleArea, setShowSaleArea] = useState(false);

  const yupschema = yup.object({
    saleId: yup.string().min(24, "Formato inválido").required("Requerido"),
  });

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

        <h3>Rastreador de pedidos</h3>
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
                  <Form.Label>Ingresa el código de tu pedido</Form.Label>
                  <Form.Control
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
              <Button variant="warning" type="submit" disabled={isSubmitting}>
                Buscar
              </Button>
            </Form>
          )}
        </Formik>
        <br />
        {/* sale details */}
        {showSaleArea ? (
          <Slide top>
            <h3>Detalle del pedido</h3>
            <hr className="myDivider" />
            <div className="bg-light rounded mt-4 px-3 py-4">
              {sale ? (
                <>
                  {/* code */}
                  <h4>Código del pedido: </h4>
                  <p className="h5 text-danger mb-3">{sale._id}</p>
                  {/* address */}
                  <h4>Dirección:</h4>
                  <p className="mb-0">
                    <strong>Calle:</strong>
                    <span className="ml-2">{sale.buyer.address.street}</span>
                  </p>
                  <p className="mb-0">
                    <strong>Colonia:</strong>
                    <span className="ml-2">
                      {sale.buyer.address.neighborhood}
                    </span>
                  </p>
                  <p className="mb-0">
                    <strong>Municipio:</strong>
                    <span className="ml-2">
                      {sale.buyer.address.municipality}
                    </span>
                  </p>
                  <p className="mb-0">
                    <strong>Ciudad:</strong>
                    <span className="ml-2">{sale.buyer.address.city}</span>
                  </p>
                  <p className="mb-0">
                    <strong>Estado:</strong>
                    <span className="ml-2">{sale.buyer.address.state}</span>
                  </p>
                  <p className="mb-3">
                    <strong>Código postal:</strong>
                    <span className="ml-2">{sale.buyer.address.zipCode}</span>
                  </p>
                  <h4>Comprador:</h4>
                  <p className="mb-0">
                    <strong>Nombre:</strong>
                    <span className="ml-2">{sale.buyer.name}</span>
                  </p>
                  <p className="mb-0">
                    <strong>Apellido paterno:</strong>
                    <span className="ml-2">{sale.buyer.firstSurname}</span>
                  </p>
                  <p className="mb-0">
                    <strong>Apellido materno:</strong>
                    <span className="ml-2">{sale.buyer.secondSurname}</span>
                  </p>
                  <p className="mb-0">
                    <strong>Teléfono:</strong>
                    <span className="ml-2">{sale.buyer.phone}</span>
                  </p>
                  <p className="mb-0">
                    <strong>Correo electrónico:</strong>
                    <span className="ml-2">{sale.buyer.email}</span>
                  </p>
                </>
              ) : (
                <div className="text-center my-4">
                  <Spinner variant="warning" animation="grow" role="status" />
                </div>
              )}
            </div>
          </Slide>
        ) : null}
      </Container>
    </Layout>
  );
});

export default Tracker;
