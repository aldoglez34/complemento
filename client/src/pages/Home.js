import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyJumbotron from "../components/MyJumbotron";
import API from "../utils/API";

class Home extends Component {
  state = {
    discounts: [],
    bestSellers: []
  };

  getProductsWithDiscount = () => {
    API.getProductsWithDiscount()
      .then(res => {
        this.setState({ discounts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getBestSellers = () => {
    API.getBestSellers()
      .then(res => {
        this.setState({ bestSellers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getProductsWithDiscount();
    this.getBestSellers();
  }

  render() {
    return (
      <Layout>
        <MyJumbotron />

        <Container className="mb-3">
          {/* row 1 about and contact info */}
          <Row>
            <Col md={8} className="mt-5">
              <h2 className="text-dark">¿Quiénes Somos?</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                cursus arcu vitae nunc commodo viverra. Nunc malesuada rutrum
                tortor ac fringilla. Nam malesuada felis lectus, in tempus velit
                ullamcorper a. Praesent interdum erat ac leo dictum aliquet.
                Curabitur bibendum facilisis leo sit amet ornare. Sed aliquet
                justo ac nunc euismod imperdiet.
              </p>
              <p>
                Sed sollicitudin viverra urna in molestie. Vivamus bibendum
                tristique nisi non maximus. Fusce sit amet lacinia orci. Nam
                viverra fringilla urna vitae bibendum. Morbi interdum porttitor
                augue, a tincidunt quam feugiat et. Cras velit felis, faucibus
                sagittis nunc ac, efficitur tempor metus. Nullam ut eros a
                libero scelerisque porttitor.
              </p>
            </Col>
            <Col md={4} className="mt-5">
              <h2 className="text-dark">Contáctanos</h2>
              <hr />
              <address>
                <strong>Dirección</strong>
                <br />
                3481 Melrose Place
                <br />
                Beverly Hills, CA 90210
                <br />
              </address>
              <address>
                <i className="fas fa-phone mr-2" />
                (228) 111-2031
                <br />
                <i className="fas fa-envelope mr-2" />
                <a href="mailto:complemento.natural@gmail.com">
                  complemento.natural@gmail.com
                </a>
              </address>
            </Col>
          </Row>
          {/* row 2 latest discounts */}
          <Row className="mt-5">
            <Col>
              <h2 className="text-dark">Últimas ofertas</h2>
              <hr />
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.discounts.length ? (
                  this.state.discounts.map(discount => {
                    return (
                      <ProductCard
                        key={discount.productId}
                        product={discount}
                      />
                    );
                  })
                ) : (
                  <div className="text-center my-3">
                    <Spinner
                      animation="border"
                      role="status"
                      variant="success"
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
          {/* row 3 best sellers */}
          <Row className="mt-5">
            <Col>
              <h2 className="text-dark">Productos destacados</h2>
              <hr />
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.bestSellers.length ? (
                  this.state.bestSellers.map(bs => {
                    return <ProductCard key={bs.productId} product={bs} />;
                  })
                ) : (
                  <div className="text-center my-3">
                    <Spinner
                      animation="border"
                      role="status"
                      variant="success"
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>

        <HelpButton />
        <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
      </Layout>
    );
  }
}

export default Home;
