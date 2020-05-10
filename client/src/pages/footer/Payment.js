import React from "react";
import { Container, Image } from "react-bootstrap";
import Layout from "../../components/Layout";
import HelpButton from "../../components/helpbutton/HelpButton";

const Payment = React.memo(() => {
  return (
    <Layout>
      <Container className="my-4">
        <div className="text-center text-md-left">
          <Image
            className="mb-4"
            src="./images/footer/cash.png"
            width="105"
            height="105"
          />
        </div>

        <h3>Formas de pago</h3>
        <hr className="myDivider" />

        <p>
          Disponemos de los siguientes medios de pago: Paypal, Tarjeta de
          crédito Mastercard, Visa , OXXO y muy pronto mercado pago.
        </p>
        <strong>¿Es seguro usar mi tarjeta de crédito en la página?</strong>
        <p>
          Sí, los datos se transmiten de forma encriptado SSL(Secure Sockets
          Layer [capa de conexión segura]). Para el pago con Visa y Mastercard
          sólo se aceptarán transacciones Ces (Comercio Electrónico Seguro).
        </p>
        <strong>
          ¿Por qué razón puede ser rechazada mi tarjeta de crédito?
        </strong>
        <p>
          Tu tarjeta puede ser rechazada por una de las siguientes razones:
          <ul className="list-unstyled">
            <li>
              <ul>
                <li>
                  La tarjeta puede estar caducada. Comprueba que tu tarjeta no
                  exceda la fecha de validez.
                </li>
                <li>
                  Puede que se haya alcanzado el límite de la tarjeta. Consulta
                  con tu banco que la tarjeta no haya excedido el importe
                  permitido para efectuar compras.
                </li>
                <li>
                  Puede que algún dato introducido esté incorrecto. Comprueba
                  que hayas rellenado correctamente todos los campos necesarios.
                </li>
              </ul>
            </li>
          </ul>
        </p>

        <HelpButton />
      </Container>
    </Layout>
  );
});

export default Payment;
