import React, { Component } from "react";
import Button from "./../../components/UI/button/button";
import Input from "./../../components/UI/input/input";

import classes from "./QuizCreator.module.css";

export default class QuizCreator extends Component {
  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = () => {
    console.log("Add new Test");
  };

  createQuizHandler = () => {
    console.log("Submit Test");
  };

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Create New Test</h1>

          <form onSubmit={this.submitHandler}>
            <Input type="text" />
            <hr />
            <Input type="text" />
            <Input type="text" />
            <Input type="text" />
            <Input type="text" />

            <select></select>

            <Button type="primary" onClick={this.addQuestionHandler}>
              Add new Question
            </Button>

            <Button type="success" onClick={this.createQuizHandler}>
              Submit Test
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
