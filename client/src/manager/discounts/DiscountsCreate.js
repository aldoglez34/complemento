import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import { Table, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import API from "../../utils/API";
import * as managerActions from "../../redux-actions/manager";
import DiscountsCreateRow from "./DiscountsCreateRow";

function DiscountsCreate(props) {
  const dispatch = useDispatch();

  const [notdiscounts, setNotDiscounts] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Promociones"));
    dispatch(managerActions.setBackBttn("/manager/discounts"));
    API.fetchNotDiscountsManager()
      .then(res => setNotDiscounts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout title="Nueva promoción" button={null}>
      {notdiscounts ? (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Precio de compra</th>
              <th className="text-center">Precio de venta</th>
              <th className="text-center">Unidades vendidas</th>
              <th className="text-center">Existencia</th>
            </tr>
          </thead>
          <tbody>
            {notdiscounts.map(nd => {
              return <DiscountsCreateRow key={nd._id} notdiscount={nd} />;
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

export default DiscountsCreate;
