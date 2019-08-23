import React from "react";

const styles = {
  footer: {
    color: "gray",
    backgroundColor: "#f5f5f5",
    marginTop: "auto",
  }
};

const MyFooter = () => (

  <footer className="mt-auto py-3 text-center" style={styles.footer}>
    <span>Complemento Natural</span>
  </footer>

);

export default MyFooter;
