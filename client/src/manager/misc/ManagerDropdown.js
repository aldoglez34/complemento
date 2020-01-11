import React from "react";
import { Dropdown, Nav, NavItem, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import fire from "../../firebase/fire";
import * as managerActions from "../../redux/actions/manager";

function ManagerDropdown() {
  const dispatch = useDispatch();

  const manager = useSelector(state => state.manager);

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(() => dispatch(managerActions.logoutManager()))
      .catch(error => console.log(error));
  };

  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={Nav.Link} className="text-dark">
        <i className="fas fa-user mr-1" style={{ fontSize: "23px" }} />
      </Dropdown.Toggle>
      <Dropdown.Menu
        data-display="static"
        className="dropdown-menu-right"
        style={{ width: "25rem" }}
      >
        <div className="px-4 pt-2">
          <i className="fas fa-user mr-2" />
          <span>
            {manager.name +
              " " +
              manager.firstSurname +
              " " +
              manager.secondSurname}
          </span>
        </div>
        <div className="px-4 mt-2">
          <i className="fas fa-at mr-2" />
          <span>{manager.email}</span>
        </div>
        <div className="px-4 mt-3 pb-2">
          <Button variant="dark" onClick={logout}>
            Cerrar sesión
          </Button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ManagerDropdown;
