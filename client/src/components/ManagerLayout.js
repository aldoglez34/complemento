import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

ManagerLayout.propTypes = {
    children: PropTypes.node.isRequired
}

const styles = {
    title: {
        marginTop: 25
    }
}

function ManagerLayout(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-dark" style={styles.title}>
                        <strong>PANEL DE ADMINISTRADOR<i className="fas fa-users-cog ml-2"></i></strong>
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Bienvenido, <strong>Aldo Solano</strong></span>
                </Col>
            </Row>
            <hr />
            {props.children}
        </Container>
    );
}

export default ManagerLayout;
