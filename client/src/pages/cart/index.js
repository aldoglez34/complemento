import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, addItem, decrementQty } from "../../redux/actions/cart";
import { Container, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import API from "../../utils/API";
import "./cart.scss";
import BigCart from "./BigCart";
import SmallCart from "./SmallCart";

class Cart extends Component {
  state = {
    products: [],
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
          .then((res) => this.setState({ products: res.data }))
          .catch((err) => {
            console.log(err.response);
            err.response.data.msg
              ? alert(err.response.data.msg)
              : alert(
                  "Ocurrió un error al cargar los productos para la bolsa."
                );
          });
    });
  }

  render() {
    return (
      <Layout hideBag={true}>
        {this.props.cart.counter === 0 ? (
          <Container className="my-4">
            <h3>Canasta</h3>
            <hr className="myDivider" />
            <div className="my-4">
              <em>Canasta vacía</em>
            </div>
          </Container>
        ) : this.state.products.length ? (
          <Container className="my-4">
            {/* small cart */}
            <div className="d-block d-md-none">
              <SmallCart
                formatNumber={this.formatNumber}
                products={this.state.products}
              />
            </div>
            {/* big cart */}
            <div className="d-none d-md-block">
              <BigCart
                formatNumber={this.formatNumber}
                products={this.state.products}
              />
            </div>
          </Container>
        ) : (
          <div className="h-100 d-flex align-items-center justify-content-center">
            <Spinner variant="warning" animation="grow" role="status" />
          </div>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  clear,
  addItem,
  decrementQty,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
