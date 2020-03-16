import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import API from "../../utils/API";
import { Table, Spinner } from "react-bootstrap";
import CategoriesRow from "./CategoriesRow";

const Categories = React.memo(function Categories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    API.fetchCategoriesManager()
      .then(res => setCategories(res.data))
      .catch(err => {
        console.log(err.response);
        alert(err.response.data.msg);
      });
  }, []);

  return (
    <ManagerLayout
      leftBarActive="Categorías"
      title="Categorías"
      button={{ text: "Nueva categoría", to: "/manager/categories/create" }}
    >
      {categories ? (
        categories.length ? (
          <>
            <Table striped hover size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Nombre</th>
                  <th className="text-center border-0">Productos</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(c => {
                  return <CategoriesRow key={c._id} category={c} />;
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

export default Categories;
