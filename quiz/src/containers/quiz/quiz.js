import React, { Component } from "react";
import "./quiz.css";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";
import FinishedQuiz from "../../components/finishedQuiz/finishedQuiz";
import axios from "../../axios/axios-quiz";
import Spinner from "../../components/UI/Spinner/spinner";
import { connect } from "react-redux";
import { fetchQuizById } from "../../store/actions/tests";

class Quiz extends Component {

  onAnswerClickHandler = (id) => {
    // there is a setTimeout here and if we will click double time on correct
    // answer we will select answer from next question. To prevent it
    // we need to check
    console.log(id);
    if (this.props.answerResult) {
      const key = Object.keys(this.props.answerResult)[0];
      if (this.props.answerResult[key] === "success") {
        return;
      }
    }
    const question = this.props.quiz[this.props.activeQuestion];

    // TODO
    // STRANGE SOLUTION LOOKS ON IT LATER
    const result = this.props.quizResult;
    if (question.rightAnswerId === id) {
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
    return this.props.activeQuestion + 1 === this.props.quiz.length;
  };

  async componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchQuizById(this.props.match.params.id)
  }

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
      loading,
    } = this.props;

    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          <h1>Try to pass The Quiz</h1>
          {loading || !quiz ? (
            <Spinner />
          ) : isFinished ? (
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

const mapStateToProps = (state) => {
  const { quizResult, activeQuestion, answerResult, isFinished, quiz, loading } = state.quiz
  return {
    quizResult,
    activeQuestion,
    answerResult,
    isFinished,
    quiz,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuizById: (id) => dispatch(fetchQuizById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
