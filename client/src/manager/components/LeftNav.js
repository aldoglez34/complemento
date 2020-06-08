import React from "react";
import { Nav } from "react-bootstrap";

const LeftNav = React.memo(({ leftBarActive }) => {
  return (
    <Nav className="d-flex flex-column h-100" id="verticalNavStyle">
      <h2
        className="text-center mt-3 mb-4"
        style={{
          color: "#edbc58",
          fontFamily: "'Lobster', cursive",
        }}
      >
        Tu Complemento
        <i className="fas fa-leaf ml-1" />
      </h2>
      {/* menu */}
      <Nav.Item className="navItemStyle">MENÚ</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/dashboard"
        active={leftBarActive === "Panel" ? true : false}
      >
        <i
          className="fas fa-tachometer-alt"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Panel</span>
      </Nav.Link>
      <Nav.Item className="navItemStyle">PRODUCTOS</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/products"
        active={leftBarActive === "Productos" ? true : false}
      >
        <i
          className="fas fa-pills"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Productos</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/categories"
        active={leftBarActive === "Categorías" ? true : false}
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
        active={leftBarActive === "Proveedores" ? true : false}
      >
        <i
          className="fas fa-truck-moving"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Proveedores</span>
      </Nav.Link>
      <Nav.Item className="navItemStyle">USUARIOS</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/users"
        active={leftBarActive === "Usuarios" ? true : false}
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
        active={leftBarActive === "Mensajes" ? true : false}
      >
        <i
          className="fas fa-comments"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Mensajes</span>
      </Nav.Link>
      <Nav.Item className="navItemStyle">TIENDA</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/sales"
        active={leftBarActive === "Ventas" ? true : false}
      >
        <i
          className="fas fa-shopping-bag"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Ventas</span>
      </Nav.Link>
    </Nav>
  );
});

export default LeftNav;
