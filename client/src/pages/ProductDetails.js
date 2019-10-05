import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image, Spinner, Button } from "react-bootstrap";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import API from "../utils/API";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import AddToShoppingBagBttn from "../components/AddToShoppingBagBttn";
import BttnNoStock from "../components/BttnNoStock";

class ProductDetails extends Component {
  state = {
    productDetails: {},
    ingredients: [],
    sufferings: []
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

  fetchSufferings() {
    API.fetchSufferings(this.props.routeProps.match.params.productId)
      .then(res => this.setState({ sufferings: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchProductDetails();
    this.fetchIngredients();
    this.fetchSufferings();
  }

  render() {
    return (
      <Layout>
        <MyBreadcrumb />
        <Container className="mt-2 mb-3 p-3">
          <Row>
            <Col className="text-center text-md-left">
              <strong className="h2">{this.state.productDetails.name}</strong>
            </Col>
          </Row>
          <hr />
          <Row className="mt-4">
            {/* column 1 */}
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              {this.state.productDetails.photo ? (
                <Image
                  // src={require("../images/products/" +
                  //   this.state.productDetails.photo)}
                  src={require("../images/products/placeholder.jpg")}
                  className="rounded-lg"
                  fluid
                  alt="product"
                />
              ) : (
                <Spinner animation="grow" variant="success" />
              )}
            </Col>
            {/* column 2 */}
            <Col md={3} className="mt-3 mt-md-0 text-center text-md-left">
              {this.state.productDetails.Discount ? (
                <>
                  <p className="h2 mt-2 mb-0 text-muted">
                    <del>
                      <small className="mr-1">$</small>
                      <small>{this.state.productDetails.salePrice}</small>
                      <small className="ml-1">MXN</small>
                    </del>
                  </p>
                  <p className="h2 mb-2 mt-0 text-danger">
                    <small className="mr-1">$</small>
                    {this.state.productDetails.Discount.newPrice}
                    <small className="ml-1">MXN</small>
                  </p>
                </>
              ) : (
                <p className="h2 my-2 text-dark">
                  <small className="mr-1">$</small>
                  {this.state.productDetails.salePrice}
                  <small className="ml-1">MXN</small>
                </p>
              )}
              {/* brand */}
              <p
                className="lead mt-2 mb-0 text-dark"
                style={{ textTransform: "uppercase" }}
              >
                {this.state.productDetails.brand}
              </p>
              <p className="lead mb-0 text-dark">
                {this.state.productDetails.content}
              </p>
              <Row className="mt-4">
                <Col md={{ span: 6 }}>
                  {this.state.productDetails.stock > 0 ? (
                    <AddToShoppingBagBttn product={this.state.productDetails} />
                  ) : (
                    <BttnNoStock />
                  )}
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6 }} className="mt-3">
                  {this.props.isClientLogged ? (
                    <Button
                      variant="danger"
                      block
                      className="shadow-sm"
                      title="Guardar en favoritos"
                    >
                      Favoritos
                      <i className="fas fa-heart ml-1" />
                    </Button>
                  ) : (
                    <em>
                      Inicia sesión para guardar este producto en tus favoritos
                    </em>
                  )}
                </Col>
              </Row>
            </Col>
            {/* column 3 */}
            <Col md={3} className="mt-3 mt-md-0">
              <p className="lead mb-1 text-dark">Útil para</p>
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
                <span className="lead">No hay ingredientes disponibles.</span>
              )}
            </Col>
            {/* column 4 */}
            <Col md={3}>
              <p className="lead mb-1 text-dark">Contiene</p>
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
                <span className="lead">No hay ingredientes disponibles.</span>
              )}
            </Col>
          </Row>
        </Container>
        <HelpButton />
        <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return { isClientLogged: state.client.isLogged };
};

export default connect(
  mapStateToProps,
  null
)(ProductDetails);
