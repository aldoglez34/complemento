import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout";

const Terms = React.memo(() => {
  return (
    <Layout>
      <Container className="my-4">
        <h3 className="mb-3">Términos y condiciones</h3>

        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          Quisque fringilla, tellus vel pulvinar sodales, sapien nulla pharetra
          urna, sit amet ornare purus ipsum nec nulla. Ut condimentum neque ut
          eleifend aliquet. Cras gravida euismod ante, maximus viverra ante
          pellentesque placerat. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Donec eu facilisis urna.
          Vestibulum vitae arcu massa. Morbi faucibus luctus nulla a dignissim.
          Nunc sed dapibus neque, id luctus ex. Vivamus luctus nulla augue, non
          pharetra tellus ultricies vel. Quisque fringilla metus vitae tortor
          bibendum molestie.
        </p>
        <p>
          Aenean dignissim ipsum ligula, sit amet porttitor libero molestie eu.
          Duis augue enim, aliquet a nisi eget, aliquet posuere odio. Nulla
          tincidunt dolor id velit fermentum auctor. Nullam nec leo sed ante
          dapibus tincidunt. Sed sodales vulputate urna et sollicitudin. Aliquam
          consequat pellentesque risus sed aliquam. Maecenas sagittis erat et
          diam facilisis, et tincidunt eros sollicitudin. Pellentesque et neque
          posuere, aliquet velit sit amet, finibus tortor. Ut a lorem aliquam,
          iaculis elit non, consequat leo. Sed pretium cursus semper. Donec
          fermentum nunc mattis nisl suscipit, sit amet molestie magna pretium.
          Curabitur elementum, mi at ullamcorper aliquam, eros purus vulputate
          nisi, quis posuere augue diam eu mi.
        </p>
      </Container>
    </Layout>
  );
});

export default Terms;
