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
import API from "../../utils/API";
import PropTypes from "prop-types";

class BagDropdown extends PureComponent {
  state = {
    products: []
  };

  formatNumber(num) {
    return num !== undefined
      ? "$" +
          num
            .toFixed(2)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : null;
  }

  componentDidMount() {
    this.createCartReport();
  }

  static propTypes = {
    size: PropTypes.string.isRequired
  };

  componentDidUpdate(prevProps) {
    if (prevProps.cart.counter !== this.props.cart.counter) {
      this.createCartReport();
    }
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
          .catch(err => {
            console.log(err.response);
            alert(err.response.data.msg);
          });
    });
  }

  render() {
    return this.props.size === "large" ? (
      <Dropdown as={NavItem}>
        <Dropdown.Toggle
          as={Nav.Link}
          className="navbarDropdownStyle ml-0 mr-md-2 p-0 p-md-2 pt-md-3"
          title="Canasta"
        >
          <i className="fas fa-shopping-basket" />
          <Badge
            variant="danger"
            pill
            style={{ fontSize: "10px", marginLeft: "-1px" }}
          >
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
                  <em>Canasta vacía</em>
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
                        <span>{p.name}</span>
                        <span className="text-muted ml-1">
                          {"(" + p.qty + ")"}
                        </span>
                        <strong className="ml-auto">
                          {this.formatNumber(p.subTotal)}
                        </strong>
                      </div>
                    );
                  })}
                </div>
                <h3 className="text-right text-success mb-3">
                  {"Total: " +
                    this.formatNumber(
                      this.state.products
                        .map(p => p.subTotal)
                        .reduce((prev, next) => prev + next)
                    )}
                </h3>
                <Button block variant="danger" href="/cart">
                  Ir a canasta
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
    ) : this.props.size === "small" ? (
      <div className="py-3">
        {this.props.cart.counter === 0 ? (
          <>
            <h6>
              <strong>CANASTA</strong>
            </h6>
            <hr className="myDivider mb-0" />
            <div className="text-center pt-3 pb-2">
              <em>Canasta vacía</em>
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
                    <span>{p.name}</span>
                    <span className="text-muted ml-1">{"(" + p.qty + ")"}</span>
                    <strong className="ml-auto">
                      {this.formatNumber(p.subTotal)}
                    </strong>
                  </div>
                );
              })}
            </div>
            <h3 className="text-right text-success mb-3">
              {"Total: " +
                this.formatNumber(
                  this.state.products
                    .map(p => p.subTotal)
                    .reduce((prev, next) => prev + next)
                )}
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
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(BagDropdown);
