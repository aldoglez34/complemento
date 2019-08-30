import React from "react";

const styles = {
  footer: {
    // color: "white",
    // backgroundColor: "#f5f5f5",
    backgroundColor: "dimgray",
    marginTop: "auto",
  }
};

const MyFooter = () => (

  <footer className="mt-auto py-4 text-center text-light" style={styles.footer}>
    <span>Complemento Natural</span>
  </footer>

);

export default MyFooter;
