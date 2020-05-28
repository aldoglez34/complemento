import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { Container, Spinner, ListGroup, Card, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import moment from "moment";
import { formatNumber } from "../../utils/formatNumber";

const ClientOrders = React.memo(() => {
  const client = useSelector((state) => state.user);

  const [orders, setOrders] = useState();

  useEffect(() => {
    API.fetchOrders(client._id)
      .then((res) => setOrders(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar los favoritos.");
      });
  }, []);

  const formatDate = (date) => {
    let convertedDate = moment(moment(date).format(moment.HTML5_FMT.DATE));
    return convertedDate.format("DD/MM/YY");
  };

  return (
    <Layout>
      <Container className="my-4">
        <h3>Mis pedidos</h3>
        <hr className="myDivider" />
        <div className="py-2">
          {orders ? (
            orders.length ? (
              orders.map((o) => {
                return (
                  <Card className="mb-3" key={o._id}>
                    <Card.Header>
                      <Row>
                        <Col>
                          <span>Estatus</span>
                          <br />
                          <strong className="text-success">{o.status}</strong>
                        </Col>
                        <Col>
                          <span>Fecha</span>
                          <br />
                          <strong className="text-dark">
                            {formatDate(o.saleDate)}
                          </strong>
                        </Col>
                        <Col>
                          <span>Total</span>
                          <br />
                          <strong className="text-danger">
                            {formatNumber(o.grandTotal)}
                          </strong>
                        </Col>
                        <Col className="mt-3 mt-md-0">
                          <span>Código</span>
                          <br />
                          <strong className="text-dark">{o._id}</strong>
                        </Col>
                      </Row>
                    </Card.Header>
                    <ListGroup variant="flush">
                      {o.products.map((p) => (
                        <ListGroup.Item key={p._id}>
                          <div className="d-flex flex-row">
                            <div>
                              <a
                                href={"/product/details/" + p._id}
                                className="text-dark"
                                title={p.name}
                              >
                                {p.name}
                              </a>
                              <span className="ml-2 text-muted">
                                {"x " + p.qty}
                              </span>
                            </div>
                            <strong className="ml-auto">
                              {formatNumber(p.totalByProduct)}
                            </strong>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card>
                );
              })
            ) : (
              <span>Tu lista de pedidos está vacía</span>
            )
          ) : (
            <div className="text-center my-4">
              <Spinner variant="warning" animation="grow" role="status" />
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
});

export default ClientOrders;
