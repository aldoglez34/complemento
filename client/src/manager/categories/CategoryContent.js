import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import ProductsByCategory from "./ProductsByCategory";

const CategoryContent = React.memo(({ title }) => {
  return (
    <>
      <h2 className="mb-4">{title}</h2>
      <CardGroup>
        <Card bg="light">
          <Card.Body>
            <Card.Title>
              <h1>$0</h1>
            </Card.Title>
            <Card.Text>Gasté.</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="light">
          <Card.Body>
            <Card.Title>
              <h1>$5,000</h1>
            </Card.Title>
            <Card.Text>Gané.</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="light">
          <Card.Body>
            <Card.Title>
              <h1>$50,000</h1>
            </Card.Title>
            <Card.Text>Utilidad.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
      <ProductsByCategory />
    </>
  );
});

CategoryContent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoryContent;
