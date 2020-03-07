import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import StoreDropdown from "./StoreDropdown";
import SearchBar from "./SearchBar";
import ClientDropdown from "./ClientDropdown";
import LoginDropdown from "./LoginDropdown";
import BagDropdown from "./BagDropdown";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import "./mynavbar.scss";
import PropTypes from "prop-types";

const MyNavbar = React.memo(({ hideBag }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const client = useSelector(state => state.client);

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
    <Navbar expand="lg" id="navbarStyle">
      {/* logo */}
      <Navbar.Brand href="/" id="navbarLogo">
        Tu Complemento
        <i className="fas fa-leaf ml-2" />
      </Navbar.Brand>
      {/* toggle */}
      <Navbar.Toggle aria-controls="top-navbar" id="navbarToggleStyle">
        <i className="fas fa-bars navbarToggleIcon" />
        {/* <i className="fas fa-times navbarToggleIcon" /> */}
      </Navbar.Toggle>
      {/* collapse */}
      <Navbar.Collapse id="top-navbar">
        <Container className="px-0 px-md-2 pb-2 pb-md-0" fluid>
          <Nav className="mr-auto">
            <StoreDropdown categories={categories} />
            <Nav.Item className="ml-0 ml-lg-2 pr-2 w-100 mt-1 mt-lg-0">
              <SearchBar items={items} />
            </Nav.Item>
            <Nav.Item className="ml-lg-auto mt-1 mt-lg-0">
              {hideBag ? null : <BagDropdown />}
            </Nav.Item>
            <Nav.Item>
              {client.isLogged ? <ClientDropdown /> : <LoginDropdown />}
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
});

MyNavbar.propTypes = {
  hideBag: PropTypes.bool
};

export default MyNavbar;
