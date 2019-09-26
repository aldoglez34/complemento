import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as homeActions from "../redux-actions/home";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyJumbotron from "../components/MyJumbotron";
import API from "../utils/API";

function Home() {
  const dispatch = useDispatch();

  function fetchProductsWithDiscount() {
    API.fetchProductsWithDiscount()
      .then(res => {
        dispatch(homeActions.setDiscounts(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }

  function fetchBestSellers() {
    API.fetchBestSellers()
      .then(res => {
        dispatch(homeActions.setBestSellers(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProductsWithDiscount();
    fetchBestSellers();
  }, []);

  const discounts = useSelector(state => state.discounts);
  const bestSellers = useSelector(state => state.bestSellers);

  return (
    <Layout>
      <MyJumbotron />

      <Container className="mb-3">
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
              sagittis nunc ac, efficitur tempor metus. Nullam ut eros a libero
              scelerisque porttitor.
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
        <Row className="mt-5">
          <Col>
            <h2 className="text-dark">Últimas ofertas</h2>
            <hr />
            <div className="d-flex flex-wrap justify-content-center">
              {discounts.length ? (
                discounts.map(d => {
                  return <ProductCard key={d.productId} product={d} />;
                })
              ) : (
                <div className="text-center mt-4">
                  <Spinner animation="border" role="status" variant="success" />
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2 className="text-dark">Productos destacados</h2>
            <hr />
            <div className="d-flex flex-wrap justify-content-center">
              {bestSellers.length ? (
                bestSellers.map(d => {
                  return <ProductCard key={d.productId} product={d} />;
                })
              ) : (
                <div className="text-center mt-4">
                  <Spinner animation="border" role="status" variant="success" />
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

export default Home;
