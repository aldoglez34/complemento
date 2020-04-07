import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const ProductContentPt2 = React.memo(({ dose, ingredients }) => {
  return (
    <Col>
      <h5 className="mb-1">Dosis</h5>
      <p className="mb-2">{dose}</p>
      <h5 className="mb-1">Ingredientes</h5>
      {ingredients.length ? (
        <ul className="mb-2 list-unstyled">
          <li>
            <ul>
              {ingredients
                .sort((a, b) => a.localeCompare(b))
                .map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
            </ul>
          </li>
        </ul>
      ) : (
        <span className="mb-2">Información no disponible</span>
      )}
    </Col>
  );
});

ProductContentPt2.propTypes = {
  dose: PropTypes.string.isRequired,
  ingredients: PropTypes.array,
};

export default ProductContentPt2;
