import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import ProductsByCategory from "./ProductsByCategory";

const CategoryContent = React.memo(({ title, productCount, products }) => {
  return (
    <>
      <h1 className="mb-4">{title}</h1>
      <CardGroup>
        <Card bg="light">
          <Card.Body>
            <Card.Title>
              <h1>{productCount}</h1>
            </Card.Title>
            <Card.Text>Productos</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="light">
          <Card.Body>
            <Card.Title>
              <h1>X</h1>
            </Card.Title>
            <Card.Text>XX</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="light">
          <Card.Body>
            <Card.Title>
              <h1>X</h1>
            </Card.Title>
            <Card.Text>XX</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
      <ProductsByCategory products={products} />
    </>
  );
});

CategoryContent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoryContent;
