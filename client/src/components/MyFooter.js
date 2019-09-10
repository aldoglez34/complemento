import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  footer: {
    backgroundColor: "dimgray",
    marginTop: "auto",
  },
  logo: {
    color: "white"
  }
};

function MyFooter() {

  return (

    <footer className="mt-auto py-4 text-center text-light" style={styles.footer} >

      <Container>
        <Row>
          <Col md={6} className="mt-3">
            <h5><strong className="text-white">Ayuda</strong></h5>
            <div>
              <p className="mb-0"><a href="/questions" className="text-light">Preguntas frecuentes</a></p>
              <p className="mb-0"><a href="/complaints" className="text-light">Quejas y sugerencias</a></p>
              <p className="mb-0"><a href="/payment" className="text-light">Formas de pago</a></p>
              <p className="mb-0"><a href="/home" className="text-light">Envíos</a></p>
            </div>
          </Col>
          <Col md={6} className="mt-3">
            <h5><strong className="text-white">Nosotros</strong></h5>
            <div>
              <p className="mb-0"><a href="/about" className="text-light">¿Quiénes somos?</a></p>
              <p className="mb-0"><a href="/contact" className="text-light">Contáctanos</a></p>
              <p className="mb-0"><a href="/location" className="text-light">Ubicación</a></p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-2 mt-4">
        <span className="lead" style={styles.logo}>Complemento Natural, 2019</span>
      </Container>

    </footer >

  )
}

export default MyFooter;
