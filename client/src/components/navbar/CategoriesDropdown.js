import React from "react";
import { Dropdown, Nav, NavItem, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const CategoriesDropdown = React.memo(({ categories }) => {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle
        as={Nav.Link}
        className="text-light p-0 p-md-2"
        title="Categorías"
      >
        <i className="fas fa-store mr-1" />
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
              <Dropdown.Item key={c.name} href={"/store/category/" + c.name}>
                {c.name}
                <span
                  className="ml-1"
                  style={{ color: "#fe4365", fontWeight: "bold" }}
                >
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
