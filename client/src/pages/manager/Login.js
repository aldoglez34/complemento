import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import fire from "../../firebase/Fire";
import { useDispatch } from "react-redux";
import { loginManager } from "../../redux-actions";

const styles = {
  logo: {
    marginTop: 80
  }
};

function Login() {
  // redux dispatcher
  const dispatch = useDispatch();
  // yup schema
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
      <Row>
        <Col className="text-center">
          <Image
            src="/images/biglogo.png"
            alt="logo"
            style={styles.logo}
            fluid
          />
          <h3 className="my-4">
            <strong>- Panel de administrador -</strong>
          </h3>
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
                .signInWithEmailAndPassword(values.email, values.password)
                .then(res => {
                  let manager = res.user.email;
                  dispatch(loginManager(manager));
                })
                .catch(error => {
                  alert(error.message);
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
                      placeholder="Correo electrónico de administrador"
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
                      placeholder="Contraseña de administrador"
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
                <Form.Row>
                  <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
                    <Button
                      size="lg"
                      block
                      variant="success"
                      className="mt-3"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Entrar<i className="fas fa-angle-double-right ml-1"></i>
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
