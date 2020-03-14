import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, addItem, decrementQty } from "../redux/actions/cart";
import {
  Container,
  Table,
  Button,
  Badge,
  Spinner,
  Image,
  Card,
  Row,
  Col
} from "react-bootstrap";
import Layout from "../components/Layout";
import API from "../utils/API";
import "./cart.scss";
import BigCart from "./BigCart";

class Cart extends Component {
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
          .catch(err => console.log(err));
    });
  }

  async decrementQty(id, dispatchAction) {
    return dispatchAction(id);
  }

  async incrementQty(id, dispatchAction) {
    return dispatchAction({ _id: id, qty: 1 });
  }

  // makeSale() {
  //   API.buyProducts({ products, client })
  //     .then(res => {
  //       if (!res.data.errors) {
  //         API.updateStock(products)
  //           .then(() => {
  //             alert("Gracias por tu compra");
  //             this.props.clear();
  //           })
  //           .catch(err => console.log(err));
  //       } else {
  //         alert(res.data.errors.message);
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Layout hideBag={true}>
        {this.props.cart.count === 0 ? (
          <div className="text-center my-4">Canasta vacía</div>
        ) : this.state.products.length ? (
          <Container className="my-4">
            {/* small cart */}
            <div className="d-block d-md-none">canasta pequeña</div>
            {/* big cart */}
            <div className="d-none d-md-block"><BigCart formatNumber={formatNumber} /></div>
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

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = {
  clear,
  addItem,
  decrementQty
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
