import React, { useState, useEffect } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import API from "../utils/API";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import ScrollButton from "../components/ScrollButton";
import HelpButton from "../components/HelpButton";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

function ClientInfo(props) {
  const [client, setClient] = useState({ client: null });

  function fetchClientInfo() {
    API.fetchClientInfo(props.routeProps.match.params.clientId)
      .then(res => setClient(res.data[0]))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    setClient(fetchClientInfo());
  }, []);

  const breadcrumbRoutes = () => {
    return [{ name: "Inicio", to: "/" }, { name: "Mis datos", to: "active" }];
  };

  const changeInfoSchema = yup.object({
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

  return client ? (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoutes()} />
      <Container className="mt-4">
        <h2>Mis datos</h2>
        <Formik
          initialValues={{
            clientName: client.name,
            firstSurname: client.firstSurname,
            secondSurname: client.secondSurname,
            email: client.email,
            phone: client.phone,
            password: "",
            passwordConfirm: "",
            street: client.street,
            neighborhood: client.neighborhood,
            municipality: client.municipality,
            city: client.city,
            state: client.state,
            zipCode: client.zipCode
          }}
          validationSchema={changeInfoSchema}
          onSubmit={(values, { setSubmitting }) => {}}
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
                    <Form.Label>
                      Nombre(s)<strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="50"
                      placeholder="Nombre(s)"
                      type="text"
                      name="clientName"
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
                    <Form.Label>
                      Apellido paterno
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="50"
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
                    <Form.Label>
                      Apellido materno
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="50"
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
                    <Form.Label>
                      Correo electrónico
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="50"
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
                    <Form.Label>
                      Teléfono celular
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="10"
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
                <h5 className="my-3">Contraseña (5-30 caracteres)</h5>
                <hr />
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      Contraseña
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="30"
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
                    <Form.Label>
                      Repetir contraseña
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="30"
                      placeholder="Repetir contraseña"
                      type="password"
                      name="passwordConfirm"
                      value={values.passwordConfirm}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={
                        touched.passwordConfirm && !errors.passwordConfirm
                      }
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="passwordConfirm"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <h5 className="my-3">Datos de entrega</h5>
                <hr />
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
  ) : null;
}

export default ClientInfo;
