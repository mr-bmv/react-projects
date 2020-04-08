import React, { Component } from "react";
import "./quiz.css";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: "First Question",
        rightAnswer: 3,
        answers: [
          { text: "Answer 1", id: 1 },
          { text: "Answer 2", id: 2 },
          { text: "Answer 3", id: 3 },
          { text: "Answer 4", id: 4 },
        ],
      },
      {
        question: "Second Question",
        rightAnswer: 1,
        answers: [
          { text: "Answer 2-1", id: 1 },
          { text: "Answer 2-2", id: 2 },
          { text: "Answer 2-3", id: 3 },
          { text: "Answer 2-4", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (id) => {
    console.log(id);
    this.setState(({ activeQuestion }) => {
      return { activeQuestion: activeQuestion + 1 };
    });
  };

  render() {
    const { quiz, activeQuestion } = this.state;
    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          <h1>Try to pass The Quiz</h1>
          <ActiveQuiz
            answers={quiz[activeQuestion].answers}
            question={quiz[activeQuestion].question}
            onAnswer={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            questionNumber={activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}
