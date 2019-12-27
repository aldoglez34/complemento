import React from "react";
import { Dropdown, Nav, NavItem, Badge, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function BagDropdown() {
  const cart = useSelector(state => state.cart);

  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={Nav.Link} className="text-light">
        <i className="fas fa-shopping-bag" />
        <Badge variant="danger" className="ml-1">
          {cart.counter}
        </Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="dropdown-menu-xs-left dropdown-menu-md-right bg-light"
        style={{ width: "20.125rem" }}
      >
        <h5 className="pt-1 pl-3 pb-1">Bolsa de compras</h5>
        <Dropdown.Divider />
        {cart.counter === 0 ? (
          <em className="px-3">Tu bolsa está vacía</em>
        ) : (
          <div className="px-3">
            {cart.items.map(i => {
              return (
                <div key={i._id} className="d-flex flex-row mt-2">
                  <span>{i.name}</span>
                  <span className="text-muted ml-2">{"x" + i.qty}</span>
                  <strong className="ml-auto">$50</strong>
                </div>
              );
            })}
            <Dropdown.Divider />
            <Button
              block
              size="sm"
              className="mt-2"
              variant="danger"
              href="/cart"
            >
              Proceder con el pago
            </Button>
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BagDropdown;
