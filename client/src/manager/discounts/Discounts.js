import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import DiscountsRow from "./DiscountsRow";

function Discounts() {
  const [discounts, setDiscounts] = useState();

  useEffect(() => {
    API.fetchDiscountsManager()
      .then(res => setDiscounts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout
      leftBarActive="Descuentos"
      title="Descuentos"
      button={{ text: "Descuento", to: "/manager/discounts/create" }}
    >
      {discounts ? (
        discounts.length ? (
          <>
            <Table striped hover size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Producto</th>
                  <th className="text-center border-0">Compra</th>
                  <th className="text-center border-0">Venta</th>
                  <th className="text-center border-0">Utilidad</th>
                  <th className="text-center border-0">Nueva venta</th>
                  <th className="text-center border-0">Nueva utilidad</th>
                </tr>
              </thead>
              <tbody>
                {discounts.map(d => {
                  return <DiscountsRow key={d._id} discount={d} />;
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
}

export default Discounts;
