import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import * as cartActions from "../redux-actions/cart";
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
import Layout from "./Layout";
import API from "../utils/API";
import MyBreadcrumb from "../components/MyBreadcrumb";

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const [products, setProducts] = useState([]);
  // const dispatch = useDispatch();

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
            tempProduct.name = res.data.name;
            tempProduct.content = res.data.content;
            tempProduct.salePrice = res.data.salePrice;
            tempProduct.discount = res.data.discount;
            // loop tempArr and find if the product exists, if so retrieve the index
            let indexOfProduct = tempArr.findIndex(
              p => p._id === tempProduct._id
            );
            // if indexOfProduct is -1, it means the product's _id wasn't found
            if (indexOfProduct === -1) {
              // set the qty to 1 and the subtotal equals to the salePrice and then push the value
              tempProduct.qty = 1;
              tempProduct.subTotal = res.data.salePrice;
              tempArr.push(tempProduct);
            }
            // if indexOfProduct is different than -1, means the product was found
            // update the qty value of that product and update subTotal
            else {
              tempArr[indexOfProduct].qty += 1;
              tempArr[indexOfProduct].subTotal += res.data.salePrice;
            }
            // after its done, "resolve" the promise and send the temp arr as a parameter
            if (index === array.length - 1) resolve(tempArr);
          })
          .catch(err => console.log(err));
      });
    });
    // when its done fetching all products info,
    fetchAllProducts.then(tempArr => {
      console.log(tempArr);
      setProducts(tempArr);
    });
  }, []);

  const breadcrumbRoutes = [
    { name: "Inicio", to: "/" },
    { name: "Tienda", to: "/store" },
    { name: "Mi bolsa de compras", to: "active" }
  ];

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoutes} />
      <Container className="my-4">
        <h2 className="mb-1">Mi bolsa de compras</h2>
        <hr className="myDivider" />
        <Row className="mt-4">
          <Col md={8}>
            <Table responsive size="sm">
              <thead>
                <tr>
                  <th className="text-center border-top-0">Producto</th>
                  {/* <th className="text-center border-top-0">Contenido</th> */}
                  <th className="text-center border-top-0">Cantidad</th>
                  <th className="text-center border-top-0">Precio</th>
                  <th className="text-center border-top-0">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td className="bg-light text-center" colSpan="5">
                      <em>Tu bolsa de compras está vacía</em>
                    </td>
                  </tr>
                ) : products.length ? (
                  products.map(p => {
                    return (
                      <tr key={p._id}>
                        {/* name */}
                        <td className="text-left">
                          <a
                            href={"/product/details/" + p._id}
                            style={{ color: "#59a49a" }}
                          >
                            {p.name}
                          </a>
                          {p.discount.hasDiscount ? (
                            <Badge pill className="ml-2" variant="warning">
                              {p.discount.percentage}%
                            </Badge>
                          ) : null}
                        </td>
                        {/* content */}
                        {/* <td className="text-left">{p.content}</td> */}
                        {/* qty */}
                        <td className="text-center">{p.qty}</td>
                        {/* sale price */}
                        <td className="text-center">
                          {p.discount.hasDiscount ? (
                            <>{p.discount.newPrice}</>
                          ) : (
                            <>{p.salePrice}</>
                          )}
                        </td>
                        <td className="text-center">{p.subTotal}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className="text-center" colSpan="5">
                      <Spinner
                        className="spinnerStyle mt-3"
                        animation="grow"
                        role="status"
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header as="h5">Resumen</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Cart;
