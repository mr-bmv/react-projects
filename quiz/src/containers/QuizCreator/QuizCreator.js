import React, { Component } from "react";
import Button from "./../../components/UI/button/button";
import Input from "./../../components/UI/input/input";

import classes from "./QuizCreator.module.css";

export default class QuizCreator extends Component {
  createInput = (type, number = "") => {
    return {
      label: `${type} ${number}`,
      errorMessage: `${type} can't be empty`,
      value: "",
      valid: false,
      touched: false,
      validation: true,
    };
  };

  createFormControl = () => {
    return {
      question1: this.createInput("Question"),
      answer1: this.createInput("Answer", 1),
      answer2: this.createInput("Answer", 2),
      answer3: this.createInput("Answer", 3),
      answer4: this.createInput("Answer", 4),
    };
  };

  state = {
    quiz: [],
    formControls: this.createFormControl(),
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((field, index) => {
      const control = this.state.formControls[field];
      return (
        <React.Fragment>
          <Input
            key={field + index}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.onChangeHandler(event.target.value, field)
            }
          />
          {index === 0 ? <hr color="#54b4eb" /> : null}
        </React.Fragment>
      );
    });
  };

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
            {this.renderInputs()}

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
