import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import PropTypes from "prop-types";
import "./discountpercentages.scss";

const DiscountPercentages = React.memo(({ percentage, setPercentage }) => {
  return (
    <ButtonGroup toggle>
      <ToggleButton
        className="discountPercentage"
        type="radio"
        variant="light"
        value={5}
        checked={percentage === 5 ? true : false}
        onClick={() => setPercentage(5)}
      >
        5%
      </ToggleButton>
      <ToggleButton
        className="discountPercentage"
        type="radio"
        variant="light"
        value={10}
        checked={percentage === 10 ? true : false}
        onClick={() => setPercentage(10)}
      >
        10%
      </ToggleButton>
      <ToggleButton
        className="discountPercentage"
        type="radio"
        variant="light"
        value={15}
        checked={percentage === 15 ? true : false}
        onClick={() => setPercentage(15)}
      >
        15%
      </ToggleButton>
      <ToggleButton
        className="discountPercentage"
        type="radio"
        variant="light"
        value={20}
        checked={percentage === 20 ? true : false}
        onClick={() => setPercentage(20)}
      >
        20%
      </ToggleButton>
      <ToggleButton
        className="discountPercentage"
        type="radio"
        variant="light"
        value={25}
        checked={percentage === 25 ? true : false}
        onClick={() => setPercentage(25)}
      >
        25%
      </ToggleButton>
      <ToggleButton
        className="discountPercentage"
        type="radio"
        variant="light"
        value={30}
        checked={percentage === 30 ? true : false}
        onClick={() => setPercentage(30)}
      >
        30%
      </ToggleButton>
      <ToggleButton
        className="discountPercentage"
        type="radio"
        variant="light"
        value={35}
        checked={percentage === 35 ? true : false}
        onClick={() => setPercentage(35)}
      >
        35%
      </ToggleButton>
      <ToggleButton
        className="discountPercentage"
        type="radio"
        variant="light"
        value={40}
        checked={percentage === 40 ? true : false}
        onClick={() => setPercentage(40)}
      >
        40%
      </ToggleButton>
    </ButtonGroup>
  );
});

DiscountPercentages.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default DiscountPercentages;
