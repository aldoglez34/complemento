import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";
import moment from "moment";

const LastProductCard = React.memo(({ product }) => {
  moment.locale("es");

  return (
    <Card>
      <Card.Header>
        <strong>Último Producto</strong>
      </Card.Header>
      {Object.keys(product).length ? (
        <>
          <Card.Body>
            <div className="text-center">
              <Image
                className="mb-2"
                src={"/images/products/" + product.photo}
                width="125"
                height="185"
              />
            </div>
            <Card.Title>
              <h4>{product.name}</h4>
            </Card.Title>
            <div className="d-flex flex-column">
              <span>{product.content}</span>
              <span>{product.category}</span>
              <div className="d-flex flex-row">
                <span>Por:</span>
                <em className="ml-1">{product.provider.name}</em>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {moment(product.createdAt).format("LLLL")}
            </small>
          </Card.Footer>
        </>
      ) : (
        <Card.Body>
          <Card.Text>
            <em>No hay nada aquí</em>
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
});

LastProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default LastProductCard;
