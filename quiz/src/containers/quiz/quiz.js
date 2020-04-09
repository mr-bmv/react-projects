import React, { Component } from "react";
import "./quiz.css";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";
import FinishedQuiz from "../../components/finishedQuiz/finishedQuiz";

export default class Quiz extends Component {
  state = {
    quizResult: {},
    activeQuestion: 0,
    answerResult: null,
    isFinished: false,
    quiz: [
      {
        id: 1,
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
        id: 2,
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
    // there is a setTimeout here and if we will click double time on correct
    // answer we will select answer from next question. To prevent it
    // we need to check
    if (this.state.answerResult) {
      const key = Object.keys(this.state.answerResult)[0];
      if (this.state.answerResult[key] === "success") {
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];

    // TODO
    // STRANGE SOLUTION LOOKS ON IT LATER
    const result = this.state.quizResult;

    if (question.rightAnswer === id) {
      if (!result[question.id]) {
        result[question.id] = "success";
      }

      this.setState({
        answerResult: { [id]: "success" },
        result,
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true });
        } else {
          this.setState(({ activeQuestion }) => {
            return { activeQuestion: activeQuestion + 1, answerResult: null };
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      result[question.id] = "error";
      this.setState({
        answerResult: { [id]: "error" },
        result,
      });
    }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  onRetryHandler = () => {
    this.setState({
      quizResult: {},
      activeQuestion: 0,
      answerResult: null,
      isFinished: false,
    });
  };

  render() {
    const {
      quiz,
      activeQuestion,
      answerResult,
      isFinished,
      result,
    } = this.state;

    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          <h1>Try to pass The Quiz</h1>

          {isFinished ? (
            <FinishedQuiz
              result={result}
              quiz={quiz}
              reTry={this.onRetryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={quiz[activeQuestion].answers}
              question={quiz[activeQuestion].question}
              onAnswer={this.onAnswerClickHandler}
              quizLength={quiz.length}
              questionNumber={activeQuestion + 1}
              answerResult={answerResult}
            />
          )}
        </div>
      </div>
    );
  }
}
