import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
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
      <Container className="mb-4">
        <Row className="mb-4">
          <Col md={8} className="mt-2 mt-md-0">
            <h5>
              <strong>¿QUIÉNES SOMOS?</strong>
            </h5>
            <hr className="myDivider" />
            <p>
              Somos una tienda Mexicana de productos Complementarios Naturales,
              nos esforzamos por ofrecerle las más innovadoras marcas y
              productos, contando con un amplio catálogo de vitaminas y
              suplementos alimenticios, remedios herbolarios, medicina
              alternativa y productos para el cuidado personal.
            </p>
            <p className="d-none d-md-block">
              En nuestra tienda encontraras productos complementarios a la
              medicina moderna basados en plantas medicinales, a precios
              accesibles con compra rápida, segura y que enviaremos a tu
              domicilio en todo México.
            </p>
          </Col>
          <Col md={4} className="mt-2 mt-md-0">
            <h5>
              <strong>CONTÁCTANOS</strong>
            </h5>
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
              complemento.natural@gmail.com
            </address>
          </Col>
        </Row>
        <Row className="mb-4 p-3">
          <Col className="d-flex flex-column p-3">
            <div className="text-center mb-3">
              <i className="fas fa-truck" style={{ fontSize:  "40px" }} />
            </div>
            <span className="lead" style={{ color: "#161C2D" }}>
              Envíos seguros a todo México
            </span>
            <span>
              En nuestra tienda encontraras productos complementarios a la
              medicina moderna basados en plantas medicinales.
            </span>
          </Col>
          <Col className="d-flex flex-column p-3">
            <div className="text-center mb-3">
              <i className="fas fa-phone" style={{ fontSize: "40px" }} />
            </div>
            <span className="lead">Asistencia en tu primer compra</span>
            <span>
              En nuestra tienda encontraras productos complementarios a la
              medicina moderna basados en plantas medicinales.
            </span>
          </Col>
          <Col className="d-flex flex-column p-3">
            <div className="text-center mb-3">
              <i className="fas fa-tags" style={{ fontSize: "40px" }} />
            </div>
            <span className="lead">Ofertas semanales</span>
            <span>
              En nuestra tienda encontraras productos complementarios a la
              medicina moderna basados en plantas medicinales.
            </span>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h5>
              <strong>DESTACADOS</strong>
            </h5>
            <hr className="myDivider" />
            <HomePrioritized />
          </Col>
        </Row>
        <br />
        <Row className="mb-4">
          <Col>
            <h5>
              <strong>ÚLTIMAS OFERTAS</strong>
            </h5>
            <hr className="myDivider" />
            <HomeDiscounts />
          </Col>
        </Row>
        <br />
        <Row className="mb-4">
          <Col>
            <h5>
              <strong>MÁS VENDIDOS</strong>
            </h5>
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
