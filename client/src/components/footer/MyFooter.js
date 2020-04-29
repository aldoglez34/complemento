import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = React.memo(() => {
  return (
    <footer
      className="mt-auto py-2 text-center text-light"
      style={{ backgroundColor: "#0c2c2c", marginTop: "auto" }}
    >
      <Container className="text-light">
        <Row>
          <Col md={4} className="mt-3">
            <h5 style={{ color: "#f3d084" }}>Ayuda</h5>
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
            <h5 style={{ color: "#f3d084" }}>Nosotros</h5>
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
            <h5 style={{ color: "#f3d084" }}>Pedidos</h5>
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
        <span
          style={{ color: "#c8c0b0", fontFamily: "Lobster", fontSize: "16px" }}
        >
          ©Tu Complemento
          <i className="fas fa-leaf ml-1" />
        </span>
      </Container>
    </footer>
  );
});

export default MyFooter;
