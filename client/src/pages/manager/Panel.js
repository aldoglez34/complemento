import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import ManagerLayout from "./ManagerLayout";

function Panel() {
  return (
    <ManagerLayout>
      <Row className="mt-0 pt-0">
        {/* products */}
        <Col md className="mt-4">
          <h3 className="text-center">Productos</h3>
          <ListGroup className="shadow-sm">
            <ListGroup.Item action href="/manager/newproduct">
              <i className="fas fa-plus-square mr-2" />
              Nuevo producto
            </ListGroup.Item>
            <ListGroup.Item action href="/home">
              <i className="fas fa-pen-square mr-2" />
              Editar producto
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* discounts */}
        <Col md className="mt-4">
          <h3 className="text-center">Promociones</h3>
          <ListGroup className="shadow-sm">
            <ListGroup.Item action href="/home">
              <i className="fas fa-plus-square mr-2" />
              Nueva promoción
            </ListGroup.Item>
            <ListGroup.Item action href="/home">
              <i className="fas fa-pen-square mr-2" />
              Editar promoción
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* reports */}
        <Col md className="mt-4">
          <h3 className="text-center">Reportes</h3>
          <ListGroup className="shadow-sm">
            <ListGroup.Item action href="/home">
              <i className="fas fa-user-friends mr-2"></i>Clientes
            </ListGroup.Item>
            <ListGroup.Item action href="/home">
              <i className="fas fa-chart-line mr-2"></i>Ventas del mes
            </ListGroup.Item>
            <ListGroup.Item action href="/home">
              <i className="fas fa-chart-bar mr-2"></i>Ventas por cliente
            </ListGroup.Item>
            <ListGroup.Item action href="/home">
              <i className="fas fa-chart-pie mr-2"></i>Otros reportes
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </ManagerLayout>
  );
}

export default Panel;
