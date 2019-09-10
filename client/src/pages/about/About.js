import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

function About() {
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
                        <h2 className="text-center text-dark mb-3">¿Quiénes somos?</h2>
                        <hr />

                        <p>
                            Ut sit amet vehicula eros. Mauris placerat elit sit amet tellus elementum posuere at consectetur turpis. Curabitur eget neque leo. Maecenas nunc velit, iaculis vitae luctus eget, viverra eu diam. Morbi ut eros augue. Suspendisse potenti. Cras sed nulla magna. Mauris mollis ullamcorper sapien, id tempus felis tempus ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent elit ante, cursus vitae egestas nec, finibus id diam. Suspendisse eget congue sem. Integer efficitur, dui sit amet rhoncus ullamcorper, diam nulla sagittis ex, quis venenatis turpis dolor in sem. Donec pretium vitae leo a elementum. Curabitur vitae pretium sapien. Pellentesque ac dolor vel metus varius vulputate.
                        </p>

                    </Col>
                </Row>

            </Container>
        </Layout>
    );
}

export default About;