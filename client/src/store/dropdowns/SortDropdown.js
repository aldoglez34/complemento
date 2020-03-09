import React from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

const SortDropdown = React.memo(function SortDropdown(props) {
  return (
    <div className="d-flex flew-row align-items-center">
      <span>Orden</span>
      <Dropdown className="ml-1">
        <Dropdown.Toggle
          variant="transparent"
          className="border border-secondary rounded-pill dropdownSort"
          size="sm"
        >
          {props.active}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            className="dropdownItemSort"
            onClick={() => props.applySorting("Nombre ascendente")}
            active={props.active === "Nombre ascendente" ? true : false}
          >
            Nombre ascendente
          </Dropdown.Item>
          <Dropdown.Item
            className="dropdownItemSort"
            onClick={() => props.applySorting("Nombre descendente")}
            active={props.active === "Nombre descendente" ? true : false}
          >
            Nombre descendente
          </Dropdown.Item>
          <Dropdown.Item
            className="dropdownItemSort"
            onClick={() => props.applySorting("Precio: bajo a alto")}
            active={props.active === "Precio: bajo a alto" ? true : false}
          >
            Precio: bajo a alto
          </Dropdown.Item>
          <Dropdown.Item
            className="dropdownItemSort"
            onClick={() => props.applySorting("Precio: alto a bajo")}
            active={props.active === "Precio: alto a bajo" ? true : false}
          >
            Precio: alto a bajo
          </Dropdown.Item>
          <Dropdown.Item
            className="dropdownItemSort"
            onClick={() => props.applySorting("Más vendido")}
            active={props.active === "Más vendido" ? true : false}
          >
            Más vendido
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
});

SortDropdown.propTypes = {
  active: PropTypes.string.isRequired,
  applySorting: PropTypes.func.isRequired
};

export default SortDropdown;
