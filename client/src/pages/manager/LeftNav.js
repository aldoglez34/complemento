import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Button, Image } from "react-bootstrap";
import fire from "../../firebase/Fire";
import * as managerActions from "../../redux-actions/manager";

function LeftNav() {
  const manager = useSelector(state => state.manager);
  const dispatch = useDispatch();

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(function() {
        dispatch(managerActions.logoutManager());
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Nav className="d-none d-lg-flex flex-column h-100" id="verticalNavStyle">
      <div
        className="w-100 d-flex align-items-center justify-content-center"
        id="verticalNavLogo"
      >
        <Image alt="" src={"/images/smalllogo.png"} width="100" height="30" />
      </div>
      <Nav.Item className="navItemStyle">Menú</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/dashboard"
        active={manager.active === "Inicio" ? true : false}
      >
        <i className="fas fa-tachometer-alt" style={{ width: "25px" }} />
        Inicio
      </Nav.Link>
      <Nav.Item className="navItemStyle">Productos</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager/newproduct"
        active={manager.active === "Nuevo producto" ? true : false}
      >
        <i className="fas fa-plus-square" style={{ width: "25px" }} />
        Nuevo producto
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager"
        active={manager.active === "Editar producto" ? true : false}
      >
        <i className="fas fa-pen-square" style={{ width: "25px" }} />
        Editar producto
      </Nav.Link>
      <Nav.Item className="navItemStyle">Promociones</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager"
        active={manager.active === "Nueva promoción" ? true : false}
      >
        <i className="fas fa-plus-square" style={{ width: "25px" }} />
        Nueva promoción
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager"
        active={manager.active === "Editar promoción" ? true : false}
      >
        <i className="fas fa-pen-square" style={{ width: "25px" }} />
        Editar promoción
      </Nav.Link>
      <Nav.Item className="navItemStyle">Reportes</Nav.Item>
      <Nav.Link
        className="navLinkStyle"
        href="/manager"
        active={manager.active === "Reporte 1" ? true : false}
      >
        <i className="fas fa-chart-line" style={{ width: "25px" }} />
        Reporte 1
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/manager"
        active={manager.active === "Reporte 2" ? true : false}
      >
        <i className="fas fa-chart-bar" style={{ width: "25px" }} />
        Reporte 2
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
