import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";
import API from "../utils/API";

// checks if a given id is inside an array
const itemExists = (productId, arr) => {
    let exists = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].productId === productId) {
            exists = true;
        }
    }
    return exists;
}

class Cart extends Component {
    state = {
        cart: [],
        showOptions: false
    }

    buildCart = () => {

        let fullCart = [];

        // get all the items in the local storage and sort it in descending order
        let ls = Object.keys(localStorage);
        ls.sort();
        ls.reverse();

        // for each local storage item
        ls.forEach(function (i) {

            // if the local storage item is a cart item
            if (i.substring(0, 7) === "cn_item") {

                // get the value (productId) from the local storage
                let productId = localStorage.getItem(i);

                // create an object with that productId and set qty to 1
                let obj = {};
                obj.productId = productId;
                obj.qty = 1;

                // insert the productId and wty in the fullCart array
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

        // build the cart
        // wrap the whole proccess in a Promise
        let tempCart = [];

        let process = new Promise((resolve, reject) => {
            fullCart.forEach((value, index, array) => {

                // console.log(value);
                API.getProductDetails(value.productId)
                    .then(res => {
                        let product = {};
                        product.productId = res.data.productId;
                        product.name = res.data.name;
                        product.content = res.data.content;
                        product.qty = value.qty;
                        product.price = res.data.price;
                        product.total = parseFloat(res.data.price) * value.qty;
                        tempCart.push(product);
                    })
                    .catch(err => console.log(err));

                if (index === array.length - 1) resolve();

            });
        });

        // wait for the Promise to complete
        process.then(() => {
            // console.log(tempCart);
            this.setState({ cart: tempCart });
        });


    }

    componentDidMount() {
        console.log("component mounted - cart")
        this.buildCart();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component updated - cart")
        // console.log(prevProps, prevState);
    }

    render() {
        return (

            <Layout>

                {/* regresar */}
                <div className="bg-white p-2">
                    <a href="/store" className="ml-2"><i className="fas fa-arrow-circle-left mr-2"></i>Regresa a la tienda</a>
                </div>

                <Container className="text-center my-4">
                    <h2 className="text-center mb-3">-Mi Carrito-</h2>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>

                            {/* cart */}
                            <Table responsive>

                                {/* headers */}
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Contenido</th>
                                        <th>Cantidad</th>
                                        <th>Precio Unitario</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>

                                {/* products */}
                                <tbody>

                                    {(this.state.cart) ? (
                                        this.state.cart.map(product => {
                                            return (
                                                <tr key={product.productId}>
                                                    <td>{product.name}</td>
                                                    <td>{product.content}</td>
                                                    <td>{product.qty}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.total}</td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                            <tr>
                                                <td colSpan="5">No hay productos en tu carrito</td>
                                            </tr>
                                        )}

                                </tbody>
                            </Table>

                        </Col>
                    </Row>

                    {this.state.showOptions ? (
                        <div>
                            <Button variant="danger">Proceder con el pago <i className="fas fa-money-bill-wave ml-2"></i></Button>
                            <div className="text-right">
                                <Button variant="link">Limpiar carrito</Button>
                            </div>
                        </div>
                    ) : (
                            null
                        )}

                </Container>
            </Layout >

        );
    }

};

export default Cart;
