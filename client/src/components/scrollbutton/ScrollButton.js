import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./scrollButton.scss";
import { Image } from "react-bootstrap";

class ScrollButton extends PureComponent {
  state = {
    intervalId: 0,
    is_visible: false,
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

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  render() {
    return this.state.is_visible ? (
      <Image
        onClick={() => {
          this.scrollToTop();
        }}
        className="scroll"
        title="Ir arriba"
        src="https://image.flaticon.com/icons/svg/2026/2026923.svg"
        alt="scrolltop"
      />
    ) : null;
  }
}

ScrollButton.propTypes = {
  scrollStepInPx: PropTypes.number.isRequired,
  delayInMs: PropTypes.number.isRequired,
};

export default ScrollButton;