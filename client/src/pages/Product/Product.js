import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Layout from "../../components/Layout/Layout";
import API from "../../utils/API";

class Product extends Component {
    state = {
        name: null,
        content: null,
        description: null,
        dose: null,
        photo: null,
        price: null,
        aditionalInfo: null
    }

    getProductDetails = () => {
        API.getProductDetails(this.props.routeProps.match.params.productId)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    name: res.data.name,
                    content: res.data.content,
                    description: res.data.description,
                    dose: res.data.dose,
                    photo: res.data.photo,
                    price: res.data.price,
                    aditionalInfo: res.data.aditionalInfo
                });
            })
            .catch(err => { console.log(err) });
    }

    componentDidMount() {
        this.getProductDetails();
    }

    render() {
        return (

            <Layout>

                {/* regresar */}
                <div className="bg-light p-2">
                    <a href="/store" className="ml-2"><i className="fas fa-arrow-circle-left mr-2"></i>Regresa a la Tienda</a>
                </div>

                <Container>

                    {/* first row */}
                    <Row className="my-4">
                        {/* image column */}
                        <Col md={4} className="text-center">
                            <img src={"../images/products/" + this.state.photo} className="img-fluid" alt="product" />
                        </Col>
                        {/* name column */}
                        <Col md={8} className="text-center">
                            <h2 className="text-dark mt-5 mb-2"><strong>{this.state.name}</strong></h2>
                            <p className="lead my-3 text-dark">{this.state.content}</p>
                            <h3 className="mb-3 text-dark">{this.state.price}</h3>
                            <Button variant="outline-primary">
                                <i className="fas fa-shopping-cart mr-2" />Agregar
                          </Button>
                        </Col>
                    </Row>

                    <Accordion className="mb-4" defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <i className="fas fa-chevron-down mr-2"></i>Ingredientes
                                    </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Aquí se muestran los ingredientes</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <i className="fas fa-chevron-down mr-2"></i>Descripción
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="text-justify">{this.state.description}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    <i className="fas fa-chevron-down mr-2"></i>Dosis
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>{this.state.dose}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    <i className="fas fa-chevron-down mr-2"></i>Información Adicional
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>{this.state.aditionalInfo}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </Container>
            </Layout>

        );
    }

};

export default Product;
