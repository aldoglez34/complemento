import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import fire from "../../firebase/Fire";
import { useDispatch } from "react-redux";
import * as managerActions from "../../redux-actions/manager";
const firebase = require("firebase/app");

function Login(props) {
  const dispatch = useDispatch();
  const loginSchema = yup.object({
    email: yup
      .string()
      .email("Correo inválido")
      .required("Requerido"),
    password: yup
      .string()
      .min(6, "Longitud incorrecta")
      .max(15, "Longitud incorrecta")
      .required("Requerido")
  });

  return (
    <Container>
      {/* logo */}
      <Row className="mt-4">
        <Col className="text-center">
          <Image src="/images/adminlogo.png" alt="logo" fluid />
          <h3 className="my-4">Panel de administrador</h3>
        </Col>
      </Row>
      {/* form */}
      <Row>
        <Col>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              fire
                .auth()
                .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(function() {
                  return fire
                    .auth()
                    .signInWithEmailAndPassword(values.email, values.password)
                    .then(res => {
                      let manager = res.user.email;
                      dispatch(managerActions.loginManager(manager));
                      alert("Bienvenido");
                      props.history.push("/manager/panel");
                    });
                })
                .catch(function(error) {
                  alert("Error de Firebase -> " + error.message);
                  console.log(error.code);
                  setSubmitting(false);
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
              isSubmitting
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
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
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
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
                </Form.Row>
                <Form.Row className="mt-3">
                  <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
                    <Button
                      block
                      className="globalbttn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Entrar
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
