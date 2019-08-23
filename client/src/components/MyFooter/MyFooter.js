import React from "react";

const styles = {
  footer: {
    // color: "white",
    backgroundColor: "#f5f5f5",
    marginTop: "auto",
  }
};

const MyFooter = () => (

  <footer className="mt-auto py-4 text-center" style={styles.footer}>
    <span className="text-muted">Complemento Natural</span>
  </footer>

);

export default MyFooter;
