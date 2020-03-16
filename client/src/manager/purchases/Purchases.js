import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import PurchasesRow from "./PurchasesRow";

const Purchases = React.memo(function Purchases() {
  const [purchases, setPurchases] = useState();

  useEffect(() => {
    API.fetchPurchases()
      .then(res => setPurchases(res.data))
      .catch(err => {
        console.log(err.response);
        alert(err.response.data.msg);
      });
  }, []);

  return (
    <ManagerLayout
      button={{ text: "Nueva compra", to: "/manager/purchases/create" }}
      leftBarActive="Compras"
      title="Compras"
    >
      {purchases ? (
        purchases.length ? (
          <>
            <Table striped hover size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Gran total</th>
                  <th className="text-center border-0">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map(p => {
                  return <PurchasesRow key={p._id} purchase={p} />;
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

export default Purchases;
