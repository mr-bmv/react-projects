import React, { Component } from "react";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/spinner";

export default class QuizList extends Component {
  state = {
    tests: [],
    loading: true,
  };

  renderList = () => {
    return this.state.tests.map(({ id, name }) => {
      return (
        <li key={id}>
          <NavLink to={"/quiz/" + id}>{name}</NavLink>
        </li>
      );
    });
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://react-quiz-37a08.firebaseio.com/tests.json"
      );
      const test = [];
      Object.keys(response.data).forEach((id, index) => {
        test.push({
          id,
          name: `Test ${index + 1}`,
        });
      });
      this.setState({ tests: test, loading: false });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className={classes.QuizList}>
        <div className={classes.QuizListWrapper}>
          <h1>Choose your Quiz</h1>
          <div className={classes.QuizListInside}>
            <span>List of Tests:</span>
            {this.state.loading ? <Spinner /> : <ul>{this.renderList()}</ul>}
          </div>
        </div>
      </div>
    );
  }
}
