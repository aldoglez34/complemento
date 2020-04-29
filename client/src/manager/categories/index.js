import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import APIManager from "../../utils/APIManager";
import { ListGroup, Spinner, Row, Col, Tab } from "react-bootstrap";

const Categories = React.memo(() => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    APIManager.mngr_categoriesReport()
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar el reporte de categorías.");
      });
  }, []);

  return (
    <ManagerLayout leftBarActive="Categorías" title="Categorías">
      {categories ? (
        categories.length ? (
          <Tab.Container defaultActiveKey={"#" + categories[0]}>
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {categories.map((cat) => {
                    return (
                      <ListGroup.Item key={cat} action href={"#" + cat}>
                        {cat}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {categories.map((cat) => {
                    return (
                      <Tab.Pane key={cat} eventKey={"#" + cat}>
                        <h2>{cat}</h2>
                      </Tab.Pane>
                    );
                  })}
                  <Tab.Pane eventKey="#link1">link 1</Tab.Pane>
                  <Tab.Pane eventKey="#link2">link 2</Tab.Pane>
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
