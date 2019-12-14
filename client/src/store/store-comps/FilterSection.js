import React from "react";
import PropTypes from "prop-types";
import CategoriesList from "../store-comps/CategoriesList";
import BrandsList from "../store-comps/BrandsList";

FilterSection.propTypes = {
  categories: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired
};

function FilterSection(props) {
  return (
    <div className="filterSection shadow-sm py-3 text-center">
      {props.categories.length && props.brands.length ? (
        <>
          <CategoriesList
            categories={props.categories}
            // filter={filter}
            // handleFiltering={handleFiltering}
          />
          <BrandsList
            brands={props.brands}
            // filter={filter}
            // handleFiltering={handleFiltering}
          />
        </>
      ) : null}
    </div>
  );
}

export default FilterSection;
