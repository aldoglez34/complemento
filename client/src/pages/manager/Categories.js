import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "./ManagerLayout";
import * as managerActions from "../../redux-actions/manager";
import API from "../../utils/API";
import { Button, Table, Spinner, Row, Col } from "react-bootstrap";
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
    <ManagerLayout>
      <Row className="mb-3">
        <Col md={8} className="d-flex align-items-center">
          <h2 className="mb-0 text-dark">
            <strong>Categorías</strong>
          </h2>
        </Col>
        <Col md={4} className="mt-1 mt-md-0 text-md-right">
          <Button variant="success" href="/manager/categories/create">
            <i className="fas fa-th mr-2" />
            Nueva Categoría
          </Button>
        </Col>
      </Row>
      {categories ? (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Productos</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(c => {
              return <CategoriesRow key={c._id} category={c} />;
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

export default Categories;
