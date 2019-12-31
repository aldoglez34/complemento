import React from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

ProductsPerPageDropdown.propTypes = {
  qty: PropTypes.number.isRequired,
  handleChangeProductsPerPage: PropTypes.func.isRequired
};

function ProductsPerPageDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" size="sm">
        {props.qty}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          className="dropdownItemSort"
          onClick={() => props.handleChangeProductsPerPage(12)}
          active={props.qty === 12 ? true : false}
        >
          12
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdownItemSort"
          onClick={() => props.handleChangeProductsPerPage(20)}
          active={props.qty === 20 ? true : false}
        >
          20
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdownItemSort"
          onClick={() => props.handleChangeProductsPerPage(28)}
          active={props.qty === 28 ? true : false}
        >
          28
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProductsPerPageDropdown;
