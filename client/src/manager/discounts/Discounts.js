import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import DiscountsRow from "./DiscountsRow";

function Discounts() {
  const dispatch = useDispatch();

  const [discounts, setDiscounts] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Promociones"));
    dispatch(managerActions.setBackBttn(null));
    // fetch products
    API.fetchDiscountsManager()
      .then(res => setDiscounts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout
      title="Promociones"
      button={{ text: "Nueva Promoción", to: "/manager/discounts/create" }}
    >
      {discounts ? (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th className="text-center">Producto</th>
              <th className="text-center">Precio de compra</th>
              <th className="text-center">Precio de venta</th>
              <th className="text-center">Descuento</th>
              <th className="text-center">Nuevo precio de venta</th>
            </tr>
          </thead>
          <tbody>
            {discounts.map(d => {
              return <DiscountsRow key={d._id} discount={d} />;
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

export default Discounts;
