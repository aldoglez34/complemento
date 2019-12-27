import React, { useState, useEffect } from "react";
import {
  Dropdown,
  Nav,
  NavItem,
  Badge,
  Button,
  Spinner
} from "react-bootstrap";
import { useSelector } from "react-redux";
import API from "../../utils/API";

function BagDropdown() {
  const cart = useSelector(state => state.cart);
  const [products, setProducts] = useState([]);

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
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={Nav.Link} className="text-light">
        <i className="fas fa-shopping-bag" />
        <Badge variant="danger" pill className="ml-1">
          {cart.counter}
        </Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="dropdown-menu-xs-left dropdown-menu-md-right bg-light"
        style={{ width: "20.125rem" }}
      >
        <h5 className="pt-1 pl-3 pb-1">Bolsa de compras</h5>
        <Dropdown.Divider />
        <div className="px-3">
          {cart.counter === 0 ? (
            <em>Tu bolsa está vacía</em>
          ) : products.length ? (
            <>
              <div className="mt-2">
                {products.map(p => {
                  return (
                    <div key={p._id} className="d-flex flex-row">
                      <span>{p.name}</span>
                      <span className="text-muted ml-2">{"x" + p.qty}</span>
                      <strong className="ml-auto">{"$" + p.subTotal}</strong>
                    </div>
                  );
                })}
                <div className="d-flex flex-row mt-2">
                  <h3 className="ml-auto text-danger">
                    {"Total $" +
                      products
                        .map(p => p.subTotal)
                        .reduce((prev, next) => prev + next)}
                  </h3>
                </div>
              </div>
              <Button
                block
                size="sm"
                className="mt-2"
                variant="danger"
                href="/cart"
              >
                Proceder con el pago
              </Button>
            </>
          ) : (
            <div className="text-center">
              <Spinner animation="grow" role="status" variant="warning" />
            </div>
          )}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BagDropdown;
