import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import ProductsRow from "./ProductsRow";

function Products() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Productos"));
    dispatch(managerActions.setBackBttn(null));
    // fetch products
    API.fetchProductsManager()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout
      title="Productos"
      button={{ text: "Nuevo Producto", to: "/manager/products/create" }}
    >
      {products ? (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Categoría</th>
              <th className="text-center">Precio de compra</th>
              <th className="text-center">Precio de venta</th>
              <th className="text-center">Existencia</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => {
              return <ProductsRow key={p._id} product={p} />;
            })}
          </tbody>
        </Table>
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" className="spinnerStyle" />
        </div>
      )}
    </ManagerLayout>
  );
}

export default Products;
