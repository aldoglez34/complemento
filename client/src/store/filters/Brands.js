import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

const Brands = React.memo(function Brands(props) {
  return (
    <React.Fragment>
      <h3>Marcas</h3>
      <hr className="myDivider" style={{ backgroundColor: "#edcb58" }} />
      {props.brands.map(brand => {
        return (
          <Nav.Item key={brand.name}>
            <Nav.Link
              title={brand.name}
              className="py-1 filterItem"
              href={"/store/brand/" + brand.name}
              active={brand.name === props.filterSelected ? true : false}
            >
              {brand.name}
              <span
                className="ml-1"
                style={{ color: "#fe4365", fontWeight: "bold" }}
              >
                {brand.productCount}
              </span>
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </React.Fragment>
  );
});

Brands.propTypes = {
  brands: PropTypes.array.isRequired,
  filterSelected: PropTypes.string.isRequired
};

export default Brands;
