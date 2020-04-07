import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const TitleAndPrice = React.memo(({ name, price }) => {
  return (
    <>
      <div className="d-flex flex-row">
        <h1 className="text-left mb-0 pr-4">
          <span className="mr-1">{name}</span>
          {price.discount.hasDiscount ? (
            <Badge
              className="h4"
              variant="warning"
              style={{ color: "#484a4b" }}
            >
              {price.discount.percentage + "%"}
            </Badge>
          ) : null}
        </h1>
        <div className="ml-auto text-right d-flex align-items-center">
          <h2 className="mb-0 text-danger">
            {price.discount.hasDiscount ? (
              <div className="d-flex flex-column">
                <small className="text-muted">
                  <del>{"$" + price.salePrice}</del>
                </small>
                <span className="text-danger">
                  {"$" + price.discount.newPrice}
                </span>
              </div>
            ) : (
              <span className="text-danger">{"$" + price.salePrice}</span>
            )}
          </h2>
        </div>
      </div>
    </>
  );
});

TitleAndPrice.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired,
};

export default TitleAndPrice;
