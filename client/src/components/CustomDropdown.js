import React from "react";
import PropTypes from "prop-types";
import { FormControl, Dropdown } from "react-bootstrap";

CustomDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  qty: PropTypes.number
};

function CustomDropdown(props) {
  console.log(props);
  return (
    <Dropdown className="btn btn-block">
      <Dropdown.Toggle variant="info" className="btn btn-block">
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Buscar"
          // onChange={this.handleChange}
          // value={value}
        />
        {props.items.map(i => {
          if (i.name === props.activeItem) {
            return (
              <Dropdown.Item key={i.name} as="button" active>
                {i.name}
                <span className="badge badge-light ml-2">{i.qty}</span>
              </Dropdown.Item>
            );
          } else {
            return (
              <Dropdown.Item key={i.name} as="button">
                {i.name}
                <span className="badge badge-primary ml-2">{i.qty}</span>
              </Dropdown.Item>
            );
          }
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;
