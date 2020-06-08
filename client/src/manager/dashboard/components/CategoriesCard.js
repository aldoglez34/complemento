import React from "react";
import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";
import moment from "moment";

const CategoriesCard = React.memo(({ categories }) => {
  moment.locale("es");

  return (
    <Card bg="success">
      <Card.Body>
        <h3 className="text-white">Categorías</h3>
        {categories.length ? (
          <ul className="list-unstyled text-light">
            {categories.map((c) => (
              <li key={c.name}>
                {c.name}
                <Badge variant="light" className="ml-1">
                  {c.productCount}
                </Badge>
              </li>
            ))}
          </ul>
        ) : (
          <em className="text-light">No hay categorías aún</em>
        )}
      </Card.Body>
    </Card>
  );
});

CategoriesCard.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoriesCard;
