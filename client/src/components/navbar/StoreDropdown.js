import React from "react";
import { Dropdown, Nav, NavItem, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const StoreDropdown = React.memo(function StoreDropdown({ categories }) {
  return (
    <Dropdown title="Tienda" as={NavItem}>
      <Dropdown.Toggle as={Nav.Link} className="text-light">
        <i className="fas fa-store-alt mr-1" />
        Tienda
      </Dropdown.Toggle>
      <Dropdown.Menu data-display="static">
        <h5 className="pt-1 pl-3 pb-1">Categorías</h5>
        <Dropdown.Divider />
        {categories.length ? (
          categories.map(c => (
            <Dropdown.Item key={c} href={"/store/category/" + c}>
              {c}
            </Dropdown.Item>
          ))
        ) : (
          <div className="text-center">
            <Spinner animation="grow" role="status" variant="warning" />
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
});

StoreDropdown.propTypes = {
  categories: PropTypes.array.isRequired
};

export default StoreDropdown;
