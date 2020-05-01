import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

const Categories = React.memo((props) => {
  return (
    <React.Fragment>
      <h3>Categorías</h3>
      <hr className="myDivider" style={{ backgroundColor: "#edcb58" }} />
      {props.categories.map((category) => {
        return (
          <Nav.Item key={category.name}>
            <Nav.Link
              title={category.name}
              className="py-1 filterItem"
              href={"/store/category/" + category.name}
              active={category.name === props.filterSelected ? true : false}
            >
              {category.name}
              <span
                className="ml-1"
                style={{ color: "#fe4365", fontWeight: "bold" }}
              >
                {category.productCount}
              </span>
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </React.Fragment>
  );
});

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  filterSelected: PropTypes.string.isRequired,
};

export default Categories;
