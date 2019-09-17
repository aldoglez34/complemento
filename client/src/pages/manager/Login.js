import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import fire from "../../firebase/Fire";

const styles = {
  logo: {
    marginTop: 80
  }
};

const handleLoginSubmit = data => {
  fire
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then(u => {
      // alert("yay!");
    })
    .catch(error => {
      alert(error.message);
    });
};

function Login() {
  const loginSchema = yup.object({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(6)
      .max(15)
      .required()
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
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                handleLoginSubmit(values);
                setSubmitting(false);
              }, 400);
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
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
