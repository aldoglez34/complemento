import React from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

SortDropdown.propTypes = {
  active: PropTypes.string.isRequired,
  applyFilter: PropTypes.func.isRequired
};

function SortDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" size="sm">
        {props.active}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          className="dropdownItemSort"
          onClick={() => props.applyFilter("Nombre ascendente")}
          active={props.active === "Nombre ascendente" ? true : false}
        >
          Nombre ascendente
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdownItemSort"
          onClick={() => props.applyFilter("Nombre descendente")}
          active={props.active === "Nombre descendente" ? true : false}
        >
          Nombre descendente
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdownItemSort"
          onClick={() => props.applyFilter("Más vendido")}
          active={props.active === "Más vendido" ? true : false}
        >
          Más vendido
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdownItemSort"
          onClick={() => props.applyFilter("Más caro primero")}
          active={props.active === "Más caro primero" ? true : false}
        >
          Más caro primero
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdownItemSort"
          onClick={() => props.applyFilter("Más barato primero")}
          active={props.active === "Más barato primero" ? true : false}
        >
          Más barato primero
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortDropdown;
