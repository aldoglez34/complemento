import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../../components/Layout/Layout";
import API from "../../utils/API";

const styles = {
    header: {
        // backgroundImage: "url('../images/bg-header-product.jpg')",
        backgroundColor: "darkslategray",
        // backgroundSize: "cover",
        // backgroundBlendMode: "multiply"
    }
};

class Product extends Component {
    state = {
        name: null,
        content: null,
        description: null,
        dose: null,
        photo: null,
        price: null
    }

    componentDidMount() {

        API.getProductDetails(this.props.routeProps.match.params.productId)
            .then(res => {
                console.log(res.data);
                this.setState({
                    name: res.data.name,
                    content: res.data.content,
                    description: res.data.description,
                    dose: res.data.dose,
                    photo: res.data.photo,
                    price: res.data.price,
                });
            })
            .catch(err => { console.log(err) });

    }

    render() {
        return (

            <Layout>

                <header className="py-5 mb-5" style={styles.header}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-12">
                                <h1 className="display-4 text-white mt-5 mb-2">{this.state.name}</h1>
                                <p className="lead mb-5 text-light">Descripción del producto</p>
                            </div>
                        </div>
                    </div>
                </header>

                <Container>
                    <Row>

                        <h1>Product info</h1>

                    </Row>
                </Container>

            </Layout>

        );
    }

};

export default Product;
