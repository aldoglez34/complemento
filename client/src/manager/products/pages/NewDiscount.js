import React, { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import APIManager from "../../../utils/APIManager";
import ManagerLayout from "../../ManagerLayout";
import ApplyDiscountBttn from "../components/ApplyDiscountBttn";
import { formatNumber } from "../../../utils/formatNumber";

const NewDiscount = React.memo(() => {
  const [products, setProducts] = useState();

  useEffect(() => {
    APIManager.mngr_fetchDiscounts()
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar los productos.");
      });
  }, []);

  return (
    <ManagerLayout
      backBttn="/manager/products"
      leftBarActive="Productos"
      title="Nuevo Descuento"
    >
      {products ? (
        products.length ? (
          <Table striped size="sm" responsive variant="white">
            <thead>
              <tr>
                <th className="text-center border-0 pb-3">Nombre</th>
                <th className="text-center border-0 pb-3">PrecioCompra</th>
                <th className="text-center border-0 pb-3">PrecioVenta</th>
                <th className="text-center border-0 pb-3">Utilidad</th>
                <th className="text-center border-0 pb-3">Vendidos</th>
                <th className="text-center border-0 pb-3">Existencia</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                return (
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td className="text-right">
                      {formatNumber(p.price.latestPurchasePrice)}
                    </td>
                    <td className="text-right">
                      {formatNumber(p.price.salePrice)}
                    </td>
                    <td className="text-right">
                      {formatNumber(
                        p.price.salePrice - p.price.latestPurchasePrice
                      )}
                    </td>
                    <td className="text-right">{p.unitsSold}</td>
                    <td className="text-right">{p.stock}</td>
                    <td className="text-center">
                      <ApplyDiscountBttn product={p} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <em>No hay productos disponibles</em>
        )
      ) : (
        <div className="text-center">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </ManagerLayout>
  );
});

export default NewDiscount;
