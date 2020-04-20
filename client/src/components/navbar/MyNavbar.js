import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import SmallNav from "./smallNav/SmallNav";
import StoreDropdown from "./StoreDropdown";
import SearchButton from "./SearchButton";
import ClientDropdown from "./ClientDropdown";
import LoginDropdown from "./LoginDropdown";
import BagDropdown from "./BagDropdown";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import "./mynavbar.scss";
import PropTypes from "prop-types";

const MyNavbar = React.memo(({ hideBag, hideUser }) => {
  const [items, setItems] = useState({});

  const [store, setStore] = useState([]);

  const client = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    // fetch items for search bar
    API.fetchItemsForSearchBar()
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.msg);
      });
    // fetch items for categories dropdown
    API.fetchItemsForStoreDropdown()
      .then((res) => setStore(res.data))
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.msg);
      });
  }, []);

  return (
    <>
      {/* top navbar */}
      <Navbar expand="md" id="navbarStyle">
        {/* brand */}
        <Navbar.Brand href="/" id="navbarLogo" title="Inicio">
          Tu Complemento
          <i className="fas fa-leaf ml-1" id="navbarLogoLeaf"  />
        </Navbar.Brand>
        {/* toggle */}
        <Navbar.Toggle
          aria-controls="top-navbar"
          className="p-0"
          id="navbarToggleStyle"
        >
          <i className="fas fa-shopping-basket" id="navbarToggleBagIcon" />
          {/* <i className="fas fa-shopping-bag" id="navbarToggleBagIcon" /> */}
          <Badge variant="danger" pill id="navbarToggleCounter">
            {cart.counter}
          </Badge>
        </Navbar.Toggle>
        {/* sm */}
        <div className="d-block d-md-none w-100">
          <Navbar.Collapse id="top-navbar">
            <Container className="my-2 bg-white rounded" fluid>
              <BagDropdown size="small" />
            </Container>
          </Navbar.Collapse>
        </div>
        {/* md */}
        <div className="d-none d-md-block w-100">
          <Nav style={{ fontSize: "16px" }}>
            <StoreDropdown store={store} />
            <Nav.Item>
              <SearchButton items={items} />
            </Nav.Item>
            <Nav.Item className="ml-auto">
              {hideBag ? null : <BagDropdown size="large" />}
            </Nav.Item>
            <Nav.Item>
              {hideUser ? null : client ? (
                <ClientDropdown />
              ) : (
                <LoginDropdown />
              )}
            </Nav.Item>
          </Nav>
        </div>
      </Navbar>
      {/* smaller navbar for mobile */}
      <SmallNav store={store} items={items} />
    </>
  );
});

MyNavbar.propTypes = {
  hideBag: PropTypes.bool,
};

export default MyNavbar;
