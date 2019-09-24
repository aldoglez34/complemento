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
    <>
      <Nav className="flex-column">
        {props.categories.length ? (
          props.categories.map(category => {
            if (category.categoryId === props.selectedCategoryId) {
              return (
                <Nav.Link
                  className="text-success px-0 py-1"
                  key={category.categoryId}
                  //   href="/"
                  onClick={() =>
                    props.handleChangeCategory(category.categoryId)
                  }
                >
                  <strong>{category.name}</strong>
                </Nav.Link>
              );
            } else {
              return (
                <Nav.Link
                  className="text-dark px-0 py-1"
                  //   href="/"
                  key={category.categoryId}
                  onClick={() =>
                    props.handleChangeCategory(category.categoryId)
                  }
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

      {/* <Card className="my-2 shadow-sm">
        <Card.Body className="p-0 py-md-4">
          <ul className="list-group list-group-horizontal-md justify-content-center flex-wrap">
            {props.categories.length ? (
              props.categories.map(category => {
                if (category.categoryId === props.selectedCategoryId) {
                  return (
                    <button
                      type="button"
                      key={category.categoryId}
                      className="list-group-item border-0 rounded-0 active"
                      onClick={() =>
                        props.handleChangeCategory(category.categoryId)
                      }
                    >
                      {category.name}
                    </button>
                  );
                } else {
                  return (
                    <button
                      type="button"
                      key={category.categoryId}
                      className="list-group-item border-0 rounded-0"
                      onClick={() =>
                        props.handleChangeCategory(category.categoryId)
                      }
                    >
                      {category.name}
                    </button>
                  );
                }
              })
            ) : (
              <Spinner animation="border" role="status" variant="success" />
            )}
          </ul>
        </Card.Body>
      </Card> */}
    </>
  );
}

export default CategoriesList;
