import React from "react";
import PropTypes from "prop-types";

const MyBreadcrumb = React.memo(function MyBreadcrumb(props) {
  return (
    <div className="mb-4">
      {props.routes.map(r => {
        if (r.to !== "active") {
          return (
            <span key={r.to}>
              <a href={r.to} className="text-dark">
                {r.name}
              </a>
              <i
                className="fas fa-chevron-right mx-2"
                style={{ color: "#c8c0b0" }}
              />
            </span>
          );
        } else {
          return (
            <span key={r.to} href={r.to} style={{ color: "grey" }}>
              {r.name}
            </span>
          );
        }
      })}
    </div>
  );
});

MyBreadcrumb.propTypes = {
  routes: PropTypes.array
};

export default MyBreadcrumb;
