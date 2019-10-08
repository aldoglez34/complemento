import React, { Component } from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import Layout from "./Layout";
import ProductCard from "../components/ProductCard";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyCarousel from "../components/MyCarousel";
import API from "../utils/API";

class Home extends Component {
  state = {
    discounts: [],
    bestSellers: [],
    prioritized: []
  };
  fetchProductsWithDiscount() {
    API.fetchProductsWithDiscount()
      .then(res => {
        this.setState({ discounts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchBestSellers() {
    API.fetchBestSellers()
      .then(res => {
        this.setState({ bestSellers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchPrioritized() {
    API.fetchPrioritized()
      .then(res => {
        this.setState({ prioritized: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchProductsWithDiscount();
    this.fetchBestSellers();
    this.fetchPrioritized();
  }

  render() {
    return (
      <Layout>
        <MyCarousel />
        <Container className="mb-3">
          <Row>
            <Col md={8} className="mt-5">
              <h2>¿Quiénes Somos?</h2>
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
              <Button
                variant="success"
                size="lg"
                href="/store"
                className="shadow p-3 mt-3"
              >
                Explora la tienda
                <i className="fas fa-store-alt ml-2" />
                <i className="fas fa-angle-double-right ml-2" />
              </Button>
            </Col>
            <Col md={4} className="mt-5">
              <h2>Contáctanos</h2>
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
          <Row className="mt-5">
            <Col>
              <h2>Destacados</h2>
              <hr />
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.prioritized.length ? (
                  this.state.prioritized.map(p => {
                    return <ProductCard key={p.productId} product={p} />;
                  })
                ) : (
                  <div className="text-center mt-4">
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
          <Row className="mt-5">
            <Col>
              <h2>Últimas ofertas</h2>
              <hr />
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.discounts.length ? (
                  this.state.discounts.map(d => {
                    return <ProductCard key={d.productId} product={d} />;
                  })
                ) : (
                  <div className="text-center mt-4">
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
          <Row className="mt-5">
            <Col>
              <h2>Más vendidos</h2>
              <hr />
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.bestSellers.length ? (
                  this.state.bestSellers.map(b => {
                    return <ProductCard key={b.productId} product={b} />;
                  })
                ) : (
                  <div className="text-center mt-4">
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
