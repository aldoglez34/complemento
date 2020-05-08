import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import LoginDropdown from "./loginDropdown";
import ClientDropdown from "./clientDropdown";
import StoreDropdown from "./storeDropdown/StoreDropdown";
import PropTypes from "prop-types";
import SearchButton from "./searchDropdown/SearchButton";

const NavbarSM = React.memo(({ store, items }) => {
  const client = useSelector((state) => state.user);

  return (
    <Container
      className="d-block d-md-none p-3 d-flex justify-content-between"
      id="smallNavbarStyle"
      fluid
    >
      <StoreDropdown store={store} />
      <SearchButton items={items} />
      {client ? <ClientDropdown /> : <LoginDropdown />}
    </Container>
  );
});

NavbarSM.propTypes = {
  store: PropTypes.array.isRequired,
  items: PropTypes.object.isRequired,
};

export default NavbarSM;
