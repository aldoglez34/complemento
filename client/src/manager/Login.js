import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import firebase from "../firebase/firebase";
import fbApp from "firebase/app";
import APIManager from "../utils/APIManager";
import * as managerActions from "../redux/actions/user";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const loginSchema = yup.object({
    email: yup.string().email("Formato inválido").required("Requerido"),
    password: yup.string().min(6, "Longitud incorrecta").required("Requerido"),
  });

  return (
    <Container
      fluid
      className="h-100"
      style={{
        backgroundColor: "#0c2c2c",
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
              fontSize: "40px",
            }}
          >
            Tu Complemento
            <i className="fas fa-leaf ml-1" style={{ fontSize: "37px" }} />
          </h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              //////// login ////////
              firebase
                .auth()
                .setPersistence(fbApp.auth.Auth.Persistence.SESSION)
                .then(() => {
                  return firebase
                    .auth()
                    .signInWithEmailAndPassword(values.email, values.password)
                    .then((res) => {
                      // if anything goes wrong from here, logout the user in firebase
                      APIManager.mngr_fetchManagerByUID(res.user.uid)
                        .then((res) => {
                          if (res.data) {
                            dispatch(managerActions.loginManager(res.data));
                            alert(
                              `Iniciaste sesión con éxito, ${res.data.name}`
                            );
                            // window.location.href = "/manager/dashboard";
                          }
                        })
                        .catch((error) => {
                          alert(
                            "Ocurrió un error al iniciar sesión, vuelve a intentarlo."
                          );
                          console.log(error);
                          setSubmitting(false);
                        });
                    });
                })
                .catch((error) => {
                  alert(
                    "Ocurrió un error al iniciar sesión, vuelve a intentarlo."
                  );
                  console.log(error.code);
                  console.log(error.message);
                  setSubmitting(false);
                });
              setSubmitting(false);
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
                  className="mt-3 shadow-sm"
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
};

export default Login;
