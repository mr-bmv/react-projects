import React, { Component } from "react";
import "./quiz.css";

export default class Quiz extends Component {
  state = {
    quiz: [],
  };
  render() {
    return (
      <div className="quiz">
        <h1>Quiz</h1>
      </div>
    );
  }
}
