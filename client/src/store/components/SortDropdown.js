import React from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

SortDropdown.propTypes = {
  active: PropTypes.string.isRequired,
  applySorting: PropTypes.func.isRequired
};

function SortDropdown(props) {
  return (
    <>
      {/* big dropdow */}
      <div className="d-none d-md-block">
        <div className="d-flex flew-row align-items-center">
          <span>Ordenar por</span>
          <Dropdown className="ml-1">
            <Dropdown.Toggle variant="secondary" size="sm">
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
                onClick={() => props.applySorting("Más vendido")}
                active={props.active === "Más vendido" ? true : false}
              >
                Más vendido
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdownItemSort"
                onClick={() => props.applySorting("Más caro primero")}
                active={props.active === "Más caro primero" ? true : false}
              >
                Más caro primero
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdownItemSort"
                onClick={() => props.applySorting("Más barato primero")}
                active={props.active === "Más barato primero" ? true : false}
              >
                Más barato primero
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/* small dropdown */}
      <div className="d-md-none">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" size="sm">
            <i className="fas fa-sort-amount-down" />
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
              onClick={() => props.applySorting("Más vendido")}
              active={props.active === "Más vendido" ? true : false}
            >
              Más vendido
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdownItemSort"
              onClick={() => props.applySorting("Más caro primero")}
              active={props.active === "Más caro primero" ? true : false}
            >
              Más caro primero
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdownItemSort"
              onClick={() => props.applySorting("Más barato primero")}
              active={props.active === "Más barato primero" ? true : false}
            >
              Más barato primero
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default SortDropdown;
