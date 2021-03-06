import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Layout from "../../components/Layout";
import HelpButton from "../../components/helpbutton/HelpButton";
import ScrollButton from "../../components/scrollbutton/ScrollButton";
import WelcomeJumbotron from "./components/WelcomeJumbotron";
import MyCarousel from "../../components/carousel/MyCarousel";
import API from "../../utils/API";
import Fade from "react-reveal/Fade";

const Home = React.memo(() => {
  const [prioritized, setPrioritized] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    API.fetchPrioritized()
      .then((res) => setPrioritized(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar los productos destacados.");
      });
    API.fetchProductsWithDiscount()
      .then((res) => setDiscounts(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar productos con descuento.");
      });
    API.fetchBestSellers()
      .then((res) => setBestSellers(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar productos más vendidos.");
      });
  }, []);

  return (
    <Layout isHomePage={true}>
      {/* welcome title */}
      <WelcomeJumbotron />
      {/* content */}
      <Container className="mb-4">
        {/* who are we & about */}
        <Row className="mb-3 py-4">
          <Col md={8} className="mt-2 mt-md-0">
            <h2>¿Quiénes Somos?</h2>
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
              tucomplemento@gmail.com
            </address>
          </Col>
        </Row>
        {/* 3 columns */}
        <Row className="mb-4 pt-3 pb-4">
          <Col>
            <h2>¿Qué Ofrecemos?</h2>
            <hr className="myDivider" />
            <Fade>
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
            </Fade>
          </Col>
        </Row>
        {/* carousel - prioritized */}
        <Row className="mb-4 py-4">
          <Col>
            <h2>Destacados</h2>
            <hr className="myDivider" />
            <MyCarousel products={prioritized} />
          </Col>
        </Row>
        {/* carousel - latest offers */}
        <Row className="mb-4 py-4">
          <Col>
            <h2>Últimas Ofertas</h2>
            <hr className="myDivider" />
            <MyCarousel products={discounts} />
          </Col>
        </Row>
        {/* best sellers */}
        <Row className="mb-4 py-4">
          <Col>
            <h2>Más Vendidos</h2>
            <hr className="myDivider" />
            <MyCarousel products={bestSellers} />
          </Col>
        </Row>
        <HelpButton />
        <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
      </Container>
    </Layout>
  );
});

export default Home;
