import React, { PureComponent } from "react";
import {
  Dropdown,
  Nav,
  NavItem,
  Badge,
  Button,
  Spinner
} from "react-bootstrap";
import { connect } from "react-redux";
import { decrementQty } from "../../redux/actions/cart";
import API from "../../utils/API";

class BagDropdown extends PureComponent {
  state = {
    products: []
  };

  componentDidMount() {
    this.createCartReport();
  }

  createCartReport() {
    // clear products first
    this.setState({ products: [] }, () => {
      // generate a string including all cart items with their quantities
      let cartStr = this.props.cart.items.reduce((acc, cv, idx) => {
        if (idx === this.props.cart.items.length - 1) {
          acc += cv._id + "-" + cv.qty;
        } else {
          acc += cv._id + "-" + cv.qty + ",";
        }
        return acc;
      }, "");
      // fetch cart items (if there are any)
      if (cartStr !== "")
        API.fetchCartProducts(cartStr)
          .then(res => this.setState({ products: res.data }))
          .catch(err => console.log(err));
    });
  }

  async decrementQty(id, dispatchAction) {
    return dispatchAction(id);
  }

  render() {
    return (
      <Dropdown as={NavItem}>
        <Dropdown.Toggle
          as={Nav.Link}
          className="navbarDropdownStyle ml-0 mr-md-2 p-0 p-md-2 pt-md-3"
          title="Canasta"
        >
          <i className="fas fa-shopping-bag dropdownIcon" />
          <Badge variant="danger" pill className="ml-1">
            {this.props.cart.counter}
          </Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu
          id="bagDropdownMenu"
          className="dropdown-menu-xs-left dropdown-menu-md-right"
        >
          <div className="px-3 py-2">
            {this.props.cart.counter === 0 ? (
              <>
                <h6>
                  <strong>CANASTA</strong>
                </h6>
                <hr className="myDivider mb-0" />
                <div className="text-center pt-3 pb-2">
                  <em>Parece que no hay nada aquí</em>
                </div>
              </>
            ) : this.state.products.length ? (
              <>
                <h6>
                  <strong>CANASTA</strong>
                </h6>
                <hr className="myDivider mb-4" />
                <div className="mb-3">
                  {this.state.products.map(p => {
                    return (
                      <div key={p._id} className="d-flex flex-row">
                        <strong
                          title="Borrar este producto"
                          className="mr-1 text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            this.decrementQty(
                              p._id,
                              this.props.decrementQty
                            ).then(() => this.createCartReport())
                          }
                        >
                          x
                        </strong>
                        <span>{p.name}</span>
                        <span className="text-muted ml-1">
                          {"(" + p.qty + ")"}
                        </span>
                        <strong className="ml-auto">{"$" + p.subTotal}</strong>
                      </div>
                    );
                  })}
                </div>
                <h3 className="text-right text-success mb-3">
                  {"Total: $" +
                    this.state.products
                      .map(p => p.subTotal)
                      .reduce((prev, next) => prev + next)}
                </h3>
                <Button block variant="danger" href="/cart">
                  Ir a canasta
                  <i className="fas fa-arrow-right ml-1" />
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
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = {
  decrementQty
};

export default connect(mapStateToProps, mapDispatchToProps)(BagDropdown);
