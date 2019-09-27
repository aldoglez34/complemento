import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  footer: {
    backgroundColor: "dimgray",
    marginTop: "auto"
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
            <h4>Ayuda</h4>
            <div>
              <p className="mb-0">
                <a href="/" className="text-light">
                  Términos y condiciones
                </a>
              </p>
              <p className="mb-0">
                <a href="/" className="text-light">
                  Quejas y sugerencias
                </a>
              </p>
            </div>
          </Col>
          <Col md={4} className="mt-3">
            <h4>Nosotros</h4>
            <div>
              <p className="mb-0">
                <a href="/" className="text-light">
                  ¿Quiénes somos?
                </a>
              </p>
              <p className="mb-0">
                <a href="/" className="text-light">
                  Contáctanos
                </a>
              </p>
            </div>
          </Col>
          <Col md={4} className="mt-3">
            <h4>Envíos</h4>
            <div>
              <p className="mb-0">
                <a href="/" className="text-light">
                  Formas de pago
                </a>
              </p>
              <p className="mb-0">
                <a href="/" className="text-light">
                  Rastreador de pedidos
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-1 mt-4 text-light">
        <h5>
          <small>© Complemento Natural, 2019</small>
        </h5>
      </Container>
    </footer>
  );
}

export default MyFooter;
