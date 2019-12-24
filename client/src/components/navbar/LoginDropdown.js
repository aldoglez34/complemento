import React from "react";
import { Dropdown, Form, Col, Button, Nav, NavItem } from "react-bootstrap";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import API from "../../utils/API";
import * as clientActions from "../../redux/actions/client";
import { useDispatch } from "react-redux";
import fire from "../../firebase/fire";
// const firebase = require("firebase/app");

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
          fire
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(res => {
              API.fetchClientByUID(res.user.uid)
                .then(res => {
                  if (res.data) {
                    dispatch(clientActions.loginClient(res.data));
                    alert("¡Bienvenido!");
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
          // step 1: logout any other session that might be open in firebase (could be from a manager)
          // no need to logout from redux, the listener in App handles that
          // fb.auth()
          //   .signOut()
          //   .then(() => {
          //     // step 2: set persistence for the new session in firebase
          //     fb.auth()
          //       .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          //       .then(() => {
          //         // step 3: login client in firebase
          //         return fb
          //           .auth()
          //           .signInWithEmailAndPassword(values.email, values.password)
          //           .then(res => {
          //             // step 4: if auth successful, fetch client in the db
          //             API.fetchClientByUID(res.user.uid)
          //               .then(res => {
          //                 // step 5: login client in redux
          //                 dispatch(clientActions.loginClient(res.data));
          //                 alert("¡Bienvenido!");
          //               })
          //               .catch(error => {
          //                 // if there's a problem fetching info from the db, logout from firebase
          //                 fb.auth()
          //                   .signOut()
          //                   .then()
          //                   .catch(error => console.log(error));
          //                 // then print error
          //                 alert("Error de autenticación, revisa tus datos");
          //                 console.log("Error de fetchClientByUID");
          //                 console.log(error);
          //                 setSubmitting(false);
          //               });
          //           })
          //           .catch(error => {
          //             alert("Error de autenticación, revisa tus datos");
          //             console.log("Error de firebase signIn...");
          //             console.log(error);
          //             setSubmitting(false);
          //           });
          //       })
          //       .catch(error => {
          //         alert("Error");
          //         console.log("Error de firebase persistence");
          //         console.log(error);
          //         setSubmitting(false);
          //       });
          //   })
          //   .catch(error => {
          //     alert("Error");
          //     console.log("Error de firebase logout");
          //     console.log(error);
          //     setSubmitting(false);
          //   });
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
                <i className="fas fa-user mr-1" />
                Iniciar sesión
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
