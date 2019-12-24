import React from "react";
import { Dropdown, Nav, NavItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import fire from "../../firebase/fire";
import * as clientActions from "../../redux/actions/client";

function ClientDropdown() {
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
      <Dropdown.Toggle as={Nav.Link} style={{ color: "#f3d084" }}>
        <i className="fas fa-user mr-1" />
        {client.name + " " + client.firstSurname}
      </Dropdown.Toggle>
      <Dropdown.Menu
        data-display="static"
        className="dropdown-menu-xs-left dropdown-menu-md-right"
      >
        <Dropdown.Item className="clientDropdownItem" href="/client/info">
          Mis datos
        </Dropdown.Item>
        <Dropdown.Item className="clientDropdownItem" href="/client/shipment">
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
}

export default ClientDropdown;
