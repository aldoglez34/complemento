import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  footer: {
    backgroundColor: "dimgray",
    marginTop: "auto"
  },
  logo: {
    color: "white"
  }
};

function MyFooter() {
  return (
    <footer
      className="mt-auto py-2 text-center text-light"
      style={styles.footer}
    >
      <Container>
        <Row>
          <Col md={4} className="mt-3">
            <h5>
              <strong className="text-white">Ayuda</strong>
            </h5>
            <div>
              <p className="mb-0">
                <a href="/home" className="text-light">
                  Términos y condiciones
                </a>
              </p>
              <p className="mb-0">
                <a href="/home" className="text-light">
                  Quejas y sugerencias
                </a>
              </p>
            </div>
          </Col>
          <Col md={4} className="mt-3">
            <h5>
              <strong className="text-white">Nosotros</strong>
            </h5>
            <div>
              <p className="mb-0">
                <a href="/home" className="text-light">
                  ¿Quiénes somos?
                </a>
              </p>
              <p className="mb-0">
                <a href="/home" className="text-light">
                  Contáctanos
                </a>
              </p>
            </div>
          </Col>
          <Col md={4} className="mt-3">
            <h5>
              <strong className="text-white">Tienda</strong>
            </h5>
            <div>
              <p className="mb-0">
                <a href="/home" className="text-light">
                  Formas de pago
                </a>
              </p>
              <p className="mb-0">
                <a href="/home" className="text-light">
                  Rastreador de pedidos
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-1 mt-4">
        <span style={styles.logo}>© Complemento Natural, 2019</span>
      </Container>
    </footer>
  );
}

export default MyFooter;
