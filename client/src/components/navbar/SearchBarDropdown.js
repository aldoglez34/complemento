import React, { useState } from "react";
import { Spinner, Button, FormControl, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchBarDropdown = React.memo(props => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      className="searchButtonStyle text-light p-0 p-md-2 ml-2"
      variant="transparent"
      title="Buscar"
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      {/* <span className="ml-1" style={{ fontSize: "8px" }}>
        &#x25bc;
      </span> */}
    </Button>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 mt-2 mb-3 w-auto"
            placeholder="¿Qué estás buscando?"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              child =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <i className="fas fa-search mr-1" />
        Buscar
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {props.items.products ? (
          props.items.products.map(p => {
            return (
              <Dropdown.Item key={p._id} href={"/product/details/" + p._id}>
                {p.name}
              </Dropdown.Item>
            );
          })
        ) : (
          <div className="text-center py-4">
            <Spinner animation="grow" role="status" variant="warning" />
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
});

SearchBarDropdown.propTypes = {
  items: PropTypes.object.isRequired
};

export default SearchBarDropdown;
