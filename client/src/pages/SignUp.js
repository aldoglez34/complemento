import React, { useState, useEffect } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import API from "../utils/API";

function SignUp() {
  const breadcrumbRoutes = [
    { name: "Inicio", to: "/" },
    { name: "Regístrate con nosotros", to: "active" }
  ];

  const [emails, setEmails] = useState({
    emails: []
  });

  const fetchEmails = () => {
    API.fetchEmails()
      .then(res => setEmails(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const signupSchema = yup.object({
    clientName: yup
      .string()
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ ]+$/,
        "Sólo letras"
      )
      .trim()
      .min(2, "Mínimo 2 letras")
      .max(30, "Máximo 30 letras")
      .required("Requerido"),
    firstSurname: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ ]+$/,
        "Sólo letras"
      )
      .min(2, "Mínimo 2 letras")
      .max(50, "Máximo 56 letras")
      .required("Requerido"),
    secondSurname: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ ]+$/,
        "Sólo letras"
      )
      .min(2, "Mínimo 2 letras")
      .max(50, "Máximo 50 letras")
      .required("Requerido"),
    email: yup
      .string()
      .email("Formato de email incorrecto")
      .max(50, "Máximo 50 letras")
      .notOneOf(emails.emails, "Este correo ya se encuentra dado de alta")
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(10, "La longitud exacta debe ser 10 dígitos")
      .required("Requerido"),
    password: yup
      .string()
      .min(5, "Mínimo 5 caracteres")
      .max(30, "Máximo 30 caracteres")
      .required("Requerido"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
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
            secondSurname: "",
            email: "",
            phone: "",
            password: "",
            passwordConfirm: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
            comments: ""
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
                    <Form.Label>
                      Nombre(s)<strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="100"
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
                      maxLength="100"
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
                      maxLength="100"
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
                      maxLength="100"
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
                      maxLength="100"
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
                    <Form.Label>
                      Contraseña
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="100"
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
                      maxLength="100"
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
                  <Form.Group as={Col}>
                    <Form.Label>
                      Calle<strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="100"
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
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Estado<strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
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
                    <Form.Label>
                      Código postal
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="100"
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
                      maxLength="200"
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
