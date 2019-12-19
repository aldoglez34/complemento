import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import HelpButton from "../components/misc/HelpButton";
import ScrollButton from "../components/misc/ScrollButton";
import HomePrioritized from "./components/HomePrioritized";
import HomeDiscounts from "./components/HomeDiscounts";
import HomeBestSellers from "./components/HomeBestSellers";
import WelcomeJumbotron from "./components/WelcomeJumbotron";
import "./home.scss";

function Home() {
  return (
    <Layout>
      {/* welcome title */}
      <WelcomeJumbotron />
      {/* content */}
      <Container className="mb-3">
        <Row>
          <Col md={8} className="mt-2">
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
              sagittis nunc ac, efficitur tempor metus. Nullam ut eros a libero
              scelerisque porttitor.
            </p>
          </Col>
          <Col md={4} className="mt-2">
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
            <HomePrioritized />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h1 className="mb-1">Últimas ofertas</h1>
            <hr className="myDivider" />
            <HomeDiscounts />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h1 className="mb-1">Más vendidos</h1>
            <hr className="myDivider" />
            <HomeBestSellers />
          </Col>
        </Row>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  );
}

export default Home;
