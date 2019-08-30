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
        aditionalInfo: null,
        scientificIngredients: [],
        commonIngredients: []
    }

    getProductDetails = () => {
        API.getProductDetails(this.props.routeProps.match.params.productId)
            .then(res => {
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

    getIngredients = () => {
        API.getIngredients(this.props.routeProps.match.params.productId)
            .then(res => {
                this.setState({
                    scientificIngredients: res.data.scientificIngredients,
                    commonIngredients: res.data.commonIngredients
                });
            })
            .catch(err => { console.log(err) });
    }

    componentDidMount() {
        this.getProductDetails();
        this.getIngredients();
    }

    render() {
        return (

            <Layout>

                {/* regresar */}
                <div className="bg-white p-2">
                    <a href="/store" className="ml-2"><i className="fas fa-arrow-circle-left mr-2"></i>Regresa a la tienda</a>
                </div>

                <Container>

                    {/* first row */}
                    <Row className="my-4">
                        {/* image column */}
                        <Col sm={{ span: 3, offset: 3 }} className="d-flex align-items-center justify-content-center">
                            {(this.state.photo) ?
                                (<img src={"../images/products/" + this.state.photo} className="img-fluid rounded-lg shadow-sm" alt="product" />) :
                                (<img src="../images/products/placeholder.jpg" className="img-fluid rounded-lg shadow-sm" alt="product" />)}
                        </Col>
                        {/* name column */}
                        <Col sm={5} className="text-center">
                            <h2 className="text-dark mt-5 mb-2"><strong>{this.state.name}</strong></h2>
                            <p className="lead my-3 text-dark">{this.state.content}</p>
                            <h3 className="mb-3 text-dark">{"$" + this.state.price + " MXN"}</h3>
                            <Button size="lg" variant="outline-primary">
                                <i className="fas fa-shopping-cart mr-2" />Agregar
                          </Button>
                        </Col>
                    </Row>

                    {/* second row - product details */}
                    <Accordion className="mb-4 shadow-sm">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <i className="fas fa-chevron-down mr-2"></i>Ingredientes
                                    </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {(this.state.scientificIngredients.length) ?
                                        (
                                            <ul className="list-unstyled">
                                                <li>Nombre científico<ul>
                                                    {this.state.scientificIngredients.map(ing => <li key={ing}>{ing}</li>)}
                                                </ul>
                                                </li>
                                            </ul>
                                        ) :
                                        (null)}
                                    {(this.state.commonIngredients.length) ?
                                        (
                                            <ul className="list-unstyled">
                                                <li>Nombre común<ul>
                                                    {this.state.commonIngredients.map(ing => <li key={ing}>{ing}</li>)}
                                                </ul>
                                                </li>
                                            </ul>
                                        ) :
                                        (null)}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <i className="fas fa-chevron-down mr-2"></i>Descripción
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="text-justify">
                                    {(this.state.description) ?
                                        (this.state.description) :
                                        (<span>No hay descripción disponible.</span>)}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    <i className="fas fa-chevron-down mr-2"></i>Dosis
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    {(this.state.dose) ?
                                        (this.state.dose) :
                                        (<span>No hay dosis disponible.</span>)}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    <i className="fas fa-chevron-down mr-2"></i>Información Adicional
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    {(this.state.aditionalInfo) ?
                                        (this.state.aditionalInfo) :
                                        (<span>No hay información adicional disponible.</span>)}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </Container>
            </Layout >

        );
    }

};

export default Product;
