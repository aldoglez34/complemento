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

      <Container className="d-flex flex-row justify-content-center py-1 mt-4 text-light">
        <h5>
          <small>© Complemento Natural, 2019</small>
        </h5>
        <span className="mx-2">{"//"}</span>
        <div>
          <a href="/" className="text-light" title="Twitter">
            <i className="fab fa-twitter mr-2" />
          </a>
          <a href="/" className="text-light" title="Facebook">
            <i className="fab fa-facebook-square mr-2" />
          </a>
          <a href="/" className="text-light" title="Instagram">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default MyFooter;
