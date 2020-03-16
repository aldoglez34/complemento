import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import { Table, Spinner } from "react-bootstrap";
import API from "../../utils/API";
import DiscountsCreateRow from "./DiscountsCreateRow";

const DiscountsCreate = React.memo(function DiscountsCreate() {
  const [notdiscounts, setNotDiscounts] = useState();

  useEffect(() => {
    API.fetchNotDiscountsManager()
      .then(res => setNotDiscounts(res.data))
      .catch(err => {
        console.log(err.response);
        alert(err.response.data.msg);
      });
  }, []);

  return (
    <ManagerLayout
      backBttn="/manager/discounts"
      leftBarActive="Descuentos"
      title="Crear Promoción"
      button={null}
    >
      {notdiscounts ? (
        notdiscounts.length ? (
          <>
            <Table striped hover size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Nombre</th>
                  <th className="text-center border-0">Precio de compra</th>
                  <th className="text-center border-0">Precio de venta</th>
                  <th className="text-center border-0">Unidades vendidas</th>
                  <th className="text-center border-0">Existencia</th>
                </tr>
              </thead>
              <tbody>
                {notdiscounts.map(nd => {
                  return <DiscountsCreateRow key={nd._id} notdiscount={nd} />;
                })}
              </tbody>
            </Table>
          </>
        ) : (
          <em>No hay nada aquí</em>
        )
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </ManagerLayout>
  );
});

export default DiscountsCreate;
