import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./scrollButton.scss";
import { Button } from "react-bootstrap";

class ScrollButton extends PureComponent {
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
      <Button
        title="Ir arriba"
        variant="transparent"
        className="scroll p-0"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <i className="fas fa-chevron-up arrow-up" />
      </Button>
    );
  }
}

ScrollButton.propTypes = {
  scrollStepInPx: PropTypes.number.isRequired,
  delayInMs: PropTypes.number.isRequired
};

export default ScrollButton;
