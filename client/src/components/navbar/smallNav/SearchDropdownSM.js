import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchDropdownSM = React.memo(() => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="smallDropdownToggleStyle eraseTriangleFromDropdown border-0 p-0">
        <i className="fas fa-search searchSmallnavicon" />
      </Dropdown.Toggle>
      <Dropdown.Menu alignRight id="searchDropdownSMMenu" data-display="static">
        <>
          <div className="px-3 py-2">
            <h6>
              <strong>Buscar</strong>
            </h6>
            <hr className="myDivider" />
          </div>
        </>
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default SearchDropdownSM;
