import React from "react";
import { Navbar, Nav, Spinner, Badge } from "react-bootstrap";
import PropTypes from "prop-types";

BrandsList.propTypes = {
  brands: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleFiltering: PropTypes.func.isRequired
};

function BrandsList(props) {
  return props.brands.length ? (
    <>
      <h5 className="mt-3">Marcas</h5>
      <Navbar expand="md" className="filterSection shadow-sm">
        <Navbar.Toggle
          className="mt-3 border-0 w-100 py-2"
          aria-controls="brandsdropdown"
        >
          Filtrar por marca
          <i className="fas fa-chevron-down ml-1" />
        </Navbar.Toggle>
        <Navbar.Collapse id="brandsdropdown">
          <Nav variant="pills" className="flex-column w-100">
            {props.brands.map(brand => {
              return (
                <Nav.Item key={brand.name}>
                  <Nav.Link
                    className="py-1 filterItem"
                    onClick={() => props.handleFiltering(brand.name)}
                    active={brand.name === props.filter ? true : false}
                  >
                    {brand.name}
                    <Badge className="ml-1 filterBadge">
                      {brand.productCount}
                    </Badge>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  ) : (
    <div className="text-center my-4">
      <Spinner animation="grow" role="status" className="spinnerStyle" />
    </div>
  );
}

export default BrandsList;
