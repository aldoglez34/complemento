import React from "react";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import StoreDropdown from "./storeDropdown/StoreDropdown";
import SearchButton from "./searchDropdown/SearchButton";
import ClientDropdown from "./clientDropdown";
import LoginDropdown from "./loginDropdown";
import BagDropdown from "./bagDropdown";
import PropTypes from "prop-types";

const NavMD = React.memo(({ store, items, hideBag, hideUser }) => {
  const client = useSelector((state) => state.user);

  return (
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
          {hideUser ? null : client ? <ClientDropdown /> : <LoginDropdown />}
        </Nav.Item>
      </Nav>
    </div>
  );
});

NavMD.propTypes = {
  store: PropTypes.array.isRequired,
  items: PropTypes.object.isRequired,
  hideBag: PropTypes.bool.isRequired,
  hideUser: PropTypes.bool.isRequired,
};

export default NavMD;
