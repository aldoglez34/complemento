import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
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
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <Image
            src="/images/biglogo.png"
            alt="logo"
            style={styles.logo}
            fluid
          />
          <h3 className="my-4 text-muted">Iniciar Sesión</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = "Requerido";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Correo inválido";
              }
              return errors;
            }}
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
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
                    <Form.Label className="text-muted">
                      Correo electrónico
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
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
                    <Form.Label className="text-muted">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
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
                      Entrar
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
