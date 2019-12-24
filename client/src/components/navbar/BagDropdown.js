import React from "react";
import { Dropdown, Nav, NavItem, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

function BagDropdown() {
  const counter = useSelector(state => state.cart.counter);

  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={Nav.Link} className="text-light">
        <i className="fas fa-shopping-bag" />
        <Badge variant="danger" className="ml-1">
          {counter}
        </Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-xs-left dropdown-menu-md-right">
        <Dropdown.Item>Hello there!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BagDropdown;
