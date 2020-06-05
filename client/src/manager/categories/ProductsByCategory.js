import React from "react";
import { ListGroup, Row, Col, Image, Button, Badge } from "react-bootstrap";
import { formatNumber } from "../../utils/formatNumber";
import moment from "moment";
import "moment/locale/es";

const ProductsByCategory = React.memo(({ products }) => {
  return (
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
              <Col md={8}>
                <div className="d-flex flex-row" style={{ fontSize: "20px" }}>
                  <strong>{p.name}</strong>
                  {p.price.discount.hasDiscount ? (
                    <Badge
                      variant="warning"
                      className="ml-2 d-flex align-items-center"
                    >
                      <span>{p.price.discount.percentage + "%"}</span>
                    </Badge>
                  ) : null}
                </div>
                <p className="mb-0">{p.content}</p>
                <p className="mb-2 lead">
                  {moment(p.createdAt).format("LLLL")}
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
              <Col md={2}>
                <h3 className="text-danger text-right">
                  {formatNumber(
                    p.price.discount.hasDiscount
                      ? p.price.discount.newPrice
                      : p.price.salePrice
                  )}
                </h3>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
});

export default ProductsByCategory;
