import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../redux/actions/cart";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Badge,
  Spinner,
  Card
} from "react-bootstrap";
import Layout from "../components/Layout";
import API from "../utils/API";

function Cart() {
  const cart = useSelector(state => state.cart);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let fullCart = [];
    // fetch all products in the shopping cart, one by one using a promise
    let fetchAllProducts = new Promise((resolve, reject) => {
      // start looping each product and fetch its info
      cart.items.forEach((value, index, array) => {
        // fetch info from db
        API.fetchCartProduct(value._id)
          .then(res => {
            // temp product
            let product = res.data;
            product.qty = value.qty;
            product.subTotal = product.discount.hasDiscount
              ? product.discount.newPrice * value.qty
              : product.salePrice * value.qty;
            // push temp product into fullCart
            fullCart.push(product);
            // "resolve" the promise and send the temp arr as a parameter
            if (index === array.length - 1) resolve();
          })
          .catch(err => console.log(err));
      });
    });
    // when its done fetching all products info,
    fetchAllProducts
      .then(() => {
        setProducts(fullCart);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      <Container className="mt-4">
        <h2 className="mb-1">Mi bolsa de compras</h2>
        <hr className="myDivider" />
        <Row className="mt-3">
          {/* shopping bag col */}
          <Col md={8}>
            <Table className="mt-1" responsive size="sm">
              <thead>
                <tr>
                  <th className="text-center border-top-0 pb-2">Producto</th>
                  <th className="text-center border-top-0 pb-2">Cantidad</th>
                  <th className="text-center border-top-0 pb-2">Precio</th>
                  <th className="text-center border-top-0 pb-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.counter === 0 ? (
                  <tr>
                    <td className="bg-light text-center pt-3" colSpan="5">
                      <em>Tu bolsa de compras está vacía</em>
                    </td>
                  </tr>
                ) : products.length ? (
                  <>
                    {products.map(p => {
                      return (
                        <tr key={p._id}>
                          {/* name */}
                          <td className="text-left">
                            <a
                              href={"/product/details/" + p._id}
                              className="text-dark"
                            >
                              {p.name}
                            </a>
                            {p.discount.hasDiscount ? (
                              <Badge pill className="ml-2" variant="warning">
                                {p.discount.percentage}%
                              </Badge>
                            ) : null}
                          </td>
                          {/* qty */}
                          <td className="text-center">
                            <input
                              type="number"
                              defaultValue={p.qty}
                              className="text-center"
                              min={1}
                              max={p.stock}
                              style={{ width: "55px" }}
                            />
                          </td>
                          {/* sale price */}
                          <td className="text-center">
                            {p.discount.hasDiscount ? (
                              <>${p.discount.newPrice}</>
                            ) : (
                              <>${p.salePrice}</>
                            )}
                          </td>
                          <td className="text-center">${p.subTotal}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td className="text-right" colSpan="5">
                        <Button
                          variant="link"
                          className="text-danger"
                          onClick={() => dispatch(cartActions.clear())}
                        >
                          Limpiar bolsa
                        </Button>
                      </td>
                    </tr>
                  </>
                ) : (
                  <tr>
                    <td className="text-center" colSpan="5">
                      <div className="text-center my-4">
                        <Spinner
                          variant="warning"
                          animation="grow"
                          role="status"
                        />
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
          {/* card */}
          <Col md={4}>
            <Card>
              <Card.Header style={{ paddingBottom: "7px", paddingTop: "7px" }}>
                <strong>Resumen</strong>
              </Card.Header>
              <Card.Body>
                {cart.counter > 0 ? (
                  products.length ? (
                    <>
                      <Table>
                        <tbody>
                          <tr>
                            <td className="border-top-0">
                              Cantidad de productos
                            </td>
                            <td className="border-top-0">
                              {products
                                .map(p => p.qty)
                                .reduce((prev, next) => prev + next)}
                            </td>
                          </tr>
                          <tr>
                            <td>Subtotal</td>
                            <td>
                              $
                              {products
                                .map(p => p.subTotal)
                                .reduce((prev, next) => prev + next)}{" "}
                              MXN
                            </td>
                          </tr>
                          <tr>
                            <td>Costo de envío</td>
                            <td>$70 MXN</td>
                          </tr>
                          <tr>
                            <td>Total general</td>
                            <td>
                              <strong>
                                {" "}
                                $
                                {products
                                  .map(p => p.subTotal)
                                  .reduce((prev, next) => prev + next) +
                                  70}{" "}
                                MXN
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <Button variant="danger">Pagar</Button>
                    </>
                  ) : (
                    <div className="text-center my-4">
                      <Spinner
                        variant="warning"
                        animation="grow"
                        role="status"
                      />
                    </div>
                  )
                ) : (
                  <div className="text-center">Total $0</div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Cart;
