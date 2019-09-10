import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Image } from "react-bootstrap";

function Location() {
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
                        <h2 className="text-center text-dark mb-3">Ubicación</h2>
                        <hr />

                        <p>
                            Proin lobortis eleifend volutpat. Ut ut elit elementum sem efficitur lacinia. Etiam lobortis massa diam, vitae condimentum dolor posuere sed. Suspendisse lobortis purus sit amet tempus laoreet. Cras eu scelerisque velit. Sed at lacinia odio, sed imperdiet purus. Quisque auctor mattis dolor, et sagittis purus varius et. In vitae interdum lectus. Curabitur interdum felis vel convallis dignissim. In sed odio in arcu pellentesque commodo. Nam sollicitudin nec velit et mattis.
                        </p>

                        <div className="text-center">
                            <Image src="https://gritdaily.com/wp-content/uploads/2019/08/unnamed.jpg" rounded fluid />
                        </div>

                    </Col>
                </Row>

            </Container>
        </Layout>
    );
}

export default Location;