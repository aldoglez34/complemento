import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const DiscountPercentages = React.memo(({ percentage, setPercentage }) => {
  return (
    <ListGroup className="mt-2" horizontal>
      <ListGroup.Item
        className="text-center"
        action
        onClick={() => setPercentage(5)}
        active={percentage === 5 ? true : false}
      >
        5%
      </ListGroup.Item>
      <ListGroup.Item
        className="text-center"
        action
        onClick={() => setPercentage(10)}
        active={percentage === 10 ? true : false}
      >
        10%
      </ListGroup.Item>
      <ListGroup.Item
        className="text-center"
        action
        onClick={() => setPercentage(15)}
        active={percentage === 15 ? true : false}
      >
        15%
      </ListGroup.Item>
      <ListGroup.Item
        className="text-center"
        action
        onClick={() => setPercentage(20)}
        active={percentage === 20 ? true : false}
      >
        20%
      </ListGroup.Item>
      <ListGroup.Item
        className="text-center"
        action
        onClick={() => setPercentage(25)}
        active={percentage === 25 ? true : false}
      >
        25%
      </ListGroup.Item>
      <ListGroup.Item
        className="text-center"
        action
        onClick={() => setPercentage(30)}
        active={percentage === 30 ? true : false}
      >
        30%
      </ListGroup.Item>
    </ListGroup>
  );
});

DiscountPercentages.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default DiscountPercentages;
