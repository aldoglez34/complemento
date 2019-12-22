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
  const cartItems = useSelector(state => state.cart.items);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch all products in the shopping cart, one by one
    let fetchAllProducts = new Promise((resolve, reject) => {
      // declare a temp array that will hold the products without duplicates
      let tempArr = [];
      // start looping each product and fetch its info
      cartItems.forEach((value, index, array) => {
        API.fetchProductDetails(value)
          .then(res => {
            // take only some of the properties of the object
            let tempProduct = {};
            tempProduct._id = res.data._id;
            tempProduct.stock = res.data.stock;
            tempProduct.name = res.data.name;
            tempProduct.discount = res.data.discount;
            tempProduct.salePrice = res.data.salePrice;
            // loop tempArr and find if the product exists, if so retrieve the index
            let indexOfProduct = tempArr.findIndex(
              p => p._id === tempProduct._id
            );
            // if indexOfProduct is -1, it means the product's _id wasn't found
            if (indexOfProduct === -1) {
              // set the qty to 1 and the subtotal equals to the salePrice (check if it has discount first) and then push the value
              tempProduct.qty = 1;
              tempProduct.subTotal = tempProduct.discount.hasDiscount
                ? tempProduct.discount.newPrice
                : tempProduct.salePrice;
              tempArr.push(tempProduct);
            }
            // if indexOfProduct is different than -1, means the product was found
            // update the qty value of that product and update subTotal
            else {
              tempArr[indexOfProduct].qty += 1;
              tempArr[indexOfProduct].subTotal += tempProduct.discount
                .hasDiscount
                ? tempProduct.discount.newPrice
                : tempProduct.salePrice;
            }
            // after its done, "resolve" the promise and send the temp arr as a parameter
            if (index === array.length - 1) resolve(tempArr);
          })
          .catch(err => console.log(err));
      });
    });
    // when its done fetching all products info,
    fetchAllProducts.then(tempArr => {
      setProducts(tempArr);
    });
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
                {cartItems.length === 0 ? (
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
                      <Spinner animation="grow" role="status" />
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
                {cartItems.length ? (
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
                    <div className="text-center">
                      <Spinner animation="grow" role="status" />
                    </div>
                  )
                ) : (
                  <div className="text-center">-</div>
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
