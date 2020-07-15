import React, { Component } from "react";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/spinner";
import { connect } from "react-redux";
import { fetchQuizes } from "../../store/actions/tests";

class QuizList extends Component {

  renderList = () => {
    return this.props.tests.map(({ id, name }) => {
      return (
        <li key={id}>
          <NavLink to={"/quiz/" + id}>{name}</NavLink>
        </li>
      );
    });
  };

  componentDidMount = () => {
    this.props.fetchQuizes()
  };

  render() {
    return (
      <div className={classes.QuizList}>
        <div className={classes.QuizListWrapper}>
          <h1>Choose your Quiz</h1>
          <div className={classes.QuizListInside}>
            <span>List of Tests:</span>
            {this.props.loading && this.props.tests.length !== 0
              ? <Spinner />
              : <ul>{this.renderList()}</ul>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tests: state.quiz.tests,
    loading: state.quiz.loading
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizList)