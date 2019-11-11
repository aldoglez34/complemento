import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../redux-actions/cart";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Badge,
  Spinner
} from "react-bootstrap";
import Layout from "./Layout";
import API from "../utils/API";
import MyBreadcrumb from "../components/MyBreadcrumb";

// cart HAS to go fetch the items one by one
// what if an item changes price while in someone's cart?

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // wait for all products
    let fetchAllProducts = new Promise((resolve, reject) => {
      cartItems.forEach((value, index, array) => {
        API.fetchProductDetails(value)
          .then(res => {
            console.log(res.data);
            setProducts(products.concat(res.data));
            // setProducts(prevProducts => [...prevProducts, res.data]);
            if (index === array.length - 1) resolve();
          })
          .catch(err => console.log(err));
      });
    });
    fetchAllProducts.then(() => {
      setIsLoading(false);
      console.log("all done!");
      console.log(products);
    });
  }, []);

  const itemExists = (productId, arr) => {
    let exists = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].productId === productId) {
        exists = true;
      }
    }
    return exists;
  };

  const clearCart = () => {
    // get all the items in the local storage and sort it in descending order
    let ls = Object.keys(localStorage);
    ls.forEach(item => {
      if (item.substring(0, 7) === "cn_item") {
        localStorage.removeItem(item);
      }
    });
    localStorage.setItem("cn_counter", 0);
    this.setState({ cart: [] });
  };

  const buildCart = () => {
    let fullCart = [];

    // get all the items in the local storage and sort it in descending order
    let ls = Object.keys(localStorage);
    ls.sort();
    ls.reverse();

    // for each local storage item
    ls.forEach(function(i) {
      // if the local storage item is a cart item
      if (i.substring(0, 7) === "cn_item") {
        // get the value (productId) from the local storage
        let productId = localStorage.getItem(i);

        // create an object with that productId and set qty to 1
        let obj = {};
        obj.productId = productId;
        obj.qty = 1;

        // insert the productId and qty in the fullCart array
        // and if it already exists, add 1 to it
        if (itemExists(productId, fullCart)) {
          // if this returns true, it means it exists
          // so look for it and add 1
          for (let i = 0; i < fullCart.length; i++) {
            if (fullCart[i].productId === productId) {
              fullCart[i].qty = parseInt(fullCart[i].qty) + 1;
            }
          }
        } else {
          // if it returns false it means it doesn't exist
          // so just push the object
          fullCart.push(obj);
        }
      }
    });

    // get the details of each item in the cart and push them into the state
    fullCart.forEach(item => {
      API.getProductDetails(item.productId).then(res => {
        // since there's no such thing as pushing directly into the state arr,
        // i have to keep setting the cart in the state for every product
        // might come back to fix the performance here
        let product = res.data;
        product.qty = item.qty;
        if (!product.Discount) {
          product.subtotal = parseFloat(
            parseFloat(product.price) * item.qty
          ).toFixed(2);
        } else {
          product.subtotal = parseFloat(
            parseFloat(product.Discount.newPrice) * item.qty
          ).toFixed(2);
        }
        let tempArr = this.state.cart;
        tempArr.push(product);
        this.setState({ cart: tempArr });
      });
    });
  };

  const sumGrandTotal = () => {
    // let sum = 0;
    // this.state.cart.forEach(item => {
    //   sum += parseFloat(item.subtotal);
    // });
    // return <span>{parseFloat(sum).toFixed(2)}</span>;
  };

  const breadcrumbRoutes = [
    { name: "Inicio", to: "/" },
    { name: "Tienda", to: "/store" },
    { name: "Mi bolsa de compras", to: "active" }
  ];

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoutes} />
      <Container className="mt-4">
        <h2>Mi bolsa de compras</h2>
        <hr />
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Contenido</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Cart;
