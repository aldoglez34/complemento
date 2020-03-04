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

const Home = React.memo(function Home() {
  return (
    <Layout isHomePage={true}>
      {/* welcome title */}
      <WelcomeJumbotron />
      {/* content */}
      <Container>
        <Row>
          <Col md={8} className="mt-2">
            <h2>¿Quiénes somos?</h2>
            <hr className="myDivider" />
            <p>
              Somos una tienda Mexicana de productos Complementarios Naturales,
              nos esforzamos por ofrecerle las más innovadoras marcas y
              productos, contando con un amplio catálogo de vitaminas y
              suplementos alimenticios, remedios herbolarios, medicina
              alternativa y productos para el cuidado personal.
            </p>
            <p>
              En nuestra tienda encontraras productos complementarios a la
              medicina moderna basados en plantas medicinales, a precios
              accesibles con compra rápida, segura y que enviaremos a tu
              domicilio en todo México.
            </p>
          </Col>
          <Col md={4} className="mt-2">
            <h2>Contáctanos</h2>
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
              <a
                style={{ color: "#5a5a5a" }}
                href="mailto:complemento.natural@gmail.com"
              >
                complemento.natural@gmail.com
              </a>
            </address>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h2>Destacados</h2>
            <hr className="myDivider" />
            <HomePrioritized />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h2>Últimas ofertas</h2>
            <hr className="myDivider" />
            <HomeDiscounts />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h2>Más vendidos</h2>
            <hr className="myDivider" />
            <HomeBestSellers />
          </Col>
        </Row>
        <HelpButton />
        <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
      </Container>
    </Layout>
  );
});

export default Home;
