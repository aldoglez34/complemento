import React from "react";
import { Container, Image } from "react-bootstrap";
import Layout from "../../components/Layout";
import HelpButton from "../../components/helpbutton/HelpButton";

const FAQ = React.memo(() => {
  return (
    <Layout>
      <Container className="my-4">
        <div className="text-center text-md-left">
          <Image
            className="mb-4"
            src="./images/footer/questions.png"
            width="105"
            height="105"
          />
        </div>
        <h3>Preguntas frecuentes</h3>
        <hr className="myDivider" />
        <strong>¿Es seguro comprar aquí?</strong>
        <p>
          Sí. Puedes comprar con total tranquilidad pues dedicamos un gran
          esfuerzo en disponer de recursos con los que garantizar la seguridad
          de tus compras y de tus datos.
        </p>
        <strong>¿Cómo recupero mi contraseña?</strong>
        <p>
          Si has olvidado tu contraseña puedes recuperarla muy facilmente, solo
          coloca email y nombre con el que te registraste, de inmediato
          recibirás un correo indicando tu contraseña click aqui ¿OLVIDASTE TU
          CONTRASEÑA?. Otra opción es contactarte al chat en línea y solicitar
          asesoramiento.
        </p>
        <strong>¿Puedo obtener factura?</strong>
        <p>
          Sí, al momento de registrarte debes ingresar tus datos fiscales
          ("nombre o razón social","RFC","dirección fiscal", etc; datos con los
          cuales se generará tu factura).
        </p>
        <strong>¿Puede un tercero recibir mi pedido?</strong>
        <p>
          Sí. Al realizar tu compra, tendrás la opción de registrar los datos de
          la "Persona Autorizada” a recibir el pedido (Paso 2:Confirma dirección
          de envio). Debes agregar ahí el nombre con apellidos y direccion de la
          persona autorizada en el caso de que no te encuentres en tu domicilio.{" "}
        </p>
        <strong>¿Qué hago si todavía no recibo mis productos?</strong>
        <p>
          Sí por algún motivo no recibes aun tus productos, puedes comunicarte
          con nuestro Centro de Atención al Cliente, telefónicamente al (01 800)
          7334307 Ext. 2640 de lunes a viernes de 9:00 a 18.00hrs (hora centro),
          o bien envíanos un correo con tus dudas a ventastdv@smnat.com.mx y
          nosotros nos pondremos en contacto.
        </p>
        <strong>¿Que debo hacer al finalizar mi compra?</strong>
        <p>
          Tu pago sera verificado y al ser confirmado se procedera a el envio
          del mismo
        </p>

        <HelpButton />
      </Container>
    </Layout>
  );
});

export default FAQ;
