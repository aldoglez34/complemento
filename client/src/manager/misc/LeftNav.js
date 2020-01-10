import React from "react";
import { useDispatch } from "react-redux";
import { Nav, Button } from "react-bootstrap";
import fire from "../../firebase/fire";
import * as managerActions from "../../redux/actions/manager";

function LeftNav(props) {
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
        active={props.leftBarActive === "Inicio" ? true : false}
      >
        <i
          className="fas fa-tachometer-alt"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Inicio</span>
      </Nav.Link>
      <Nav.Item className="navItemStyle">Productos</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/products"
        active={props.leftBarActive === "Productos" ? true : false}
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
        active={props.leftBarActive === "Descuentos" ? true : false}
      >
        <i
          className="fas fa-tags"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Descuentos</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/categories"
        active={props.leftBarActive === "Categorías" ? true : false}
      >
        <i
          className="fas fa-th"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Categorías</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/providers"
        active={props.leftBarActive === "Proveedores" ? true : false}
      >
        <i
          className="fas fa-truck-moving"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Proveedores</span>
      </Nav.Link>
      <Nav.Item className="navItemStyle">Usuarios</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/users"
        active={props.leftBarActive === "Usuarios" ? true : false}
      >
        <i
          className="fas fa-users"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Usuarios</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/messages"
        active={props.leftBarActive === "Mensajes" ? true : false}
      >
        <i
          className="fas fa-comments"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Mensajes</span>
      </Nav.Link>
      <Nav.Item className="navItemStyle">Tienda</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/sales"
        active={props.leftBarActive === "Ventas" ? true : false}
      >
        <i
          className="fas fa-shopping-bag"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Ventas</span>
      </Nav.Link>
      <Nav.Item className="navItemStyle">Reportes</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager"
        active={props.leftBarActive === "Reporte 1" ? true : false}
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
        active={props.leftBarActive === "Reporte 2" ? true : false}
      >
        <i
          className="fas fa-chart-bar"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Reporte 2</span>
      </Nav.Link>
      <div className="mt-auto p-3">
        <Button variant="danger" className="shadow-sm" onClick={logout} block>
          Salir
        </Button>
      </div>
    </Nav>
  );
}

export default LeftNav;
