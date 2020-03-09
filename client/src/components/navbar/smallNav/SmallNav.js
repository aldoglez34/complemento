import React from "react";
import { useSelector } from "react-redux";
import "./smallnav.scss";
import { Container } from "react-bootstrap";
import LoginDropdown from "../LoginDropdown";
import ClientDropdown from "../ClientDropdown";
import SearchDropdownSM from "./SearchDropdownSM";
import CategoriesDropdown from "../CategoriesDropdown";
import PropTypes from "prop-types";
import "./smallnav.scss";

const SmallNav = React.memo(({ categories }) => {
  const client = useSelector(state => state.client);

  return (
    <Container
      className="d-block d-md-none p-3 d-flex justify-content-between"
      id="smallnavStyle"
      fluid
    >
      <CategoriesDropdown categories={categories} />
      <SearchDropdownSM />
      {client.isLogged ? <ClientDropdown /> : <LoginDropdown />}
    </Container>
  );
});

SmallNav.propTypes = {
  categories: PropTypes.array.isRequired
};

export default SmallNav;
