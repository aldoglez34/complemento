import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import ManagerLayout from "../../components/ManagerLayout";

function Panel(props) {
  return (
    <ManagerLayout>
      <Row className="mt-0 pt-0">
        <Col md className="mt-4">
          <h3 className="text-center">-Productos-</h3>
          <ListGroup>
            <ListGroup.Item action href="/manager/newproduct">
              <i className="fas fa-plus-square mr-2" />
              Nuevo producto
            </ListGroup.Item>
            <ListGroup.Item action href="/home">
              <i className="fas fa-pen-square mr-2" />
              Editar producto
            </ListGroup.Item>
            <ListGroup.Item action href="/home">
              <i className="fas fa-caret-square-up mr-2" />
              Aumentar existencia
            </ListGroup.Item>
            <ListGroup.Item action variant="danger" href="/home">
              <i className="fas fa-minus-square mr-2" />
              Eliminar producto
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md className="mt-4">
          <h3 className="text-center">-Promociones-</h3>
          <ListGroup>
            <ListGroup.Item action href="/home">
              <i className="fas fa-plus-square mr-2" />
              Nueva promoción
            </ListGroup.Item>
            <ListGroup.Item action href="/home">
              <i className="fas fa-pen-square mr-2" />
              Editar promoción
            </ListGroup.Item>
            <ListGroup.Item action variant="danger" href="/home">
              <i className="fas fa-minus-square mr-2" />
              Eliminar promoción
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md className="mt-4">
          <h3 className="text-center">-Reportes-</h3>
          <ListGroup>
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
