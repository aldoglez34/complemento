import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import Categories from "./Categories";
import Brands from "./Brands";

const FilterSectionBig = React.memo(props => {
  return (
    <Navbar expand="md" className="p-0 d-none d-md-block">
      <Nav className="flex-column w-100 text-left mt-3 mt-md-0">
        <div>
          <Categories
            categories={props.categories}
            filterSelected={props.filterSelected}
          />
        </div>
        <div className="mt-3">
          <Brands brands={props.brands} filterSelected={props.filterSelected} />
        </div>
      </Nav>
    </Navbar>
  );
});

FilterSectionBig.propTypes = {
  categories: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
  filterSelected: PropTypes.string.isRequired
};

export default FilterSectionBig;
