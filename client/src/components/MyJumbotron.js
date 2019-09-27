import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";

const styles = {
  jumbotron: {
    backgroundImage: "url('images/jumbotronbg.jpg')",
    backgroundSize: "cover",
    backgroundColor: "gainsboro",
    backgroundBlendMode: "multiply"
  },
  container: {
    height: "19rem"
  }
};

function MyJumbotron() {
  return (
    <>
      <Jumbotron fluid style={styles.jumbotron}>
        <Container
          className="d-flex justify-items-center flex-column text-center"
          style={styles.container}
        >
          <h4 className="text-light">Bienvenido a...</h4>
          <h1 className="text-white mb-0">
            <strong>Complemento Natural</strong>
          </h1>
          <p className="lead text-light">Tu solución naturista</p>
          <div>
            <Button
              variant="success"
              size="lg"
              href="/store"
              className="shadow"
            >
              Explora la tienda
              <i className="fas fa-store-alt ml-2" />
              <i className="fas fa-angle-double-right ml-2" />
            </Button>
          </div>
          {/* <div className="mt-auto">
            <SearchBar />
          </div> */}
          <Row className="mt-auto">
            <Col md={{ span: 8, offset: 2 }}>
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default MyJumbotron;
