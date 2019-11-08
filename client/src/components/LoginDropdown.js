import React from "react";
import { Dropdown, Form, Col, Button, Nav, NavItem } from "react-bootstrap";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import API from "../utils/API";
import * as clientActions from "../redux-actions/client";
import { useDispatch } from "react-redux";
import fire from "../firebase/Fire";
const firebase = require("firebase/app");

function LoginDropdown() {
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
          if (values.rememberme) {
            fire
              .auth()
              .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
              .then(function() {
                return fire
                  .auth()
                  .signInWithEmailAndPassword(values.email, values.password)
                  .then(res => {
                    let uid = res.user.uid;
                    API.fetchClientInfo(uid)
                      .then(res => {
                        alert("¡Bienvenido!");
                        let client = res.data;
                        dispatch(clientActions.loginClient(client));
                      })
                      .catch(err => {
                        alert("Error, este usuario no existe 😞");
                        console.log(err);
                        setSubmitting(false);
                      });
                  })
                  .catch(error => {
                    alert("Error, este usuario no existe 😞");
                    console.log(error);
                    setSubmitting(false);
                  });
              })
              .catch(function(error) {
                alert("Error");
                var errorCode = error.code;
                console.log(errorCode);
                var errorMessage = error.message;
                console.log(errorMessage);
                setSubmitting(false);
              });
          } else {
            fire
              .auth()
              .setPersistence(firebase.auth.Auth.Persistence.SESSION)
              .then(function() {
                return fire
                  .auth()
                  .signInWithEmailAndPassword(values.email, values.password)
                  .then(res => {
                    let uid = res.user.uid;
                    API.fetchClientInfo(uid)
                      .then(res => {
                        alert("¡Bienvenido!");
                        let client = res.data;
                        dispatch(clientActions.loginClient(client));
                      })
                      .catch(err => {
                        alert("Error, este usuario no existe 😞");
                        console.log(err);
                        setSubmitting(false);
                      });
                  })
                  .catch(error => {
                    alert("Error, este usuario no existe 😞");
                    console.log(error);
                    setSubmitting(false);
                  });
              })
              .catch(function(error) {
                alert("Error");
                var errorCode = error.code;
                console.log(errorCode);
                var errorMessage = error.message;
                console.log(errorMessage);
                setSubmitting(false);
              });
          }
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
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={Nav.Link} className="text-light">
                Iniciar sesión
                <i className="fas fa-user ml-1" />
              </Dropdown.Toggle>
              <Dropdown.Menu
                data-display="static"
                className="bg-light dropdown-menu-xs-left dropdown-menu-md-right"
                style={{ width: "18.125rem" }}
              >
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  className="pt-3 pl-3 pr-3 pb-1"
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
                <Dropdown.Item>Olvidé mi contraseña</Dropdown.Item>
                <Dropdown.Item href="/signup">
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
