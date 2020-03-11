import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
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
        {/* who are we & about */}
        <Row className="mb-3 py-4">
          <Col md={8} className="mt-2 mt-md-0">
            <h3>¿Quiénes somos?</h3>
            <hr className="myDivider" />
            <p style={{ fontSize: "16px" }}>
              Somos una tienda Mexicana de productos complementarios naturales,
              nos esforzamos por ofrecerle las más innovadoras marcas y
              productos, contando con un amplio catálogo de vitaminas y
              suplementos alimenticios, remedios herbolarios, medicina
              alternativa y productos para el cuidado personal.
            </p>
          </Col>
          <Col md={4} className="d-none d-md-block">
            <h3>Contáctanos</h3>
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
        {/* 3 columns */}
        <Row className="mb-4 pt-3 pb-4">
          <Col>
            <h3>¿Qué ofrecemos?</h3>
            <hr className="myDivider" />
            <Row className="pt-4">
              <Col md={4} className="d-flex flex-column text-center p-3">
                <div className="mb-3 text-center">
                  <Image
                    src="./images/box.png"
                    alt="box"
                    width="64"
                    height="64"
                  />
                </div>
                <strong className="lead mb-1" style={{ color: "#343638" }}>
                  <strong>Envíos seguros a todo México</strong>
                </strong>
                <span style={{ fontSize: "15px", color: "#78797a" }}>
                  Contamos con envíos seguros a toda la República Mexicana.
                </span>
              </Col>
              <Col md={4} className="d-flex flex-column text-center p-3">
                <div className="mb-3 text-center">
                  <Image
                    src="/images/chat.png"
                    alt="chat"
                    width="64"
                    height="64"
                  />
                </div>
                <span className="lead mb-1" style={{ color: "#343638" }}>
                  <strong>Asistencia en tus compras</strong>
                </span>
                <span style={{ fontSize: "15px", color: "#78797a" }}>
                  ¿Miedo a comprar en línea? Nosotros te ayudamos.
                </span>
              </Col>
              <Col md={4} className="d-flex flex-column text-center p-3">
                <div className="mb-3 text-center">
                  <Image
                    src={"/images/tag.png"}
                    alt="tag"
                    width="64"
                    height="64"
                  />
                </div>
                <span className="lead mb-1" style={{ color: "#343638" }}>
                  <strong>Ofertas semanales</strong>
                </span>
                <span style={{ fontSize: "15px", color: "#78797a" }}>
                  En nuestra tienda encontrarás ofertas nuevas cada semana.
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* destacados */}
        <Row className="mb-4 py-4">
          <Col>
            <h3>Destacados</h3>
            <hr className="myDivider" />
            <HomePrioritized />
          </Col>
        </Row>
        {/* latest offers */}
        <Row className="mb-4 py-4">
          <Col>
            <h3>Últimas ofertas</h3>
            <hr className="myDivider" />
            <HomeDiscounts />
          </Col>
        </Row>
        {/* best sellers */}
        <Row className="mb-4 py-4">
          <Col>
            <h3>Más vendidos</h3>
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
