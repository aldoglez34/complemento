import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import SmallNav from "./smallNav/SmallNav";
import BagCollapsed from "./smallNav/BagCollapsed";
import CategoriesDropdown from "./CategoriesDropdown";
import SearchBar from "./SearchBar";
import SearchBarDropdown from "./SearchBarDropdown";
import ClientDropdown from "./ClientDropdown";
import LoginDropdown from "./LoginDropdown";
import BagDropdown from "./BagDropdown";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import "./mynavbar.scss";
import PropTypes from "prop-types";

const MyNavbar = React.memo(({ hideBag = false }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const client = useSelector(state => state.client);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    // fetch items for search bar
    API.fetchItemsForSearchBar()
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
    // fetch items for categories dropdown
    API.fetchItemsForCategoriesDropdown()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {/* top navbar */}
      <Navbar expand="md" id="navbarStyle">
        {/* brand */}
        <Navbar.Brand href="/" id="navbarLogo">
          Tu Complemento
          <i className="fas fa-leaf ml-2" style={{ fontSize: "24px" }} />
        </Navbar.Brand>
        {/* toggle */}
        <Navbar.Toggle
          aria-controls="top-navbar"
          className="p-0"
          id="navbarToggleStyle"
        >
          <i className="fas fa-shopping-bag navbarToggleIcon" />
          <Badge variant="danger" pill style={{ marginLeft: "-4px" }}>
            {cart.counter}
          </Badge>
        </Navbar.Toggle>
        {/* sm and md */}
        <div className="d-block d-md-none w-100">
          <Navbar.Collapse id="top-navbar">
            <Container className="my-2 bg-white rounded" fluid>
              <BagCollapsed />
            </Container>
          </Navbar.Collapse>
        </div>
        <div className="d-none d-md-block w-100">
          <Nav>
            <CategoriesDropdown categories={categories} />
            {/* <Nav.Item>
              <SearchBar items={items} />
            </Nav.Item> */}
            <Nav.Item>
              <SearchBarDropdown items={items} />
            </Nav.Item>
            <Nav.Item className="ml-auto">
              {hideBag ? null : <BagDropdown />}
            </Nav.Item>
            <Nav.Item>
              {client.isLogged ? <ClientDropdown /> : <LoginDropdown />}
            </Nav.Item>
          </Nav>
        </div>
      </Navbar>
      {/* smaller navbar for mobile */}
      <SmallNav categories={categories} />
    </>
  );
});

MyNavbar.propTypes = {
  hideBag: PropTypes.bool
};

export default MyNavbar;
