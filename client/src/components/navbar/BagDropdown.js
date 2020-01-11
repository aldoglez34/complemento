import React, { useState, useEffect } from "react";
import {
  Dropdown,
  Nav,
  NavItem,
  Badge,
  Button,
  Spinner
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../redux/actions/cart";
import API from "../../utils/API";

function BagDropdown() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [products, setProducts] = useState([]);

  const initBag = () => {
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
            product.subTotal = product.price.discount.hasDiscount
              ? product.price.discount.newPrice * value.qty
              : product.price.salePrice * value.qty;
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
  };

  useEffect(() => {
    initBag();
  }, []);

  return (
    <Dropdown as={NavItem} title="Bolsa de compras">
      <Dropdown.Toggle as={Nav.Link} className="text-light">
        <i className="fas fa-shopping-bag" />
        <Badge variant="danger" pill className="ml-1">
          {cart.counter}
        </Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu
        id="bagDropdownMenu"
        className="dropdown-menu-xs-left dropdown-menu-md-right"
      >
        <h5 className="pt-1 pl-3 pb-1">Bolsa de compras</h5>
        <Dropdown.Divider />
        <div className="px-3">
          {cart.counter === 0 ? (
            <div className="text-center">
              <em>Tu bolsa está vacía</em>
            </div>
          ) : products.length ? (
            <>
              <div className="mt-3">
                {products.map(p => {
                  return (
                    <div key={p._id} className="d-flex flex-row">
                      <span
                        className="mr-1 text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(cartActions.decrementQty(p._id));
                          initBag();
                        }}
                        title="Borrar este producto"
                      >
                        x
                      </span>
                      <span>{p.name}</span>
                      <span className="text-muted ml-2">{"x" + p.qty}</span>
                      <strong className="ml-auto">{"$" + p.subTotal}</strong>
                    </div>
                  );
                })}
                <div className="d-flex flex-row">
                  <small
                    className="ml-auto text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(cartActions.clear());
                      setProducts(products);
                    }}
                  >
                    Vaciar bolsa
                  </small>
                </div>
                <div className="d-flex flex-row mt-2">
                  <h4 className="ml-auto text-success">
                    {"Total $" +
                      products
                        .map(p => p.subTotal)
                        .reduce((prev, next) => prev + next)}
                  </h4>
                </div>
              </div>
              <Button
                block
                size="sm"
                className="mt-1 mb-2"
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
