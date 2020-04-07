import React, { Component } from "react";
import "./quiz.css";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          { text: "Вопрос 1" },
          { text: "Вопрос 2" },
          { text: "Вопрос 3" },
          { text: "Вопрос 4" },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          <h1>Try pass the Quiz</h1>
          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </div>
      </div>
    );
  }
}
