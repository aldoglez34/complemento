import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import fire from "../firebase/Fire";
import * as managerActions from "../redux-actions/manager";

ManagerLayout.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  title: {
    marginTop: "1.5625rem"
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
        dispatch(managerActions.logoutManager());
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
        <Col className="d-flex align-items-center justify-content-start m-0">
          <Button onClick={logout} variant="danger" className="m-0">
            <i className="fas fa-angle-double-left mr-1" />
            Salir
          </Button>
        </Col>
        <Col className="d-flex align-items-center justify-content-end m-0">
          <Button variant="transparent" className="m-0">
            <i className="fas fa-user text-dark h2" />
          </Button>
          <Button variant="transparent" className="m-0">
            <i className="fas fa-cog text-dark h2" />
          </Button>
        </Col>
      </Row>
      {props.children}
    </Container>
  );
}

export default ManagerLayout;
