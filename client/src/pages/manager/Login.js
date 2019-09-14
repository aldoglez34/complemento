import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Formik } from "formik";

const styles = {
    logo: {
        marginTop: 150
    }
}

function Login() {
    return (
        <Container className="text-center">
            <Row>
                <Col>
                    <Image src="/images/biglogo.png" alt="logo" style={styles.logo} fluid />
                    <p className="lead mt-4 pt-4 text-muted">Iniciar Sesión</p>
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
                                alert(JSON.stringify(values, null, 2));
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
                                            {/* <Form.Label>Correo electrónico</Form.Label> */}
                                            <Form.Control
                                                placeholder="Correo electrónico"
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email} />
                                            {errors.email && touched.email && errors.email}
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} as={Col} md={{ span: 6, offset: 3 }}>
                                            {/* <Form.Label>Contraseña</Form.Label> */}
                                            <Form.Control
                                                placeholder="Contraseña"
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password} />
                                            {errors.password && touched.password && errors.password}
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} as={Col} md={{ span: 6, offset: 3 }}>
                                            <Button block variant="success" type="submit" disabled={isSubmitting}>
                                                <strong>Entrar</strong>
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;