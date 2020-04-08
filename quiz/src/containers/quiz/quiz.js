import React, { Component } from "react";
import "./quiz.css";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";
import FinishedQuiz from "../../components/finishedQuiz/finishedQuiz";

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerResult: null,
    isFinished: true,
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
    // there is a setTimeout here and if we will click double time on correct
    // answer we will select answer from next question. To prevent it
    // we nee to check
    if (this.state.answerResult) {
      const key = Object.keys(this.state.answerResult)[0];
      if (this.state.answerResult[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    if (question.rightAnswer === id) {
      this.setState({ answerResult: { [id]: "success" } });

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
      this.setState({ answerResult: { [id]: "error" } });
    }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  render() {
    const { quiz, activeQuestion, answerResult, isFinished } = this.state;

    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          <h1>Try to pass The Quiz</h1>

          {isFinished ? (
            <FinishedQuiz />
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
