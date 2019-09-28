import React from "react";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";
import ClientDropdown from "./ClientDropdown";
import LoginDropdown from "./LoginDropdown";
import { useSelector } from "react-redux";

function MyNavbar() {
  const client = useSelector(state => state.client);

  return (
    <>
      <Navbar
        expand="md"
        className="py-3 shadow-sm"
        style={{ backgroundColor: "mediumseagreen" }}
      >
        {/* logo (medium to large) */}
        <Navbar.Brand
          className="mr-auto d-none d-sm-none d-md-none d-lg-block"
          href="/"
          style={{ fontFamily: "Josefin Sans" }}
        >
          <h3 className="text-white my-0 brandFont">
            <strong>Complemento Natural</strong>
            <i className="fab fa-pagelines ml-2" />
          </h3>
        </Navbar.Brand>
        {/* logo (medium to small) */}
        <Navbar.Brand
          className="mr-auto d-lg-none"
          href="/"
          style={{ fontFamily: "Josefin Sans" }}
        >
          <h3 className="text-white my-0 brandFont">
            <strong>CN</strong>
            <i className="fab fa-pagelines ml-2" />
          </h3>
        </Navbar.Brand>
        {/* collapse */}
        <Navbar.Toggle aria-controls="top-navbar" className="bg-light" />
        <Navbar.Collapse id="top-navbar">
          {/* nav */}
          <Container fluid>
            <Row>
              <Col className="mt-3 mt-md-0 mt-lg-0 mt-xl-0">
                <SearchBar />
              </Col>
            </Row>
            <Row>
              <Col className="mt-2">
                <Nav className="mr-auto">
                  <Nav.Item>
                    <Nav.Link href="/store" className="text-light">
                      Tienda
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/store" className="text-light">
                      Rastrear pedido
                    </Nav.Link>
                  </Nav.Item>
                  {/* right */}
                  <Nav.Item className="ml-auto">
                    {client.isLogged ? <ClientDropdown /> : <LoginDropdown />}
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
