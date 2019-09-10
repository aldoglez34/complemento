import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Complaints() {
    return (
        <Layout>
            {/* regresar */}
            <div className="bg-white p-2">
                <a href="/store" className="ml-2"><i className="fas fa-arrow-circle-left mr-2"></i>Regresa a la tienda</a>
            </div>

            <Container className="my-4">

                <Row>
                    <Col md={{ span: 8, offset: 2 }}>

                        <hr />
                        <h2 className="text-center text-dark mb-3">Quejas y sugerencias</h2>
                        <hr />

                        <Form className="py-3">
                            <Form.Group>
                                <Form.Label>Tu nombre</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tu correo</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tu queja</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="primary" type="submit">Enviar</Button>
                            </div>
                        </Form>

                    </Col>
                </Row>

            </Container>
        </Layout>
    );
}

export default Complaints;