import React, { Component } from "react";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class QuizList extends Component {
  tests = [1, 2, 3];

  renderList = () => {
    return this.tests.map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Quiz №{quiz}</NavLink>
        </li>
      );
    });
  };

  componentDidMount = () => {
    axios
      .get("https://react-quiz-37a08.firebaseio.com/quiz.json")
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div className={classes.QuizList}>
        <div className={classes.QuizListWrapper}>
          <h1>Choose your Quiz</h1>
          <div className={classes.QuizListInside}>
            <span>List of Tests:</span>
            <ul>{this.renderList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}
