import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

function Questions() {
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
                        <h2 className="text-center text-dark mb-3">Preguntas frecuentes</h2>
                        <hr />

                        <ul className="list-unstyled py-3">
                            <li><strong>1. Nulla volutpat aliquam velit</strong>
                                <ul><li>Phasellus iaculis neque</li></ul>
                            </li>
                            <li><strong>2. Nulla volutpat aliquam velit</strong>
                                <ul><li>Phasellus iaculis neque</li></ul>
                            </li>
                            <li><strong>3. Nulla volutpat aliquam velit</strong>
                                <ul><li>Phasellus iaculis neque</li></ul>
                            </li>
                            <li><strong>4. Nulla volutpat aliquam velit</strong>
                                <ul><li>Phasellus iaculis neque</li></ul>
                            </li>
                            <li><strong>5. Nulla volutpat aliquam velit</strong>
                                <ul><li>Phasellus iaculis neque</li></ul>
                            </li>
                            <li><strong>6. Nulla volutpat aliquam velit</strong>
                                <ul><li>Phasellus iaculis neque</li></ul>
                            </li>
                            <li><strong>7. Nulla volutpat aliquam velit</strong>
                                <ul><li>Phasellus iaculis neque</li></ul>
                            </li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </Layout>
    );
}

export default Questions;