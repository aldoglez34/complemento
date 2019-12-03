import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import CategoriesRow from "./CategoriesRow";

function Categories() {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState();

  useEffect(() => {
    dispatch(managerActions.setActive("Categorías"));
    dispatch(managerActions.setBackBttn(null));
    API.fetchCategoriesManager()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ManagerLayout
      title="Categorías"
      button={{ text: "Nueva Categoría", to: "/manager/categories/create" }}
    >
      {categories ? (
        <Table striped hover size="sm" responsive variant="light">
          <thead>
            <tr>
              <th className="text-center border-0">Nombre</th>
              <th className="text-center border-0">Contador de Productos</th>
            </tr>
          </thead>
          <tbody>
            {categories.length ? (
              categories.map(c => {
                return <CategoriesRow key={c._id} category={c} />;
              })
            ) : (
              <td colSpan="2" className="text-center">
                <em>No hay nada aquí</em>
              </td>
            )}
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

export default Categories;
