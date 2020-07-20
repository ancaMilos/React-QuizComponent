import React, { Component } from "react";

let oQuizData = require("/Users/i335564/Documents/work/funReact/React-QuizComponent/src/quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
  render() {
    return (
      <div>
        <div className="QuizQuestion">
          {oQuizData.quiz_questions[0].instruction_text}
        </div>
      </div>
    );
  }
}
export default Quiz;
