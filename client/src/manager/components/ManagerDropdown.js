import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ManagerDropdown = React.memo(() => {
  const manager = useSelector((state) => state.user);

  return (
    <Dropdown>
      <Dropdown.Toggle id="managerTopNavUser" title="Administrador">
        {manager.name}
      </Dropdown.Toggle>
      <Dropdown.Menu
        data-display="static"
        className="dropdown-menu-right p-4"
        style={{ width: "25rem" }}
      >
        <div>
          <i className="fas fa-user mr-2" />
          <span>
            {manager.name +
              " " +
              manager.firstSurname +
              " " +
              manager.secondSurname}
          </span>
        </div>
        <div className="mt-2">
          <i className="fas fa-at mr-2" />
          <span>{manager.email}</span>
        </div>
        <Button
          className="mt-3 shadow-sm"
          variant="warning"
          // onClick={firebase._signOut}
        >
          Cerrar sesión
        </Button>
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default ManagerDropdown;
