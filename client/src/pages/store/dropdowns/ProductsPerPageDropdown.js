import React from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductsPerPageDropdown = React.memo(
  ({ qty, handleChangeProductsPerPage, options }) => {
    return (
      <div className="d-flex flew-row align-items-center">
        <span>Ver</span>
        <Dropdown className="ml-1" alignRight>
          <Dropdown.Toggle
            variant="transparent"
            className="border border-secondary rounded-pill dropdownSort"
            size="sm"
          >
            {qty}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {options.map(opt => (
              <Dropdown.Item
                key={opt}
                className="dropdownItemSort"
                onClick={() => handleChangeProductsPerPage(opt)}
                active={qty === opt ? true : false}
              >
                {opt}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
);

ProductsPerPageDropdown.propTypes = {
  qty: PropTypes.number.isRequired,
  handleChangeProductsPerPage: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default ProductsPerPageDropdown;
