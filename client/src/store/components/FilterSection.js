import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import Categories from "./Categories";
import Brands from "./Brands";

const FilterSection = React.memo(function FilterSection(props) {
  return (
    <Navbar expand="md" className="filterSection mb-3 mb-md-0">
      <Navbar.Toggle
        className="mt-3 border-0 w-100 py-1"
        aria-controls="categoriesdropdown"
        style={{ outline: 0 }}
      >
        <div className="d-flex flex-row justify-content-center align-items-center">
          <h5 className="mb-0">Filtros</h5>
          <i className="fas fa-chevron-down ml-1" />
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse id="categoriesdropdown">
        <Nav className="flex-column w-100 text-left">
          <div className="mt-3">
            <Categories categories={props.categories} />
          </div>
          <div className="mt-3">
            <Brands brands={props.brands} />
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
