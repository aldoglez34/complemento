import React from "react";
import ManagerLayout from "../../components/ManagerLayout";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Formik, ErrorMessage } from 'formik';

function NewProduct() {
    return (
        <ManagerLayout>
            <Row className="mb-2">
                <Col>
                    <a href="/manager/panel"><i className="fas fa-arrow-alt-circle-left mr-2"></i>Regresar al panel</a>
                    <h3 className="mt-2">Nuevo producto</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validate={values => {
                            let errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = "Correo electrónico no válido";
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
                        {({ isSubmitting }) => (
                            <Form>
                                {/* product category */}
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Categoría<strong className="text-danger">*</strong></Form.Label>
                                        <Form.Control
                                            as="select"
                                            type="text"
                                            name="category">
                                            <option>Elige...</option>
                                            <option>Categoría</option>
                                            <option>Categoría</option>
                                            <option>Categoría</option>
                                        </Form.Control>
                                        <ErrorMessage name="category" component="div" />
                                    </Form.Group>
                                </Form.Row>
                                {/* product name */}
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nombre del producto"
                                            name="name" />
                                    </Form.Group>
                                </Form.Row>
                                {/* product content */}
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Contenido</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nombre del producto"
                                            name="content" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>

                                        <Form.Control type="password" name="password" />
                                        <ErrorMessage name="password" component="div" />
                                    </Form.Group>
                                </Form.Row>
                                <Button type="submit" disabled={isSubmitting}>Crear</Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>

        </ManagerLayout >
    )
}

export default NewProduct;
