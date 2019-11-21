import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Button, Image } from "react-bootstrap";
import fb from "../../firebase/fb";
import * as managerActions from "../../redux-actions/manager";

function LeftNav() {
  const manager = useSelector(state => state.manager);
  const dispatch = useDispatch();

  const logout = () => {
    fb.auth()
      .signOut()
      .then(() => dispatch(managerActions.logoutManager()))
      .catch(error => console.log(error));
  };

  return (
    <Nav className="d-none d-lg-flex flex-column h-100" id="verticalNavStyle">
      <div
        className="w-100 d-flex align-items-center justify-content-center"
        id="verticalNavLogo"
      >
        <Image alt="" src={"/images/smalllogo.png"} width="100" height="30" />
      </div>
      {/* menu */}
      <Nav.Item className="navItemStyle">Menú</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/dashboard"
        active={manager.active === "Inicio" ? true : false}
      >
        <i
          className="fas fa-tachometer-alt"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Inicio</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/products"
        active={manager.active === "Productos" ? true : false}
      >
        <i
          className="fas fa-pills"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Productos</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/products"
        active={manager.active === "Promociones" ? true : false}
      >
        <i
          className="fas fa-tags"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Promociones</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/products"
        active={manager.active === "Proveedores" ? true : false}
      >
        <i
          className="fas fa-truck-moving"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Proveedores</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/products"
        active={manager.active === "Clientes" ? true : false}
      >
        <i
          className="fas fa-users"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Clientes</span>
      </Nav.Link>
      {/* reportes */}
      <Nav.Item className="navItemStyle">Reportes</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager"
        active={manager.active === "Reporte 1" ? true : false}
      >
        <i
          className="fas fa-chart-line"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Reporte 1</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager"
        active={manager.active === "Reporte 2" ? true : false}
      >
        <i
          className="fas fa-chart-bar"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Reporte 2</span>
      </Nav.Link>
      <div className="mt-auto p-3">
        <Button variant="danger" onClick={logout} block>
          Salir
        </Button>
      </div>
    </Nav>
  );
}

export default LeftNav;
