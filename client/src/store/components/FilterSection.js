import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import Categories from "./Categories";
import Brands from "./Brands";

const FilterSection = React.memo(props => {
  return (
    <Navbar expand="md" className="filterSection mb-3 mb-md-0">
      {/* toggles */}
      <div className="d-flex justify-content-around w-100">
        <Navbar.Toggle
          className="border-0"
          aria-controls="filtersDropdown"
          style={{ outline: 0 }}
        >
          <div className="d-flex flex-row justify-content-center align-items-center">
            <h5 className="mb-0">Filtros</h5>
            <i className="fas fa-chevron-down ml-1" />
          </div>
        </Navbar.Toggle>
        <Navbar.Toggle
          className="border-0"
          aria-controls="sortDropdown"
          style={{ outline: 0 }}
        >
          <div className="d-flex flex-row justify-content-center align-items-center">
            <h5 className="mb-0">Orden</h5>
            <i className="fas fa-chevron-down ml-1" />
          </div>
        </Navbar.Toggle>
        <Navbar.Toggle
          className="border-0"
          aria-controls="seeDropdown"
          style={{ outline: 0 }}
        >
          <div className="d-flex flex-row justify-content-center align-items-center">
            <h5 className="mb-0">Ver</h5>
            <i className="fas fa-chevron-down ml-1" />
          </div>
        </Navbar.Toggle>
      </div>
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
