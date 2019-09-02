import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  footer: {
    backgroundColor: "dimgray",
    marginTop: "auto",
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
              <p className="mb-0"><a href="/home" className="text-light">Preguntas Frecuentes</a></p>
              <p className="mb-0"><a href="/home" className="text-light">Devoluciones</a></p>
              <p className="mb-0"><a href="/home" className="text-light">Quejas y sugerencias</a></p>
              <p className="mb-0"><a href="/home" className="text-light">Formas de pago</a></p>
            </div>
          </Col>
          <Col md={6} className="mt-3">
            <h5><strong className="text-white">Nosotros</strong></h5>
            <div>
              <p className="mb-0"><a href="/home" className="text-light">¿Quiénes somos?</a></p>
              <p className="mb-0"><a href="/home" className="text-light">Contáctanos</a></p>
              <p className="mb-0"><a href="/home" className="text-light">Ubicación</a></p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <span className="text-white">Complemento Natural, 2019</span>
      </Container>

    </footer >

  )
}

export default MyFooter;
