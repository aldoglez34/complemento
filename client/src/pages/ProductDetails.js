import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  Image
} from "react-bootstrap";
import Layout from "../components/Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import API from "../utils/API";

class ProductDetails extends Component {
  state = {
    productDetails: {},
    ingredients: []
  };

  getProductDetails = () => {
    API.getProductDetails(this.props.routeProps.match.params.productId)
      .then(res => {
        this.setState({ productDetails: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getIngredients = () => {
    API.getIngredients(this.props.routeProps.match.params.productId)
      .then(res => {
        this.setState({
          ingredients: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getProductDetails();
    this.getIngredients();
  }

  render() {
    return (
      <Layout>
        <MyBreadcrumb />

        <Container>
          {/* first row */}
          <Row className="my-4">
            {/* image column */}
            <Col
              sm={{ span: 3, offset: 3 }}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                src={"../images/products/" + this.state.productDetails.photo}
                className="img-fluid rounded-lg shadow-sm"
                alt="product"
              />
            </Col>
            {/* name column */}
            <Col sm={5} className="text-center">
              <h2 className="text-dark mt-5 mb-2">
                <strong>{this.state.productDetails.name}</strong>
              </h2>
              <p className="lead my-3 text-dark">
                {this.state.productDetails.content}
              </p>

              {this.state.productDetails.Discount ? (
                <>
                  <h3 className="mb-3 text-dark">
                    <del>{"$" + this.state.productDetails.price + " MXN"}</del>
                  </h3>
                  <h3 className="mb-3 text-danger">
                    {"$" + this.state.productDetails.Discount.newPrice + " MXN"}
                  </h3>
                </>
              ) : (
                <h3 className="mb-3 text-dark">
                  {"$" + this.state.productDetails.price + " MXN"}
                </h3>
              )}

              <Button size="lg" variant="outline-primary" block>
                <i className="fas fa-shopping-cart mr-2" />
                Agregar
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
                  {this.state.ingredients.length ? (
                    <ul className="list-unstyled">
                      <li>
                        <ul>
                          {this.state.ingredients.map(ing => (
                            <li key={ing.name}>{ing.name}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ) : (
                    <span>No hay ingredientes disponibles.</span>
                  )}
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
                  {this.state.productDetails.description ? (
                    this.state.productDetails.description
                  ) : (
                    <span>No hay descripción disponible.</span>
                  )}
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
                  {this.state.productDetails.dose ? (
                    this.state.productDetails.dose
                  ) : (
                    <span>No hay dosis disponible.</span>
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  <i className="fas fa-chevron-down mr-2"></i>Información
                  Adicional
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  {this.state.productDetails.aditionalInfo ? (
                    this.state.productDetails.aditionalInfo
                  ) : (
                    <span>No hay información adicional disponible.</span>
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </Layout>
    );
  }
}

export default ProductDetails;
