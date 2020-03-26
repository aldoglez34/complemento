import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import fb from "../firebase/fire";
import { useDispatch } from "react-redux";
import * as managerActions from "../redux/actions/manager";
import API from "../utils/API";
const firebase = require("firebase/app");

const Login = React.memo(function Login(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const loginSchema = yup.object({
    email: yup
      .string()
      .email("Formato inválido")
      .required("Requerido"),
    password: yup
      .string()
      .min(6, "Longitud incorrecta")
      .required("Requerido")
  });

  return (
    <Container
      fluid
      className="h-100"
      style={{
        backgroundColor: "#0c2c2c"
      }}
    >
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h1
            className="text-center py-3 my-4"
            style={{
              backgroundColor: "#0c2c2c",
              color: "#edcb58",
              fontFamily: "Lobster",
              fontSize: "40px"
            }}
          >
            Tu Complemento
            <i className="fas fa-leaf ml-2" style={{ fontSize: "37px" }} />
          </h1>
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
                          // if (res.data) {
                          //   dispatch(managerActions.loginManager(res.data));
                          //   alert("¡Bienvenido!");
                          //   props.history.push("/manager/dashboard");
                          // } else {
                          //   alert("Manager incorrecto");
                          //   setSubmitting(false);
                          // }
                          dispatch(managerActions.loginManager(res.data));
                          alert("¡Bienvenido!");
                          props.history.push("/manager/dashboard");
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
                    <Form.Label className="text-light">
                      Correo electrónico
                      <strong className="ml-1 text-danger" title="Requerido">
                        *
                      </strong>
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
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label className="text-light">
                      Contraseña
                      <strong className="ml-1 text-danger" title="Requerido">
                        *
                      </strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="15"
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
                <Button
                  variant="success"
                  className="mt-3"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Entrar
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
});

export default Login;
