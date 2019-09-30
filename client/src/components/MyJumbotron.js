import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

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
          <h3 className="text-light" style={{ fontFamily: "Josefin Sans" }}>
            Bienvenido a...
          </h3>
          <h1 className="text-white" style={{ fontFamily: "Josefin Sans" }}>
            <strong>Complemento Natural</strong>
            <i className="fab fa-pagelines ml-2" />
          </h1>
          {/* <Image src="/images/whitelogo.png" fluid /> */}
          <h3 className="text-light" style={{ fontFamily: "Josefin Sans" }}>
            Tu solución naturista
          </h3>
          <div className="mt-auto">
            <Button
              variant="success"
              size="lg"
              href="/store"
              className="shadow pt-3 pb-3 px-4"
            >
              Explora la tienda
              <i className="fas fa-store-alt ml-2" />
              <i className="fas fa-angle-double-right ml-2" />
            </Button>
          </div>
          {/* <div className="mt-auto">
            <SearchBar />
          </div> */}
          {/* <Row className="mt-auto">
            <Col md={{ span: 8, offset: 2 }}>
              <SearchBar />
            </Col>
          </Row> */}
        </Container>
      </Jumbotron>
    </>
  );
}

export default MyJumbotron;
