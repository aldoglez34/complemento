import React from "react";
import { Navbar, Nav, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

BrandsList.propTypes = {
  brands: PropTypes.array.isRequired
};

function BrandsList(props) {
  return (
    <Navbar bg="transparent" variant="light" expand="md">
      <Navbar.Toggle aria-controls="categoriesdropdown">
        Filtra por marca
        <i className="fas fa-chevron-down ml-1" />
      </Navbar.Toggle>
      <Navbar.Collapse id="categoriesdropdown">
        <Nav className="flex-column">
          {props.brands.length ? (
            props.brands.map(brand => {
              return (
                <Nav.Link
                  className="px-0 py-1 text-dark"
                  key={brand.DISTINCT}
                  href={"/store/" + brand.DISTINCT}
                >
                  {brand.DISTINCT}
                </Nav.Link>
              );
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

export default BrandsList;
