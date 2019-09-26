import React from "react";
import "./welcomebutton.scss";

function WelcomeButton() {
  return (
    // <a className="welcomeBttn" href="/store">
    //   Descubre la tienda
    //   {/* <i className="fas fa-store-alt ml-2" />
    //   <i className="fas fa-angle-double-right ml-1" /> */}
    // </a>
    <a href="/store" className="h4 welcomeBtn">
      EXPLORAR
      <i className="fas fa-store-alt ml-2" />
      <i className="fas fa-angle-double-right ml-2" />
    </a>
  );
}

export default WelcomeButton;
