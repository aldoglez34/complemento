import React from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductsPerPageDropdown = React.memo(
  ({ qty, handleChangeProductsPerPage, options }) => {
    return (
      <>
        {/* big dropdown */}
        <div className="d-none d-md-block">
          <div className="d-flex flew-row align-items-center">
            <span>Ver</span>
            <Dropdown className="ml-1">
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
        </div>
        {/* small dropdown */}
        {/* <div className="d-md-none">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" size="sm">
            {qty}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className="dropdownItemSort"
              onClick={() => handleChangeProductsPerPage(12)}
              active={qty === 12 ? true : false}
            >
              12
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdownItemSort"
              onClick={() => handleChangeProductsPerPage(20)}
              active={qty === 20 ? true : false}
            >
              20
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdownItemSort"
              onClick={() => handleChangeProductsPerPage(28)}
              active={qty === 28 ? true : false}
            >
              28
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div> */}
      </>
    );
  }
);

ProductsPerPageDropdown.propTypes = {
  qty: PropTypes.number.isRequired,
  handleChangeProductsPerPage: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default ProductsPerPageDropdown;
