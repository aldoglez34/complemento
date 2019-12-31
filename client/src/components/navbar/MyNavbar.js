import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import StoreDropdown from "./StoreDropdown";
import SearchBar from "./SearchBar";
import ClientDropdown from "./ClientDropdown";
import LoginDropdown from "./LoginDropdown";
import BagDropdown from "./BagDropdown";
import { useSelector } from "react-redux";
import API from "../../utils/API";

function MyNavbar() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const client = useSelector(state => state.client);
  const cart = useSelector(state => state.cart);

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
          fontFamily: "'Acme', sans-serif",
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
          fontFamily: "'Acme', sans-serif",
          fontSize: "26px"
        }}
      >
        {/* <i className="fab fa-canadian-maple-leaf mr-1" /> */}
        Complemento Natural
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
            <Nav.Item className="ml-0 ml-lg-2 pr-2 w-100 mt-1 mt-lg-0">
              <SearchBar items={items} />
            </Nav.Item>
            <Nav.Item className="ml-lg-auto mt-1 mt-lg-0">
              {cart.show ? <BagDropdown /> : null}
            </Nav.Item>
            <Nav.Item>
              {client.isLogged ? <ClientDropdown /> : <LoginDropdown />}
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
