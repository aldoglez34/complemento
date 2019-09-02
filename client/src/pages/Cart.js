import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";

class Cart extends Component {
    state = {

    }

    getItemsFromLocalStorage = () => {

    }

    componentDidMount() {
        this.getItemsFromLocalStorage();
    }

    render() {
        return (

            <Layout>

                {/* regresar */}
                <div className="bg-white p-2">
                    <a href="/store" className="ml-2"><i className="fas fa-arrow-circle-left mr-2"></i>Regresa a la tienda</a>
                </div>

                <Container className="text-center my-4">
                    <h2 className="text-center mb-3">-Mi Carrito-</h2>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Precio Unitario</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    <Button variant="danger">Proceder con el pago <i className="fas fa-money-bill-wave ml-2"></i></Button>

                    <div className="text-right">
                        <Button variant="link">Limpiar carrito</Button>
                    </div>

                </Container>

            </Layout >

        );
    }

};

export default Cart;
