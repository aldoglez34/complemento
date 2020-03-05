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

const BagDropdown = React.memo(() => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const [products, setProducts] = useState([]);

  const elaborateShoppingBag = () => {
    // reset
    setProducts([]);
    // generate a string including all cart items with their quantities
    let cartStr = cart.items.reduce((acc, cv, idx) => {
      if (idx === cart.items.length - 1) {
        acc += cv._id + "-" + cv.qty;
      } else {
        acc += cv._id + "-" + cv.qty + ",";
      }
      return acc;
    }, "");
    // fetch cart items
    API.fetchCartProduct(cartStr)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => elaborateShoppingBag(), []);

  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={Nav.Link} className="text-light" title="Canasta">
        <i className="fas fa-shopping-bag" />
        <Badge variant="danger" pill className="ml-1">
          {cart.counter}
        </Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu
        id="bagDropdownMenu"
        className="dropdown-menu-xs-left dropdown-menu-md-right"
      >
        <div className="px-3 py-2">
          {cart.counter === 0 ? (
            <>
              <h6>
                <strong>CANASTA</strong>
              </h6>
              <hr className="myDivider mb-0" />
              <div className="text-center pt-3 pb-2">
                <em>No hay nada aquí :(</em>
              </div>
            </>
          ) : products.length ? (
            <>
              <h5>
                <strong>CANASTA</strong>
              </h5>
              <hr className="myDivider mb-4" />
              {products.map(p => {
                return (
                  <div key={p._id} className="d-flex flex-row">
                    <span
                      title="Borrar este producto"
                      className="mr-1 text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(cartActions.decrementQty(p._id));
                        elaborateShoppingBag();
                        // forceUpdate();
                        // window.location.reload();
                      }}
                    >
                      x
                    </span>
                    <span>{p.name}</span>
                    <span className="text-muted ml-1">{"(" + p.qty + ")"}</span>
                    <strong className="ml-auto">{"$" + p.subTotal}</strong>
                  </div>
                );
              })}
              <div className="d-flex flex-row mt-4 mb-1">
                <h3 className="ml-auto text-success mb-0">
                  {"Total: $" +
                    products
                      .map(p => p.subTotal)
                      .reduce((prev, next) => prev + next)}
                </h3>
              </div>
              <Button
                block
                size="sm"
                className="mb-1 py-2"
                variant="danger"
                href="/cart"
              >
                Proceder con el pago
              </Button>
            </>
          ) : (
            <div className="text-center py-4">
              <Spinner animation="grow" role="status" variant="warning" />
            </div>
          )}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default BagDropdown;
