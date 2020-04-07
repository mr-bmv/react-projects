import React, { Component } from "react";
import "./quiz.css";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";

export default class Quiz extends Component {
  state = {
    quiz: [],
  };
  render() {
    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          <h1>Quiz</h1>
          <ActiveQuiz />
        </div>
      </div>
    );
  }
}
