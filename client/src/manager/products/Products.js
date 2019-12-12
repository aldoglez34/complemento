import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import { Tabs, Tab } from "react-bootstrap";
import AllProducts from "./AllProducts";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(managerActions.setActive("Productos"));
    dispatch(managerActions.setBackBttn(null));
  }, []);

  return (
    <ManagerLayout
      title="Productos"
      button={{ text: "Producto", to: "/manager/products/create" }}
    >
      <Tabs defaultActiveKey="todos">
        <Tab eventKey="todos" title="Todos">
          <AllProducts />
        </Tab>
        <Tab eventKey="descuentos" title="Descuentos">
          descuentos
        </Tab>
      </Tabs>
    </ManagerLayout>
  );
}

export default Products;
