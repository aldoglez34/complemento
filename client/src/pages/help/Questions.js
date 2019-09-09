import React from "react";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";

function Questions() {
    return (
        <Layout>
            {/* regresar */}
            <div className="bg-white p-2">
                <a href="/store" className="ml-2"><i className="fas fa-arrow-circle-left mr-2"></i>Regresa a la tienda</a>
            </div>

            <Container className="text-center my-4">

                <h2 className="text-center text-dark mb-3">Preguntas Frecuentes</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nunc in odio porta vestibulum at ut tortor. Curabitur imperdiet feugiat auctor. Integer a condimentum justo. Sed augue lectus, porta eget suscipit a, imperdiet at est. Vestibulum venenatis turpis ac ex semper gravida. Pellentesque non mollis mi. Cras consequat sapien sit amet massa vehicula iaculis. Nullam sed urna non neque laoreet tincidunt. In convallis sagittis placerat. Sed viverra odio vel orci lobortis, non venenatis eros pulvinar. Etiam nunc metus, fermentum in ligula non, cursus commodo risus. Sed vel gravida tortor. Nulla vestibulum ultrices ante, a blandit dolor fermentum et. Nunc lacus orci, lobortis non convallis et, interdum vel arcu. Phasellus id gravida nulla.</p>

            </Container>
        </Layout>
    );
}

export default Questions;