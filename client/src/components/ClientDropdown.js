import React from "react";
import { Dropdown, Nav, NavItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import fire from "../firebase/Fire";
import * as clientActions from "../redux-actions/client";

function ClientDropdown() {
  const dispatch = useDispatch();
  const client = useSelector(state => state.client);

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(function() {
        dispatch(clientActions.logoutClient());
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={Nav.Link} style={{ color: "yellow" }}>
        <strong>{client.name + " " + client.firstSurname}</strong>
        <i className="fas fa-user ml-1" />
      </Dropdown.Toggle>
      <Dropdown.Menu
        data-display="static"
        className="bg-light dropdown-menu-xs-left dropdown-menu-md-right"
        // style={{ width: "18.125rem" }}
      >
        <Dropdown.Item href="/">Mis datos</Dropdown.Item>
        <Dropdown.Item href="/">Mis pedidos</Dropdown.Item>
        <Dropdown.Item href="/">Mis favoritos</Dropdown.Item>
        <Dropdown.Divider className="mt-1 mb-2" />
        <Dropdown.Item onClick={logout}>Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ClientDropdown;
