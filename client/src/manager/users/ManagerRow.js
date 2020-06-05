import React from "react";
import PropTypes from "prop-types";

const ManagerRow = React.memo((props) => {
  return (
    <tr className="rowStyle">
      <td>{props.manager.name}</td>
      <td>{props.manager.firstSurname}</td>
      <td>{props.manager.secondSurname}</td>
      <td>{props.manager.email}</td>
    </tr>
  );
});

ManagerRow.propTypes = {
  manager: PropTypes.object.isRequired,
};

export default ManagerRow;
