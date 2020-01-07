import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import SalesRow from "./SalesRow";

function Sales() {
  const [sales, setSales] = useState();

  useEffect(() => {
    API.fetchSales()
      .then(res => setSales(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout leftBarActive="Ventas" title="Ventas">
      {sales ? (
        sales.length ? (
          <>
            <Table striped hover size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Productos</th>
                  <th className="text-center border-0">Subtotal</th>
                  <th className="text-center border-0">Envío</th>
                  <th className="text-center border-0">Gran total</th>
                  <th className="text-center border-0">Cliente</th>
                </tr>
              </thead>
              <tbody>
                {sales.map(s => {
                  return <SalesRow key={s._id} sale={s} />;
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

export default Sales;
