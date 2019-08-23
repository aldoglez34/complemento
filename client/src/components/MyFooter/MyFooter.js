import React from "react";

const styles = {
  footer: {
    color: "gainsboro",
    backgroundColor: "rgb(51,64,24)",
    marginTop: "auto",
  }
};

const MyFooter = () => (

  <footer className="mt-auto py-4 text-center" style={styles.footer}>
    <strong>Complemento Natural</strong>
  </footer>

);

export default MyFooter;
