import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import Categories from "./Categories";
import Brands from "./Brands";

const FilterSection = React.memo(props => {
  return (
    <Navbar expand="md" className="mb-3 mb-md-0 p-0">
      {/* toggle */}
      <Navbar.Toggle
        className="p-0 border border-danger"
        aria-controls="filtersDropdown"
        style={{ outline: 0 }}
      >
        <div className="d-flex flex-row justify-content-center align-items-center border border-primary">
          <h5 className="mb-0">Filtros</h5>
          <i className="fas fa-chevron-down ml-1" />
        </div>
      </Navbar.Toggle>
      {/* collapsed menus */}
      <Navbar.Collapse id="filtersDropdown">
        <Nav className="flex-column w-100 text-left mt-3 mt-md-0">
          <div>
            <Categories
              categories={props.categories}
              filterSelected={props.filterSelected}
            />
          </div>
          <div className="mt-3">
            <Brands
              brands={props.brands}
              filterSelected={props.filterSelected}
            />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

FilterSection.propTypes = {
  categories: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
  filterSelected: PropTypes.string
};

export default FilterSection;
