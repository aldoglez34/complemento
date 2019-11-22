import React, { useEffect } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import fb from "../../firebase/fb";
import { useDispatch } from "react-redux";
import * as managerActions from "../../redux-actions/manager";
import API from "../../utils/API";

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
      {/* logo */}
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Image src="/images/adminlogo.png" alt="logo" fluid />
          <h3 className="my-4 text-center">Panel de administrador</h3>
          {/* form */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              fb.auth()
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

              // // step 1: logout any other session that might be open in firebase
              // // no need to logout from redux, the listener in App handles that
              // fb.auth()
              //   .signOut()
              //   .then(() => {
              //     // step 2: set persistence for the new session in firebase
              //     fb.auth()
              //       .setPersistence(firebase.auth.Auth.Persistence.SESSION)
              //       .then(() => {
              //         // step 3: login manager in firebase
              //         return fb
              //           .auth()
              //           .signInWithEmailAndPassword(
              //             values.email,
              //             values.password
              //           )
              //           .then(res => {
              //             // step 4: if auth successful, fetch manager in the db
              //             API.fetchManagerByUID(res.user.uid)
              //               .then(res => {
              //                 // step 5: login manager in redux and send him to dashboard
              //                 dispatch(managerActions.loginManager(res.data));
              //                 alert("¡Bienvenido!");
              //                 props.history.push("/manager/dashboard");
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
                    className="globalbttn"
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
