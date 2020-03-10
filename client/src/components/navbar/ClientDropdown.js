import React from "react";
import { Dropdown, Nav, NavItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import fire from "../../firebase/fire";
import * as clientActions from "../../redux/actions/client";

const ClientDropdown = React.memo(function ClientDropdown() {
  const dispatch = useDispatch();
  const client = useSelector(state => state.client);

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(() => dispatch(clientActions.logoutClient()))
      .catch(error => console.log(error));
  };

  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle
        as={Nav.Link}
        className="clientLoginDropdown p-0 p-md-2 pt-md-3"
      >
        <i className="fas fa-user dropdownIcon mr-1" />
        {client.name + " " + client.firstSurname}
      </Dropdown.Toggle>
      <Dropdown.Menu
        alignRight
        data-display="static"
        className="dropdown-menu-xs-left dropdown-menu-md-right"
      >
        <Dropdown.Item className="clientDropdownItem" href="/client/info">
          Mis datos
        </Dropdown.Item>
        <Dropdown.Item
          className="clientDropdownItem"
          href="/client/shipment"
          disabled
        >
          Mis pedidos
        </Dropdown.Item>
        <Dropdown.Item className="clientDropdownItem" href="/client/favorites">
          Mis favoritos
        </Dropdown.Item>
        <Dropdown.Divider className="mt-1 mb-2" />
        <Dropdown.Item className="clientDropdownItem" onClick={logout}>
          Cerrar sesión
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default ClientDropdown;
