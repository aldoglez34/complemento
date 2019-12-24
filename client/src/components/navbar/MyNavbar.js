import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import StoreDropdown from "./StoreDropdown";
import SearchBar from "./SearchBar";
import ClientDropdown from "./ClientDropdown";
import LoginDropdown from "./LoginDropdown";
import { useSelector } from "react-redux";
import API from "../../utils/API";

function MyNavbar() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const client = useSelector(state => state.client);
  const counter = useSelector(state => state.cart.counter);

  useEffect(() => {
    // fetch items for search bar
    API.fetchItemsForSearchBar()
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
    // fetch items for store dropdown
    API.fetchItemsForStoreDropdown()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Navbar
      // fixed="top"
      expand="lg"
      className="shadow"
      style={{ backgroundColor: "#264341" }}
    >
      {/* logo (medium to large) */}
      <Navbar.Brand
        className="d-none d-md-block"
        href="/"
        style={{
          color: "#f3d084",
          fontFamily: "'Girassol', cursive",
          fontSize: "35px"
        }}
      >
        {/* <i className="fab fa-canadian-maple-leaf mr-1" /> */}
        Complemento Natural
      </Navbar.Brand>
      {/* logo (medium to small) */}
      <Navbar.Brand
        className="d-md-none"
        href="/"
        style={{
          color: "#f3d084",
          fontFamily: "'Girassol', cursive",
          fontSize: "26px"
        }}
      >
        Complemento Natural
        {/* <i className="fab fa-canadian-maple-leaf ml-1" /> */}
      </Navbar.Brand>

      {/* toggle */}
      <Navbar.Toggle
        aria-controls="top-navbar"
        style={{ backgroundColor: "ghostwhite", outline: 0 }}
      />

      {/* collapse */}
      <Navbar.Collapse id="top-navbar">
        {/* nav */}
        <Container fluid>
          {/* bottom row */}
          <Nav className="mr-auto">
            <StoreDropdown categories={categories} />
            <Nav.Item className="ml-0 ml-lg-2">
              <SearchBar items={items} />
            </Nav.Item>
            <Nav.Item className="ml-0 ml-lg-2">
              <Button variant="outline-light" href="/cart">
                <i className="fas fa-shopping-bag mr-1" />
                Bolsa
                <Badge variant="danger" className="ml-1">
                  {counter}
                </Badge>
              </Button>
            </Nav.Item>
            <Nav.Item className="ml-md-auto">
              {client.isLogged ? <ClientDropdown /> : <LoginDropdown />}
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
