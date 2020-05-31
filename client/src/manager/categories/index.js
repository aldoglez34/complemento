import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import APIManager from "../../utils/APIManager";
import { ListGroup, Spinner, Row, Col, Tab } from "react-bootstrap";
import CategoryContent from "./CategoryContent";
import "./categoriesmngr.scss";

const Categories = React.memo(() => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    APIManager.mngr_categoriesReport()
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.log(err);
        err.data
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar el reporte de categorías.");
      });
  }, []);

  return (
    <ManagerLayout leftBarActive="Categorías" title="Categorías">
      {categories ? (
        categories.length ? (
          <Tab.Container defaultActiveKey={"#" + categories[0].category}>
            <Row>
              <Col sm={3}>
                <ListGroup className="shadow-sm">
                  {categories.map((cat) => {
                    return (
                      <ListGroup.Item
                        className="categoryMngrItem"
                        key={cat.category}
                        action
                        href={"#" + cat.category}
                      >
                        {cat.category}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {categories.map((cat) => {
                    return (
                      <Tab.Pane
                        key={cat.category}
                        eventKey={"#" + cat.category}
                      >
                        <CategoryContent
                          title={cat.category}
                          productCount={cat.productCount}
                          products={cat.products}
                        />
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
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
