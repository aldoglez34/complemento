import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Button } from "react-bootstrap";
import fire from "../../firebase/fire";
import * as managerActions from "../../redux/actions/manager";

function LeftNav() {
  const manager = useSelector(state => state.manager);
  const dispatch = useDispatch();

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(() => dispatch(managerActions.logoutManager()))
      .catch(error => console.log(error));
  };

  return (
    <Nav className="d-none d-lg-flex flex-column h-100" id="verticalNavStyle">
      <h2
        className="text-center mt-3 mb-0"
        style={{
          color: "#f3d084",
          fontFamily: "'Acme', sans-serif"
        }}
      >
        Complemento
      </h2>
      <h2
        className="text-center mb-0"
        style={{
          color: "#f3d084",
          fontFamily: "'Acme', sans-serif"
        }}
      >
        Natural
      </h2>

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
        href="/manager/categories"
        active={manager.active === "Categorías" ? true : false}
      >
        <i
          className="fas fa-th"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Categorías</span>
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
        href="/manager/discounts"
        active={manager.active === "Descuentos" ? true : false}
      >
        <i
          className="fas fa-tags"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Descuentos</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/providers"
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
        href="/manager/users"
        active={manager.active === "Usuarios" ? true : false}
      >
        <i
          className="fas fa-users"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Usuarios</span>
      </Nav.Link>
      {/* reportes */}
      {/* <Nav.Item className="navItemStyle">Reportes</Nav.Item>
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
      </Nav.Link> */}
      <div className="mt-auto p-3">
        <Button variant="danger" className="shadow-sm" onClick={logout} block>
          Salir
        </Button>
      </div>
    </Nav>
  );
}

export default LeftNav;
