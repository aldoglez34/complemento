import React from "react";

const styles = {
  footer: {
    height: 80,
    color: "ghostwhite",
    backgroundColor: "gray"
  }
};

const MyFooter = () => (
  <footer
    className="d-flex align-items-center justify-content-center"
    style={styles.footer}
  >
    <strong>Complemento Natural, 2019</strong>
  </footer>
);

export default MyFooter;
