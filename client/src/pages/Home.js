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
        <Row className="mb-4 py-4">
          <Col md={8} className="mt-2 mt-md-0">
            <h3>¿Quiénes somos?</h3>
            <hr className="myDivider" />
            <p style={{ fontSize: "17px", fontWeight: "200" }}>
              Somos una tienda Mexicana de productos complementarios naturales,
              nos esforzamos por ofrecerle las más innovadoras marcas y
              productos, contando con un amplio catálogo de vitaminas y
              suplementos alimenticios, remedios herbolarios, medicina
              alternativa y productos para el cuidado personal.
            </p>
          </Col>
          <Col md={4} className="mt-2 mt-md-0">
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
        <Row className="mb-4 py-4">
          <Col>
            <h3>¿Qué ofrecemos?</h3>
            <hr className="myDivider" />
            <Row className="pt-4">
              <Col md={4} className="d-flex flex-column p-3">
                <div className="text-center mb-3">
                  {/* <i className="fas fa-truck" style={{ fontSize: "40px" }} /> */}
                  <Image
                    src={"/images/box.png"}
                    alt="box"
                    width="70"
                    height="70"
                  />
                </div>
                <span className="lead" style={{ color: "#161C2D" }}>
                  Envíos seguros a todo México
                </span>
                <span>
                  En nuestra tienda encontraras productos complementarios a la
                  medicina moderna basados en plantas medicinales.
                </span>
              </Col>
              <Col md={4} className="d-flex flex-column p-3">
                <div className="text-center mb-3">
                  {/* <i className="fas fa-phone" style={{ fontSize: "40px" }} /> */}
                  <Image
                    src="/images/chat.png"
                    alt="chat"
                    width="70"
                    height="70"
                  />
                </div>
                <span className="lead">Asistencia en tus compras</span>
                <span>
                  En nuestra tienda encontraras productos complementarios a la
                  medicina moderna basados en plantas medicinales.
                </span>
              </Col>
              <Col md={4} className="d-flex flex-column p-3">
                <div className="text-center mb-3">
                  {/* <i className="fas fa-tags" style={{ fontSize: "40px" }} /> */}
                  <Image
                    src={"/images/tag.png"}
                    alt="tag"
                    width="70"
                    height="70"
                  />
                </div>
                <span className="lead">Ofertas semanales</span>
                <span>
                  En nuestra tienda encontraras productos complementarios a la
                  medicina moderna basados en plantas medicinales.
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
