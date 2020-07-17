import React, { Component } from "react";
import "./quiz.css";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";
import FinishedQuiz from "../../components/finishedQuiz/finishedQuiz";
import Spinner from "../../components/UI/Spinner/spinner";
import { connect } from "react-redux";
import { fetchQuizById, quizAnswerClick, retryQuiz } from "../../store/actions/tests";

class Quiz extends Component {

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchQuizById(this.props.match.params.id)
  }

  onRetryHandler = () => {
    this.props.retryQuiz()
    // this.setState({
    //   quizResult: {},
    //   activeQuestion: 0,
    //   answerResult: null,
    //   isFinished: false,
    // });
  };

  render() {
    const {
      quiz,
      activeQuestion,
      answerResult,
      isFinished,
      quizResult,
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
              result={quizResult}
              quiz={quiz}
              reTry={this.onRetryHandler}
            />
          ) : (
                <ActiveQuiz
                  answers={quiz[activeQuestion].answers}
                  question={quiz[activeQuestion].question}
                  onAnswer={this.props.quizAnswerClick}
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
    fetchQuizById: (id) => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
