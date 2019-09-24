import React from "react";
import { Pagination } from "react-bootstrap";

function MyPagination() {
  return (
    <>
      <Pagination size="sm" className="p-0 m-0">
        <Pagination.Prev />
        <Pagination.Item key={1} active>
          1
        </Pagination.Item>
        <Pagination.Item key={2}>2</Pagination.Item>
        <Pagination.Item key={3}>3</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </>
  );
}

export default MyPagination;
