import React, { useState, useEffect } from "react";
import { Spinner, Table, Button } from "react-bootstrap";
import APIManager from "../../../utils/APIManager";
import ManagerLayout from "../../ManagerLayout";

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

  const formatNumber = (num) => {
    return num !== undefined
      ? "$" +
          num
            .toFixed(2)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : null;
  };

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
                {/* <th className="text-center border-0 pb-3"></th> */}
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
                    <td lassName="text-right">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => alert("aplicando descuento")}
                      >
                        Aplicar descuento
                      </Button>
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
