import React from "react";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";
import ClientDropdown from "./ClientDropdown";
import LoginDropdown from "./LoginDropdown";
import { useSelector } from "react-redux";
import ShoppingBag from "./ShoppingBag";
import TrackShipment from "./TrackShipment";

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
          className="mr-4 d-none d-md-block"
          href="/"
          style={{ fontFamily: "Josefin Sans", color: "white" }}
        >
          <h2 className="my-0 brandFont">
            <strong>Complemento Natural</strong>
            <i className="fab fa-pagelines ml-2" />
          </h2>
        </Navbar.Brand>
        {/* logo (medium to small) */}
        <Navbar.Brand
          className="mr-auto d-md-none"
          href="/"
          style={{ fontFamily: "Josefin Sans", color: "white" }}
        >
          <h1 className="my-0 brandFont">
            <strong>CN</strong>
            <i className="fab fa-pagelines ml-2" />
          </h1>
        </Navbar.Brand>
        {/* collapse */}
        <Navbar.Toggle aria-controls="top-navbar" className="bg-light" />
        <Navbar.Collapse id="top-navbar">
          {/* nav */}
          <Container fluid>
            <Row className="d-flex px-3 align-items-center">
              <div className="flex-grow-1">
                <SearchBar />
              </div>
              <div>
                <ShoppingBag />
              </div>
            </Row>
            <Row>
              <Col className="mt-3">
                <Nav className="mr-auto">
                  <Nav.Item>
                    <Nav.Link href="/store" className="text-light mr-md-2">
                      Tienda
                      <i className="fas fa-store-alt ml-1" />
                    </Nav.Link>
                  </Nav.Item>
                  <TrackShipment />
                  {/* right */}
                  <Nav.Item className="ml-md-auto">
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
