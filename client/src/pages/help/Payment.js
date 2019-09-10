import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

function Payment() {
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
                        <h2 className="text-center text-dark mb-3">Métodos de pago</h2>
                        <hr />

                        <p>
                            Duis a purus sem. Aliquam dapibus libero eu neque ornare, non congue nunc tincidunt. Proin commodo ultricies velit. Praesent auctor mattis tincidunt. Morbi luctus metus ut velit interdum, at faucibus nisl elementum. Aenean vel lectus rhoncus, imperdiet justo id, finibus risus. Pellentesque ut libero et justo vestibulum porttitor. Sed id sodales urna.
                        </p>

                    </Col>
                </Row>

            </Container>
        </Layout>
    );
}

export default Payment;