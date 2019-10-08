import React from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";

function SignUp() {
  const breadcrumbRoutes = [
    { name: "Inicio", to: "/" },
    { name: "Regístrate con nosotros", to: "active" }
  ];

  const signupSchema = yup.object({
    clientName: yup
      .string()
      .max(30, "Longitud incorrecta")
      .required("Requerido"),
    firstSurname: yup
      .string()
      .max(50, "Longitud incorrecta")
      .required("Requerido"),
    secondSurname: yup
      .string()
      .max(50, "Longitud incorrecta")
      .required("Requerido")
  });

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoutes} />

      <Container className="mt-4 mb-4">
        <h2 className="pt-4 mb-4">
          <strong>Regístrate con nosotros</strong>
        </h2>
        <Formik
          initialValues={{
            clientName: "",
            firstSurname: "",
            secondSurname: ""
          }}
          validationSchema={signupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(values);
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
            <>
              <Form noValidate onSubmit={handleSubmit}>
                <h5 className="my-3">Datos de usuario</h5>
                <hr />
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Nombre(s)</Form.Label>
                    <Form.Control
                      placeholder="Nombre(s)"
                      type="text"
                      name="clientName"
                      pattern="[A-Za-z]"
                      value={values.clientNames}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.clientName && !errors.clientName}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="clientName"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Apellido paterno</Form.Label>
                    <Form.Control
                      placeholder="Apellido paterno"
                      type="text"
                      name="firstSurname"
                      value={values.firstSurname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.firstSurname && !errors.firstSurname}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="firstSurname"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Apellido materno</Form.Label>
                    <Form.Control
                      placeholder="Apellido materno"
                      type="text"
                      name="secondSurname"
                      value={values.secondSurname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.secondSurname && !errors.secondSurname}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="secondSurname"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      placeholder="Correo electrónico"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="email"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Teléfono celular</Form.Label>
                    <Form.Control
                      placeholder="Teléfono celular"
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.phone && !errors.phone}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="phone"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <h5 className="my-3">Contraseña</h5>
                <hr />
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      placeholder="Contraseña"
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.password && !errors.password}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="password"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Repetir contraseña</Form.Label>
                    <Form.Control
                      placeholder="Repetir contraseña"
                      type="password"
                      name="password2"
                      value={values.password2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.password2 && !errors.password2}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="password2"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <h5 className="my-3">Datos de entrega</h5>
                <hr />
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Calle</Form.Label>
                    <Form.Control
                      placeholder="Calle"
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
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
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
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control as="select" defaultValue={"DEFAULT"}>
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
                  <Form.Group as={Col} md={2}>
                    <Form.Label>Código postal</Form.Label>
                    <Form.Control
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
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Comentarios</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Comentarios adicionales con respecto a tu dirección o a la entrega de productos"
                      type="text"
                      name="comments"
                      value={values.comments}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.comments && !errors.comments}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="comments"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Button
                      variant="success"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Registrarme
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            </>
          )}
        </Formik>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  );
}

export default SignUp;
