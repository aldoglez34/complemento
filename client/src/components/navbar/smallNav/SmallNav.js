import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import LoginDropdown from "../LoginDropdown";
import ClientDropdown from "../ClientDropdown";
import StoreDropdown from "../StoreDropdown";
import PropTypes from "prop-types";
import SearchButton from "../SearchButton";
import "./smallnav.scss";

const SmallNav = React.memo(({ store, items }) => {
  const client = useSelector(state => state.client);

  return (
    <Container
      className="d-block d-md-none p-3 d-flex justify-content-between"
      id="smallNavbarStyle"
      fluid
    >
      <StoreDropdown store={store} />
      <SearchButton items={items} />
      {client.isLogged ? <ClientDropdown /> : <LoginDropdown />}
    </Container>
  );
});

SmallNav.propTypes = {
  store: PropTypes.array.isRequired,
  items: PropTypes.object.isRequired
};

export default SmallNav;
