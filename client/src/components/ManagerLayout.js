import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import fire from "../firebase/Fire";
import { logoutManager } from "../redux-actions";

ManagerLayout.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  title: {
    marginTop: 25
  }
};

function ManagerLayout(props) {
  // getting the value of manager from the store
  const manager = useSelector(state => state.manager);
  const dispatch = useDispatch();

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(function() {
        dispatch(logoutManager());
      })
      .catch(function(error) {
        console.log(error);
      });
  };

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
          Bienvenido, <strong>{manager.email}</strong>
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
