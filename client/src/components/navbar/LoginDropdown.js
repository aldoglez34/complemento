import React from "react";
import { Dropdown, Form, Col, Button, Nav, NavItem } from "react-bootstrap";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import API from "../../utils/API";
import * as clientActions from "../../redux/actions/client";
import { useDispatch } from "react-redux";
import fire from "../../firebase/fire";
const firebase = require("firebase/app");

function LoginDropdown(props) {
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
      .required("Requerido"),
    rememberme: yup.boolean()
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", rememberme: false }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          values.rememberme
            ? firebase
                .auth()
                .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(function() {
                  return fire
                    .auth()
                    .signInWithEmailAndPassword(values.email, values.password)
                    .then(res => {
                      API.fetchClientByUID(res.user.uid)
                        .then(res => {
                          if (res.data) {
                            dispatch(clientActions.loginClient(res.data));
                            alert("¡Bienvenido!");
                            window.location.href = "/";
                          } else {
                            alert("Usuario incorrecto");
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
                .catch(function(error) {
                  // Handle Errors here.
                  let errorCode = error.code;
                  let errorMessage = error.message;
                  alert(`Error ${errorCode} \n Mensaje: ${errorMessage}`);
                })
            : firebase
                .auth()
                .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(function() {
                  return fire
                    .auth()
                    .signInWithEmailAndPassword(values.email, values.password)
                    .then(res => {
                      API.fetchClientByUID(res.user.uid)
                        .then(res => {
                          if (res.data) {
                            dispatch(clientActions.loginClient(res.data));
                            alert("¡Bienvenido!");
                            window.location.href = "/";
                          } else {
                            alert("Usuario incorrecto");
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
                .catch(function(error) {
                  // Handle Errors here.
                  let errorCode = error.code;
                  let errorMessage = error.message;
                  alert(`Error ${errorCode} \n Mensaje: ${errorMessage}`);
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
          <>
            <Dropdown title="Iniciar sesión" as={NavItem}>
              <Dropdown.Toggle as={Nav.Link} className="text-light">
                <i className="fas fa-user mr-1" />
                Sesión
              </Dropdown.Toggle>
              <Dropdown.Menu
                id="clientLoginDropdown"
                data-display="static"
                className="dropdown-menu-xs-left dropdown-menu-md-right"
              >
                <h5 className="pt-1 pl-3 pb-1">Iniciar sesión</h5>
                <Dropdown.Divider />
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  className="pt-1 pl-3 pr-3 pb-1 pt-3"
                >
                  <Form.Row className="mb-2">
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
                  <Form.Row className="mb-0">
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
                  <Form.Row className="mb-2">
                    <Form.Group as={Col}>
                      <Form.Check
                        type="checkbox"
                        name="rememberme"
                        onChange={handleChange}
                        label="Recuérdame"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Button
                        variant="success"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Entrar
                      </Button>
                    </Form.Group>
                  </Form.Row>
                </Form>
                <Dropdown.Divider />
                {/* <Dropdown.Item className="clientDropdownItem">Olvidé mi contraseña</Dropdown.Item> */}
                <Dropdown.Item className="clientDropdownItem" href="/signup">
                  Regístrate con nosotros
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </Formik>
    </>
  );
}

export default LoginDropdown;
