import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ProvidersRow = React.memo(({ provider }) => {
  return (
    <tr className="rowStyle">
      <td>{provider.name}</td>
      <td>{provider.rfc}</td>
      <td>{provider.email}</td>
      <td>{provider.phone}</td>
      <td>{provider.fullAddress}</td>
      <td className="text-center">#</td>
      <td className="text-center">
        <Button
          variant="info"
          size="sm"
          title="Editar"
          className="ml-3"
          href={"/manager/providers/edit/" + provider._id}
        >
          <i className="fas fa-pen pt-1" />
        </Button>
        <Button
          variant="danger"
          size="sm"
          title="Eliminar"
          className="ml-2"
          onClick={() => alert("No disponible por el momento.")}
        >
          <i className="fas fa-trash-alt pt-1" />
        </Button>
      </td>
    </tr>
  );
});

ProvidersRow.propTypes = {
  provider: PropTypes.object.isRequired,
};

export default ProvidersRow;
