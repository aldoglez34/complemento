import React, { Component } from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import Layout from "./Layout";
import ProductCard from "../components/ProductCard";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyCarousel from "../components/MyCarousel";
import API from "../../utils/API";

class Home extends Component {
  state = {
    discounts: [],
    bestSellers: [],
    prioritized: []
  };

  componentDidMount() {
    // fetch products with discount
    API.fetchProductsWithDiscount()
      .then(res => this.setState({ discounts: res.data }))
      .catch(err => console.log(err));
    // fetch best seller products
    API.fetchBestSellers()
      .then(res => this.setState({ bestSellers: res.data }))
      .catch(err => console.log(err));
    // fetch prioritized products
    API.fetchPrioritized()
      .then(res => this.setState({ prioritized: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Layout>
        <MyCarousel />
        <Container className="mb-3">
          <Row>
            <Col md={8} className="mt-5">
              <h1 className="mb-1">¿Quiénes somos?</h1>
              <hr className="myDivider" />
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
                size="lg"
                href="/store"
                className="shadow-sm p-3 mt-3"
                // id="homebttn"
                variant="success"
              >
                Explora la tienda
                <i className="fas fa-store-alt ml-2" />
                <i className="fas fa-angle-double-right ml-2" />
              </Button>
            </Col>
            <Col md={4} className="mt-5">
              <h1 className="mb-1">Contáctanos</h1>
              <hr className="myDivider" />
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
              <h1 className="mb-1">Destacados</h1>
              <hr className="myDivider" />
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.prioritized.length ? (
                  this.state.prioritized.map(p => {
                    return <ProductCard key={p._id} product={p} />;
                  })
                ) : (
                  <div className="text-center my-4">
                    <Spinner variant="warning" animation="grow" role="status" />
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h1 className="mb-1">Últimas ofertas</h1>
              <hr className="myDivider" />
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.discounts.length ? (
                  this.state.discounts.map(d => {
                    return <ProductCard key={d._id} product={d} />;
                  })
                ) : (
                  <div className="text-center my-4">
                    <Spinner variant="warning" animation="grow" role="status" />
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h1 className="mb-1">Más vendidos</h1>
              <hr className="myDivider" />
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.bestSellers.length ? (
                  this.state.bestSellers.map(b => {
                    return <ProductCard key={b._id} product={b} />;
                  })
                ) : (
                  <div className="text-center my-4">
                    <Spinner variant="warning" animation="grow" role="status" />
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
