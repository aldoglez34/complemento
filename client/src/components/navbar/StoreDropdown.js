import React from "react";
import { Dropdown, Nav, NavItem, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const StoreDropdown = React.memo(function StoreDropdown({ categories }) {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={Nav.Link} className="text-light" title="Tienda">
        <i className="fas fa-store-alt mr-1" />
        Tienda
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
              <Dropdown.Item key={c} href={"/store/category/" + c}>
                {c}
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

StoreDropdown.propTypes = {
  categories: PropTypes.array.isRequired
};

export default StoreDropdown;
