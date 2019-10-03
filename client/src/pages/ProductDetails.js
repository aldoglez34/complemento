import React, { Component } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import API from "../utils/API";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import AddToShoppingBadBttn from "../components/AddToShoppingBadBttn";

class ProductDetails extends Component {
  state = {
    productDetails: {},
    ingredients: []
  };

  fetchProductDetails = () => {
    API.fetchProductDetails(this.props.routeProps.match.params.productId)
      .then(res => {
        this.setState({ productDetails: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchIngredients = () => {
    API.fetchIngredients(this.props.routeProps.match.params.productId)
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
    this.fetchProductDetails();
    this.fetchIngredients();
  }

  render() {
    return (
      <Layout>
        <MyBreadcrumb />

        <Container className="mb-3">
          {/* main details */}
          <Row className="bg-white py-4 border rounded shadow-sm mt-md-4">
            {/* left column */}
            <Col
              md={{ span: 3, offset: 2 }}
              className="d-flex align-items-center justify-content-center"
            >
              {this.state.productDetails.photo ? (
                <Image
                  src={"../images/products/" + this.state.productDetails.photo}
                  className="img-fluid rounded-lg shadow-sm"
                  width="200"
                  height="290"
                  alt="product"
                  fluid
                />
              ) : (
                <Spinner animation="grow" variant="success" />
              )}
            </Col>
            {/* right column */}
            <Col md={5}>
              {/* name */}
              <Row className="text-center">
                <Col>
                  <h2 className="text-dark mt-5 mb-2">
                    {this.state.productDetails.name}
                  </h2>
                </Col>
              </Row>
              <hr />
              {/* price */}
              <Row>
                <Col>
                  {this.state.productDetails.Discount ? (
                    <>
                      <p className="h3 mt-2 mb-0 text-muted">
                        <del>
                          <small className="mr-1">$</small>
                          <small>{this.state.productDetails.salePrice}</small>
                          <small className="ml-1">MXN</small>
                        </del>
                      </p>
                      <p className="h3 mb-2 mt-0 text-danger">
                        <small className="mr-1">$</small>
                        {this.state.productDetails.Discount.newPrice}
                        <small className="ml-1">MXN</small>
                      </p>
                    </>
                  ) : (
                    <p className="h3 my-4 text-dark">
                      <small className="mr-1">$</small>
                      {this.state.productDetails.salePrice}
                      <small className="ml-1">MXN</small>
                    </p>
                  )}
                </Col>
              </Row>
              {/* brand */}
              <Row>
                <Col className="mt-3">
                  <p
                    className="lead mb-0 text-dark"
                    style={{ textTransform: "uppercase" }}
                  >
                    {this.state.productDetails.brand}
                  </p>
                </Col>
              </Row>
              {/* content */}
              <Row>
                <Col>
                  <p className="lead mb-0 text-dark">
                    {this.state.productDetails.content}
                  </p>
                </Col>
              </Row>

              {/* buttons */}
              <Row>
                <Col className="my-4" md={{ span: 5 }}>
                  <AddToShoppingBadBttn product={this.state.productDetails} />
                </Col>
              </Row>
            </Col>
          </Row>

          {/* more details */}
          <Row className="mt-4">
            <Col>
              <Row>
                <Col>
                  <h4 className="text-dark">Ingredientes</h4>
                  {this.state.ingredients.length ? (
                    <ul className="lead list-unstyled">
                      <li>
                        <ul>
                          {this.state.ingredients.map(ing => (
                            <li key={ing.name}>{ing.name}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ) : (
                    <span className="lead">
                      No hay ingredientes disponibles.
                    </span>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 className="text-dark">Descripción</h4>
                  <p className="lead">
                    {this.state.productDetails.description ? (
                      this.state.productDetails.description
                    ) : (
                      <span>No hay descripción disponible.</span>
                    )}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 className="text-dark">Dosis recomendada</h4>
                  <p className="lead">
                    {this.state.productDetails.dose ? (
                      this.state.productDetails.dose
                    ) : (
                      <span>No hay dosis disponible.</span>
                    )}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <HelpButton />
        <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
      </Layout>
    );
  }
}

export default ProductDetails;
