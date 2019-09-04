import React, { Component } from "react";
import "./scrollButton.css";

class ScrollButton extends Component {
  state = {
    intervalId: 0
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        title="Ir arriba"
        className="scroll"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <span className="arrow-up">
          <i className="fas fa-arrow-up"></i>
        </span>
      </button>
    );
  }
}

export default ScrollButton;
