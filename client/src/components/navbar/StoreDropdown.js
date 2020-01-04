import React from "react";
import { Dropdown, Nav, NavItem, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

StoreDropdown.propTypes = {
  categories: PropTypes.array.isRequired
};

function StoreDropdown(props) {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={Nav.Link} className="text-light">
        <i className="fas fa-store-alt mr-1" />
        Tienda
      </Dropdown.Toggle>
      <Dropdown.Menu data-display="static">
        <h5 className="pt-1 pl-3 pb-1">Categorías</h5>
        <Dropdown.Divider />
        {props.categories.length ? (
          props.categories.map(c => (
            <Dropdown.Item key={c._id} href={"/store/category/" + c.name}>
              {c.name}
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
}

export default StoreDropdown;
