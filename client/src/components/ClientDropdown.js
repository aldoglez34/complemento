import React from "react";
import { Dropdown } from "react-bootstrap";
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
    <Dropdown>
      <Dropdown.Toggle className="mr-2 p-2 border-0" variant="light">
        <i className="fas fa-user mr-2" />
        {client.name + " " + client.firstSurname}
      </Dropdown.Toggle>
      <Dropdown.Menu>
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
