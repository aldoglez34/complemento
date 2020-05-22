import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const TopRightBttn = React.memo(({ text, link }) => {
  return (
    <Button className="managerTopNavBttn" href={link}>
      {text}
    </Button>
  );
});

TopRightBttn.propTypes = {
  text: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default TopRightBttn;
