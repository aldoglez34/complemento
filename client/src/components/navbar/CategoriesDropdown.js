import React from "react";
import { Dropdown, Nav, NavItem, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const CategoriesDropdown = React.memo(({ categories }) => {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle
        as={Nav.Link}
        className="navbarDropdownStyle p-0 p-md-2 pt-md-3"
        title="Categorías"
      >
        <i className="fas fa-store dropdownIcon mr-1" />
        Categorías
      </Dropdown.Toggle>
      <Dropdown.Menu data-display="static">
        {categories.length ? (
          <>
            <div className="px-3 py-2">
              <h6>
                <strong>CATEGORÍAS</strong>
              </h6>
              <hr className="myDivider mb-0" />
            </div>
            {categories.map(c => (
              <Dropdown.Item
                key={c.name}
                href={"/store/category/" + c.name}
                title={c.name}
              >
                {c.name}
                <span className="categoriesProductCounter ml-1">
                  {c.productCount}
                </span>
              </Dropdown.Item>
            ))}
          </>
        ) : (
          <div className="text-center py-4">
            <Spinner animation="grow" role="status" variant="warning" />
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
});

CategoriesDropdown.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoriesDropdown;
