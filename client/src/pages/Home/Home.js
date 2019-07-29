import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../../components/Layout/Layout";
import MyHeader  from "../../components/MyHeader/MyHeader";

const Home = () => {
    return (
        <Layout>
            <MyHeader 
            bgPhoto="url('images/bg-header-home.jpg')"
            title="Bienvenido a Complemento Natural"
            text="Somos una tienda en línea de medicina complementaria. Contamos con un
            selecto catálogo de productos naturistas,
            remedios herbolarios, suplementos alimenticios y medicina alternativa a precios de laboratorio,
hechos a base de plantas, raíces y hierbas."
            />
            <Container>
                <Row>
                    <div className="col-md-8 mb-5">
                        <h2>¿Quiénes Somos?</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi
                            soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat
                explicabo, maiores!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni
                            in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate.
                Voluptatum.</p>
                        <a className="btn btn-primary btn-lg" href="/store">Descubre la tienda &raquo;</a>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h2>Contáctanos</h2>
                        <hr />
                        <address>
                            <strong>Dirección</strong>
                            <br />3481 Melrose Place
                <br />Beverly Hills, CA 90210
                <br />
                        </address>
                        <address>
                            <i className="fas fa-phone"></i>
                            (228) 111-2031
                <br />
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:complemento.natural@gmail.com">complemento.natural@gmail.com</a>
                        </address>
                    </div>
                </Row>
            </Container>
        </Layout>
    )
}

export default Home;