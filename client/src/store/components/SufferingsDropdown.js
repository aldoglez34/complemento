import React from "react";
import PropTypes from "prop-types";
import { Dropdown, DropdownButton } from "react-bootstrap";

SufferingsDropdown.propTypes = {
  sufferings: PropTypes.array.isRequired,
  selectedSuffering: PropTypes.string.isRequired,
  handleChangeSuffering: PropTypes.func.isRequired
};

function SufferingsDropdown(props) {
  const styles = {
    dropdown: {
      outline: 0
    }
  };

  return (
    <>
      <DropdownButton
        drop="right"
        title={props.selectedSuffering}
        variant="transparent text-secondary shadow-none"
        style={styles.dropdown}
      >
        <Dropdown.Header>Padecimientos</Dropdown.Header>
        {props.sufferings.length
          ? props.sufferings.map(suff => {
              if (suff.name === props.selectedSuffering) {
                return (
                  <Dropdown.Item
                    as="button"
                    key={suff.name}
                    onClick={() => props.handleChangeSuffering(suff.name)}
                    active
                  >
                    {suff.name}
                    <span className="badge badge-light ml-2">{suff.qty}</span>
                  </Dropdown.Item>
                );
              } else {
                return (
                  <Dropdown.Item
                    as="button"
                    key={suff.name}
                    onClick={() => props.handleChangeSuffering(suff.name)}
                  >
                    {suff.name}
                    <span className="badge badge-light ml-2">{suff.qty}</span>
                  </Dropdown.Item>
                );
              }
            })
          : null}
      </DropdownButton>
    </>
  );
}

export default SufferingsDropdown;
