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
              className="py-1 filterItem"
              href={"/store/brand/" + brand.name}
              active={brand.name === props.filterSelected ? true : false}
            >
              {brand.name}
              {brand.name === props.filterSelected ? (
                <span className="ml-1 filterBadgeSelected">
                  {brand.productCount}
                </span>
              ) : (
                <span className="ml-1 filterBadge">{brand.productCount}</span>
              )}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </React.Fragment>
  );
});

Brands.propTypes = {
  brands: PropTypes.array.isRequired
};

export default Brands;
