import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

MyPagination.propTypes = {
  pages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired
};

const generatePages = props => {
  let pagination = [];

  // handle prev bttn
  if (props.activePage === 1) {
    pagination.push(null);
  } else {
    pagination.push(<Pagination.Prev key="prev" />);
  }

  // handle pages
  for (let i = 1; i <= props.pages; i++) {
    // handle active page
    if (i === props.activePage) {
      pagination.push(
        <Pagination.Item key={i} active>
          {i}
        </Pagination.Item>
      );
    } else {
      // handle rest of the pages
      pagination.push(
        <Pagination.Item key={i} onClick={() => props.handleChangePage(i)}>
          {i}
        </Pagination.Item>
      );
    }
  }

  // handle next bttn
  if (props.activePage === props.pages) {
    pagination.push(null);
  } else {
    pagination.push(<Pagination.Next key="next" />);
  }

  return pagination;
};

function MyPagination(props) {
  return (
    <Pagination size="md" className="p-0 m-0">
      {generatePages(props)}
    </Pagination>
  );
}

export default MyPagination;
