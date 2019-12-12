import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import ProductsRow from "./ProductsRow";

function AllProducts() {
  const [products, setProducts] = useState();

  useEffect(() => {
    API.fetchProductsManager()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return products ? (
    products.length ? (
      <Table
        striped
        hover
        size="sm"
        responsive
        variant="white"
        className="mt-2"
      >
        <thead>
          <tr>
            <th className="text-center border-0">Nombre</th>
            <th className="text-center border-0">Categoría</th>
            <th className="text-center border-0">Proveedor</th>
            <th className="text-center border-0">Destacado</th>
            <th className="text-center border-0">Compra</th>
            <th className="text-center border-0">Venta</th>
            <th className="text-center border-0">Utilidad</th>
            <th className="text-center border-0">Vendidos</th>
            <th className="text-center border-0">Existencia</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => {
            return <ProductsRow key={p._id} product={p} />;
          })}
        </tbody>
      </Table>
    ) : (
      <em>No hay nada aquí</em>
    )
  ) : (
    <div className="text-center my-4">
      <Spinner animation="grow" role="status" className="spinnerStyle" />
    </div>
  );
}

export default AllProducts;
