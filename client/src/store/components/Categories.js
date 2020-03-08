import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

const Categories = React.memo(props => {
  return (
    <React.Fragment>
      <h3>Categorías</h3>
      <hr className="myDivider" style={{ backgroundColor: "#edcb58" }} />
      {props.categories.map(category => {
        return (
          <Nav.Item key={category.name}>
            <Nav.Link
              className="py-1 filterItem"
              href={"/store/category/" + category.name}
              active={category.name === props.filterSelected ? true : false}
            >
              {category.name}
              {category.name === props.filterSelected ? (
                <span className="ml-1 filterBadgeSelected">
                  {category.productCount}
                </span>
              ) : (
                <span className="ml-1 filterBadge">
                  {category.productCount}
                </span>
              )}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </React.Fragment>
  );
});

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Categories;
