import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import DiscountsRow from "./DiscountsRow";

const Discounts = React.memo(function Discounts() {
  const [productsWithDiscount, setProductsWithDiscount] = useState();

  useEffect(() => {
    API.fetchDiscountsManager()
      .then(res => setProductsWithDiscount(res.data))
      .catch(err => {
        console.log(err.response);
        alert(err.response.data.msg);
      });
  }, []);

  return (
    <ManagerLayout
      leftBarActive="Descuentos"
      title="Descuentos"
      button={{ text: "Nuevo descuento", to: "/manager/discounts/create" }}
    >
      {productsWithDiscount ? (
        productsWithDiscount.length ? (
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
                {productsWithDiscount.map(d => {
                  return <DiscountsRow key={d._id} productWithDiscount={d} />;
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

export default Discounts;
