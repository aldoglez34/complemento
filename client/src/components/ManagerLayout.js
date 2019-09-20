import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import fire from "../firebase/Fire";

ManagerLayout.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  title: {
    marginTop: 25
  }
};

function logout() {
  // fire
  //   .auth()
  //   .signOut()
  //   .then(function() {
  //     window.location.href = "/manager";
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
}

function ManagerLayout(props) {
  return (
    <Container className="py-4">
      <Row>
        <Col>
          <Image src="/images/biglogo.png" alt="logo" fluid />
          <h3 className="text-dark" style={styles.title}>
            <strong>PANEL DE ADMINISTRADOR</strong>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          Bienvenido, <strong>{props.email}</strong>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Button onClick={logout} variant="danger">
            <i className="fas fa-angle-double-left mr-1" />
            Salir
          </Button>
        </Col>
      </Row>
      <hr />
      {props.children}
    </Container>
  );
}

export default ManagerLayout;
