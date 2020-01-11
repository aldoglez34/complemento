import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import fb from "../firebase/fire";
import { useDispatch } from "react-redux";
import * as managerActions from "../redux/actions/manager";
import API from "../utils/API";
const firebase = require("firebase/app");

function Login(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
  }, []);

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
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h1
            className="text-center text-dark mt-3"
            style={{
              fontFamily: "'Acme', sans-serif"
            }}
          >
            Complemento Natural
          </h1>
          <h4 className="mt-1 mb-4 text-center text-muted">
            Panel de administrador
          </h4>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              /////////////// login //////////////////
              firebase
                .auth()
                .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(function() {
                  return fb
                    .auth()
                    .signInWithEmailAndPassword(values.email, values.password)
                    .then(res => {
                      API.fetchManagerByUID(res.user.uid)
                        .then(res => {
                          if (res.data) {
                            dispatch(managerActions.loginManager(res.data));
                            alert("¡Bienvenido!");
                            props.history.push("/manager/dashboard");
                          } else {
                            alert("Manager incorrecto");
                            setSubmitting(false);
                          }
                        })
                        .catch(error => {
                          alert("Error de autenticación, revisa tus datos");
                          console.log("Error de fetchClientByUID");
                          console.log(error);
                          setSubmitting(false);
                        });
                    })
                    .catch(error => {
                      alert("Error de autenticación, revisa tus datos");
                      console.log("Error de firebase signIn...");
                      console.log(error);
                      setSubmitting(false);
                    });
                })
                .catch(error => {
                  alert(error.code);
                  alert(error.message);
                });
              ////////////////////////////////////////
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
                  <Form.Group as={Col}>
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
                  <Form.Group as={Col}>
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
                <div className="text-right">
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Entrar
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
