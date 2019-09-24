import React, { Component } from "react";
import PropTypes from "prop-types";
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
        <i className="fas fa-arrow-alt-circle-up p-0 m-0 arrow-up" />
      </button>
    );
  }
}

ScrollButton.propTypes = {
  scrollStepInPx: PropTypes.number.isRequired,
  delayInMs: PropTypes.number.isRequired
};

export default ScrollButton;
