import React from "react";
import { Dropdown, Form, Col, Button, Nav, NavItem } from "react-bootstrap";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import API from "../../utils/API";
import * as clientActions from "../../redux/actions/client";
import { useDispatch } from "react-redux";
import fire from "../../firebase/fire";
const firebase = require("firebase/app");

const LoginDropdown = React.memo(() => {
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
    <Formik
      initialValues={{ email: "", password: "", rememberme: false }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        //
        setSubmitting(true);
        //
        firebase
          .auth()
          .setPersistence(
            values.rememberme
              ? firebase.auth.Auth.Persistence.LOCAL
              : firebase.auth.Auth.Persistence.SESSION
          )
          .then(() =>
            fire
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
              })
          )
          .catch(error => {
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
          <Dropdown as={NavItem}>
            <Dropdown.Toggle
              as={Nav.Link}
              className="navbarDropdownStyle p-0 p-md-2 pt-md-3"
              title="Sesión"
            >
              <i className="fas fa-user mr-1" />
              Sesión
            </Dropdown.Toggle>
            <Dropdown.Menu
              alignRight
              id="loginDropdownMenu"
              data-display="static"
            >
              <div className="px-3 py-2">
                <h6>
                  <strong>SESIÓN</strong>
                </h6>
                <hr className="myDivider" />
                <Form noValidate onSubmit={handleSubmit}>
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
                        variant="warning"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Entrar
                      </Button>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </div>
              <Dropdown.Divider />
              <div className="px-3 py-2">
                <Dropdown.Item
                  className="navbarDropdownItemStyle px-0"
                  href="/signup"
                >
                  Regístrate con nosotros
                </Dropdown.Item>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}
    </Formik>
  );
});

export default LoginDropdown;
