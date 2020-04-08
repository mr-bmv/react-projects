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
    answerResult: null,
  };

  onAnswerClickHandler = (id) => {
    const question = this.state.quiz[this.state.activeQuestion];
    if (question.rightAnswer === id) {
      this.setState({ answerResult: { [id]: "success" } });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Finished");
        } else {
          this.setState(({ activeQuestion }) => {
            return { activeQuestion: activeQuestion + 1, answerResult: null };
          });
        }
        window.clearTimeout(timeout);
      }, 1500);
    } else {
      this.setState({ answerResult: { [id]: "error" } });
    }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  render() {
    const { quiz, activeQuestion, answerResult } = this.state;
    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          <h1>Try to pass The Quiz</h1>
          <ActiveQuiz
            answers={quiz[activeQuestion].answers}
            question={quiz[activeQuestion].question}
            onAnswer={this.onAnswerClickHandler}
            quizLength={quiz.length}
            questionNumber={activeQuestion + 1}
            answerResult={answerResult}
          />
        </div>
      </div>
    );
  }
}
