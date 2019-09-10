import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
    return (
        <Layout>
            {/* regresar */}
            <div className="bg-white p-2">
                <a href="/store" className="ml-2"><i className="fas fa-arrow-circle-left mr-2"></i>¿Quiénes somos?</a>
            </div>

            <Container className="my-4">

                <Row>
                    <Col md={{ span: 8, offset: 2 }}>

                        <hr />
                        <h2 className="text-center text-dark mb-3">Contáctanos</h2>
                        <hr />

                        <p>
                            Proin lobortis eleifend volutpat. Ut ut elit elementum sem efficitur lacinia. Etiam lobortis massa diam, vitae condimentum dolor posuere sed. Suspendisse lobortis purus sit amet tempus laoreet. Cras eu scelerisque velit. Sed at lacinia odio, sed imperdiet purus. Quisque auctor mattis dolor, et sagittis purus varius et. In vitae interdum lectus. Curabitur interdum felis vel convallis dignissim. In sed odio in arcu pellentesque commodo. Nam sollicitudin nec velit et mattis.
                        </p>

                        <Form className="py-3">
                            <Form.Group>
                                <Form.Label>Tu nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre completo" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Correo Electrónico" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tema</Form.Label>
                                <Form.Control type="text" placeholder="Tema" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Cuerpo del mensaje" />
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

export default Contact;