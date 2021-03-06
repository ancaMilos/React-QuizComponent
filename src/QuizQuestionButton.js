import React, { Component } from "react";

class QuizQuestionButton extends Component {
  handleClick(button_text) {
    this.props.clickHandler(button_text);
  }
  render() {
    return (
      <li>
        <button
          onClick={() => {
            this.handleClick(this.props.button_text);
          }}
        >
          {this.props.button_text}
        </button>
      </li>
    );
  }
}
export default QuizQuestionButton;
