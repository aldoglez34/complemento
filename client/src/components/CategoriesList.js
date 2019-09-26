import React from "react";
import PropTypes from "prop-types";
import { Spinner, Nav } from "react-bootstrap";

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategoryId: PropTypes.number.isRequired,
  handleChangeCategory: PropTypes.func.isRequired
};

function CategoriesList(props) {
  return (
    <Nav className="flex-column">
      {props.categories.length ? (
        props.categories.map(category => {
          if (category.categoryId === props.selectedCategoryId) {
            return (
              <Nav.Link
                className="px-0 py-1"
                key={category.categoryId}
                onClick={() => {
                  let cat = {};
                  cat.catId = category.categoryId;
                  cat.catName = category.name;
                  props.handleChangeCategory(cat);
                }}
              >
                <i className="fas fa-check mr-1" />
                <strong>{category.name}</strong>
              </Nav.Link>
            );
          } else {
            return (
              <Nav.Link
                className="text-dark px-0 py-1"
                key={category.categoryId}
                onClick={() => {
                  let cat = {};
                  cat.catId = category.categoryId;
                  cat.catName = category.name;
                  props.handleChangeCategory(cat);
                }}
              >
                {category.name}
              </Nav.Link>
            );
          }
        })
      ) : (
        <div className="text-center py-3">
          <Spinner animation="border" role="status" variant="success" />
        </div>
      )}
    </Nav>
  );
}

export default CategoriesList;
