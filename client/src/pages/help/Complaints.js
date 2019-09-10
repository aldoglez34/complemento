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
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre completo" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Correo electrónico" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tema</Form.Label>
                                <Form.Control type="text" placeholder="Queja o sugerencia" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Queja</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Descripción de la queja o sugerencia" />
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