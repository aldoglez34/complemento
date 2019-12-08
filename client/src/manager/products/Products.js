import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import API from "../../utils/API";
import { Table, Spinner, Tabs, Tab, Button } from "react-bootstrap";
import ProductsRow from "./ProductsRow";

function Products() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Productos"));
    dispatch(managerActions.setBackBttn(null));
    API.fetchProductsManager()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout title="Productos">
      <Tabs defaultActiveKey="productos" id="uncontrolled-tab-example">
        <Tab eventKey="productos" title="Productos">
          {products ? (
            products.length ? (
              <>
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
                <div className="text-right">
                  <Button variant="success" href="/manager/products/create">
                    <i className="fas fa-plus-circle mr-1" />
                    Producto
                  </Button>
                </div>
              </>
            ) : (
              <em>No hay nada aquí</em>
            )
          ) : (
            <div className="text-center my-4">
              <Spinner
                animation="grow"
                role="status"
                className="spinnerStyle"
              />
            </div>
          )}
        </Tab>
        <Tab eventKey="descuentos" title="Descuentos">
          otro
        </Tab>
      </Tabs>
    </ManagerLayout>
  );
}

export default Products;
