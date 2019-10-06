import React from "react";
import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";
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
        className="py-3 shadow"
        style={{ backgroundColor: "#264341" }}
      >
        {/* logo (medium to large) */}
        <Navbar.Brand
          className="mr-4 d-none d-md-block"
          href="/"
          style={{ fontFamily: "Josefin Sans", color: "#f3d084" }}
        >
          <Image
            src={"/images/biglogo.png"}
            className="pl-3 m-0"
            width="200"
            height="50"
            fluid
          />
        </Navbar.Brand>
        {/* logo (medium to small) */}
        <Navbar.Brand
          className="mr-auto d-md-none"
          href="/"
          style={{ fontFamily: "Josefin Sans", color: "#f3d084" }}
        >
          <Image
            src={"/images/smalllogo.png"}
            className="p-0 m-0"
            width="115"
            height="63"
            fluid
          />
        </Navbar.Brand>
        {/* collapse */}
        <Navbar.Toggle aria-controls="top-navbar" className="bg-light" />
        <Navbar.Collapse id="top-navbar">
          {/* nav */}
          <Container fluid>
            <Row className="d-flex pl-3 pr-2 pt-2 align-items-center mt-4 mt-md-0">
              <div className="flex-grow-1">
                <SearchBar />
              </div>
              <div className="mr-2">
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
