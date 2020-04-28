import React from "react";
import PropTypes from "prop-types";

const TitleAndPrice = React.memo(({ name, price }) => {
  return (
    <>
      <div className="d-flex flex-row">
        <h1 className="text-left mb-0 pr-4">
          <span className="mr-1">{name}</span>
          <hr className="myDivider mt-2 mb-0" />
        </h1>
        <div className="ml-auto text-right">
          <h1 className="mb-0 text-danger">
            {price.discount.hasDiscount ? (
              <div className="d-flex flex-column">
                <span className="text-danger">
                  {"$" + price.discount.newPrice}
                </span>
                {/* <small className="text-muted">
                  <del>{"$" + price.salePrice}</del>
                </small> */}
              </div>
            ) : (
              <span className="text-danger">{"$" + price.salePrice}</span>
            )}
          </h1>
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
