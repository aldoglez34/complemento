import React from "react";
import { ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import moment from "moment";

const ProductsByCategory = React.memo(({ products }) => {
  return (
    <>
      {/* <h4 className="mb-3">Productos por categoría</h4> */}
      <ListGroup variant="flush">
        {products.map((p) => {
          return (
            <ListGroup.Item key={p.name}>
              <Row>
                <Col md={2}>
                  <Image
                    src={"/images/products/" + p.photo}
                    width="83"
                    height="138"
                  />
                </Col>
                <Col md={9}>
                  <strong style={{ fontSize: "20px" }}>{p.name}</strong>
                  <p className="mb-0">{p.content}</p>
                  <p className="mb-2 lead">
                    {moment(p.createdAt).format("DD/MMMM/YYYY")}
                  </p>
                  <Button
                    className="shadow-sm"
                    variant="info"
                    href={"/manager/products/edit/" + p._id}
                  >
                    <i className="fas fa-pen mr-2" />
                    Editar
                  </Button>
                </Col>
                <Col md={1}>
                  <h2 className="text-danger">$50</h2>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
});

export default ProductsByCategory;
