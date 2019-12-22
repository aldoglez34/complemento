import React from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

SmallProductsPerPageDropdown.propTypes = {
  qty: PropTypes.number.isRequired
};

function SmallProductsPerPageDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" size="sm">
        {props.qty}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          className="dropdownItemSort"
          //   onClick={() => this.handleChangeProductsPerPage(20)}
          active={props.qty === 20 ? true : false}
        >
          20
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdownItemSort"
          //   onClick={() => this.handleChangeProductsPerPage(30)}
          active={props.qty === 30 ? true : false}
        >
          30
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdownItemSort"
          //   onClick={() => this.handleChangeProductsPerPage(40)}
          active={props.qty === 40 ? true : false}
        >
          40
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SmallProductsPerPageDropdown;
