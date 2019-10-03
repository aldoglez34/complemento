import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Spinner } from "react-bootstrap";

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  selected: PropTypes.string
};

function CategoriesList(props) {
  return (
    <Navbar bg="transparent" variant="light" expand="md">
      <Navbar.Toggle aria-controls="categoriesdropdown">
        Selecciona una categoría
        <i className="fas fa-chevron-down ml-1" />
      </Navbar.Toggle>
      <Navbar.Collapse id="categoriesdropdown">
        <Nav className="flex-column">
          {props.categories.length ? (
            props.categories.map(category => {
              if (category.name === props.selected) {
                return (
                  <Nav.Link
                    className="px-0 py-1 text-dark"
                    key={category.categoryId}
                    href={"/store/" + category.name}
                  >
                    <i className="fas fa-caret-right mr-1" />
                    <strong>{category.name}</strong>
                  </Nav.Link>
                );
              } else {
                return (
                  <Nav.Link
                    className="px-0 py-1 text-dark"
                    key={category.categoryId}
                    href={"/store/" + category.name}
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
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CategoriesList;
