import React from "react";
import PropTypes from "prop-types";
import NavMD from "./NavMD";
import NavSM from "./NavSM";
import { Navbar, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavbarMD = React.memo(({ store, items, hideBag, hideUser }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {/* top navbar */}
      <Navbar expand="md" id="navbarStyle">
        {/* brand */}
        <Navbar.Brand href="/" id="navbarLogo" title="Inicio">
          Tu Complemento
          <i className="fas fa-leaf ml-1" id="navbarLogoLeaf" />
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
        {/* navs */}
        <NavSM />
        <NavMD
          store={store}
          items={items}
          hideBag={hideBag}
          hideUser={hideUser}
        />
      </Navbar>
    </>
  );
});
NavbarMD.propTypes = {
  store: PropTypes.array.isRequired,
  items: PropTypes.object.isRequired,
  hideBag: PropTypes.bool.isRequired,
  hideUser: PropTypes.bool.isRequired,
};

export default NavbarMD;
