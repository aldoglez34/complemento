import React from "react";

let styles = {
  header: {
    backgroundColor: "Gray",
    backgroundBlendMode: "multiply"
  }
};

const MyHeader = props => {
  // add the background to the styles const
  // styles.header.backgroundImage = props.bgPhoto;

  return (
    <header className="py-5 mb-5" style={styles.header}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-white mt-5 mb-2">{props.title}</h1>
            <p className="lead mb-5 text-light">{props.text}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
