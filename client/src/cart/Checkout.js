import React from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

const Checkout = React.memo(() => {
  const signupSchema = yup.object({
    clientName: yup
      .string()
      .min(2, "Debe ser más largo que 2 letras")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    firstSurname: yup
      .string()
      .min(2, "Debe ser más largo que 2 letras")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    secondSurname: yup
      .string()
      .min(2, "Debe ser más largo que 2 letras")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    email: yup
      .string()
      .email("Formato de email incorrecto")
      // .notOneOf(emails.emails, "Este correo ya se encuentra dado de alta")
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(10, "La longitud exacta debe ser 10 dígitos")
      .required("Requerido"),
    password: yup
      .string()
      .min(5, "Entre 5 y 30 caracteres")
      .required("Requerido"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
      .required("Requerido"),
    street: yup.string().required("Requerido"),
    neighborhood: yup.string().required("Requerido"),
    municipality: yup.string().required("Requerido"),
    city: yup.string().required("Requerido"),
    state: yup.string().required("Requerido"),
    zipCode: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(5, "La longitud exacta debe ser 5 dígitos")
      .required("Requerido")
  });

  return (
    <Layout hideBag={true}>
      <Container className="my-4">
        <h3>Dirección de envío</h3>
        <hr className="myDivider" />
        <Formik
          initialValues={{
            street: "",
            neighborhood: "",
            municipality: "",
            city: "",
            state: "",
            zipCode: ""
          }}
          validationSchema={signupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            console.log("@values", values);
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
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Calle con número
                    <strong className="ml-1 text-danger">*</strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
                    placeholder="Calle con número"
                    type="text"
                    name="street"
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.street && !errors.street}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="street"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Municipio<strong className="ml-1 text-danger">*</strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
                    placeholder="Municipio"
                    type="text"
                    name="municipality"
                    value={values.municipality}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.municipality && !errors.municipality}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="municipality"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Colonia<strong className="ml-1 text-danger">*</strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
                    placeholder="Colonia"
                    type="text"
                    name="neighborhood"
                    value={values.neighborhood}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.neighborhood && !errors.neighborhood}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="neighborhood"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Ciudad<strong className="ml-1 text-danger">*</strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
                    placeholder="Ciudad"
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.city && !errors.city}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="city"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Estado<strong className="ml-1 text-danger">*</strong>
                  </Form.Label>
                  <Form.Control
                    name="state"
                    // value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.state && !errors.state}
                    as="select"
                    defaultValue={"DEFAULT"}
                  >
                    <option value="DEFAULT" disabled>
                      Elige...
                    </option>
                    <option>Aguascalientes</option>
                    <option>Baja California</option>
                    <option>Baja California Sur</option>
                    <option>Campeche</option>
                    <option>Chiapas</option>
                    <option>Chihuahua</option>
                    <option>Ciudad de México</option>
                    <option>Coahuila</option>
                    <option>Colima</option>
                    <option>Durango</option>
                    <option>Estado de México</option>
                    <option>Guanajuato</option>
                    <option>Guerrero</option>
                    <option>Hidalgo</option>
                    <option>Jalisco</option>
                    <option>Michoacán</option>
                    <option>Morelos</option>
                    <option>Nayarit</option>
                    <option>Nuevo León</option>
                    <option>Oaxaca</option>
                    <option>Puebla</option>
                    <option>Querétaro</option>
                    <option>Quintana Roo</option>
                    <option>San Luis Potosí</option>
                    <option>Sinaloa</option>
                    <option>Sonora</option>
                    <option>Tabasco</option>
                    <option>Tamaulipas</option>
                    <option>Tlaxcala</option>
                    <option>Veracruz</option>
                    <option>Yucatán</option>
                    <option>Zacatecas</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Código postal
                    <strong className="ml-1 text-danger">*</strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="5"
                    placeholder="Código postal"
                    type="text"
                    name="zipCode"
                    value={values.zipCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.zipCode && !errors.zipCode}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="zipCode"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              <h3>Forma de pago</h3>
              <hr className="myDivider" />
              <Button
                className="mt-3"
                size="lg"
                variant="danger"
                type="submit"
                disabled={isSubmitting}
              >
                PAGAR
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
});

export default Checkout;
