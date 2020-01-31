import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Badge } from "react-bootstrap";

const FilterSection = React.memo(function FilterSection(props) {
  return (
    <Navbar
      expand="md"
      className="filterSection shadow-sm rounded mb-3 mb-md-0"
    >
      <Navbar.Toggle
        className="mt-3 border-0 w-100 py-1"
        aria-controls="categoriesdropdown"
        style={{ outline: 0 }}
      >
        <div className="d-flex flex-row justify-content-center align-items-center">
          <h5 className="mb-0">Selecciona</h5>
          <i className="fas fa-chevron-down ml-1" />
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse id="categoriesdropdown">
        <Nav variant="pills" className="flex-column w-100 text-left">
          <h5 className="mt-3" style={{ fontWeight: "600" }}>
            Categoría
            <i className="fas fa-stream ml-1" />
          </h5>
          {props.categories.map(category => {
            return (
              <Nav.Item key={category.name}>
                <Nav.Link
                  className="py-1 filterItem"
                  href={"/store/category/" + category.name}
                  active={category.name === props.filterSelected ? true : false}
                >
                  {category.name}
                  {category.name === props.filterSelected ? (
                    <Badge className="ml-1 filterBadgeSelected">
                      {category.productCount}
                    </Badge>
                  ) : (
                    <Badge className="ml-1 filterBadge">
                      {category.productCount}
                    </Badge>
                  )}
                </Nav.Link>
              </Nav.Item>
            );
          })}
          <h5 className="mt-3" style={{ fontWeight: "600" }}>
            Laboratorio
            <i className="fas fa-vials ml-1" />
          </h5>
          {props.brands.map(brand => {
            return (
              <Nav.Item key={brand.name}>
                <Nav.Link
                  className="py-1 filterItem"
                  href={"/store/brand/" + brand.name}
                  active={brand.name === props.filterSelected ? true : false}
                >
                  {brand.name}
                  {brand.name === props.filterSelected ? (
                    <Badge className="ml-1 filterBadgeSelected">
                      {brand.productCount}
                    </Badge>
                  ) : (
                    <Badge className="ml-1 filterBadge">
                      {brand.productCount}
                    </Badge>
                  )}
                </Nav.Link>
              </Nav.Item>
            );
          })}
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
