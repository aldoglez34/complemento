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

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <ul className="list-unstyled mb-3">
                            <li className="mt-2"><strong>1. Egestas quis ipsum suspendisse ultrices gravida dictum?</strong>
                                <ul><li>Phasellus iaculis neque</li></ul>
                            </li>
                            <li className="mt-2"><strong>2. Vitae ultricies leo integer malesuada?</strong>
                                <ul><li>Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.</li></ul>
                            </li>
                            <li className="mt-2"><strong>3. Volutpat consequat mauris nunc congue nisi vitae. Congue nisi vitae suscipit tellus mauris a diam maecenas sed?</strong>
                                <ul><li>Turpis tincidunt id aliquet risus.</li></ul>
                            </li>
                            <li className="mt-2"><strong>4. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam?</strong>
                                <ul><li>Mauris commodo quis imperdiet massa tincidunt. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla.</li></ul>
                            </li>
                            <li className="mt-2"><strong>5. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh?</strong>
                                <ul><li>Consectetur adipiscing elit duis tristique sollicitudin nibh.</li></ul>
                            </li>
                            <li className="mt-2"><strong>6. ibero nunc consequat interdum varius sit amet?</strong>
                                <ul><li>Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.</li></ul>
                            </li>
                            <li className="mt-2"><strong>7. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Sit amet mauris commodo quis imperdiet massa tincidunt?</strong>
                                <ul><li>Sed id semper risus in hendrerit gravida rutrum. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Ut sem nulla pharetra diam sit. Tristique sollicitudin nibh sit amet.</li></ul>
                            </li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </Layout>
    );
}

export default Questions;