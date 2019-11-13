import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import API from "../utils/API";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import FavButton from "../components/FavButton";
import AddToBagButton from "../components/AddToBagButton";

class ProductDetails extends Component {
  state = {
    productDetails: {},
    isLoading: true
  };

  componentDidMount() {
    API.fetchProductDetails(this.props.routeProps.match.params.productId)
      .then(res => {
        this.setState({ productDetails: res.data, isLoading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const breadcrumbRoutes = [
      { name: "Inicio", to: "/" },
      { name: "Tienda", to: "/store" },
      {
        name: this.state.productDetails.category,
        to: "/store/" + this.state.productDetails.category
      },
      { name: this.state.productDetails.name, to: "active" }
    ];

    return (
      <Layout>
        <MyBreadcrumb routes={breadcrumbRoutes} />
        {this.state.isLoading ? (
          <Container className="d-flex align-items-center justify-content-center h-100">
            <Spinner className="spinnerStyle" animation="grow" />
          </Container>
        ) : (
          <Container className="my-4 p-3">
            <h2 className="mb-1">{this.state.productDetails.name}</h2>
            <hr className="myDivider" />
            <Row className="mt-4">
              {/* column 1 */}
              <Col md={3} className="text-center">
                <Image
                  // src={require("../images/products/placeholder.jpg")}
                  src={this.state.productDetails.photo}
                  className="rounded-lg"
                  fluid
                  alt="product"
                />
              </Col>
              {/* column 2 */}
              <Col md={3} className="mt-2 mt-md-0 text-center text-md-left">
                {/* <FavButton product={this.state.productDetails} /> */}
                <div className="my-3">
                  {this.state.productDetails.discount ? (
                    this.state.productDetails.discount.hasDiscount ? (
                      <div className="h2 mt-0 mb-1 text-dark">
                        <small>
                          <del className="text-muted">
                            {"$" + this.state.productDetails.salePrice + " MXN"}
                          </del>
                        </small>
                        <strong className="ml-1">
                          {"$" +
                            this.state.productDetails.discount.newPrice +
                            " MXN"}
                        </strong>
                      </div>
                    ) : (
                      <div className="h2 mt-0 mb-1 text-dark">
                        <strong>
                          {"$" + this.state.productDetails.salePrice + " MXN"}
                        </strong>
                      </div>
                    )
                  ) : null}
                  <hr />
                  <div className="lead mb-0 text-dark">
                    {this.state.productDetails.content}
                  </div>
                  <hr />
                  <div
                    className="lead mt-0 mb-0 text-dark"
                    style={{ textTransform: "uppercase" }}
                  >
                    {this.state.productDetails.brand}
                  </div>
                </div>
                <div className="mt-2">
                  <AddToBagButton
                    product={this.state.productDetails}
                    size="lg"
                  />
                </div>
              </Col>
              {/* column 3 */}
              <Col md={3} className="mt-3 mt-md-0">
                <p className="lead mb-1 text-dark">Útil para</p>
                {this.state.productDetails.sufferings ? (
                  this.state.productDetails.sufferings.length ? (
                    <ul className="list-unstyled">
                      <li>
                        <ul>
                          {this.state.productDetails.sufferings.map(suff => (
                            <li key={suff}>{suff}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ) : (
                    <span>No hay información disponible</span>
                  )
                ) : null}
              </Col>
              {/* column 4 */}
              <Col md={3}>
                <p className="lead mb-1 text-dark">Contiene</p>
                {this.state.productDetails.ingredients ? (
                  this.state.productDetails.ingredients.length ? (
                    <ul className="list-unstyled">
                      <li>
                        <ul>
                          {this.state.productDetails.ingredients.map(ing => (
                            <li key={ing}>{ing}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ) : (
                    <span>No hay información disponible</span>
                  )
                ) : null}
              </Col>
            </Row>
          </Container>
        )}
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
