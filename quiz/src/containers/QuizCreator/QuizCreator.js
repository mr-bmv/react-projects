import React, { Component } from "react";
import Button from "./../../components/UI/button/button";
import Input from "./../../components/UI/input/input";

import classes from "./QuizCreator.module.css";
import Select from "../../components/UI/select/select";
import { connect } from "react-redux";
import { createQuizQuestion, finishCreateQuiz } from "../../store/actions/create";

class QuizCreator extends Component {
  createInput = (type, number = "") => {
    return {
      label: `${type} ${number}`,
      id: number,
      errorMessage: `${type} can't be empty`,
      value: "",
      valid: false,
      touched: false,
      validation: true,
    };
  };

  createFormControl = () => {
    return {
      question: this.createInput("Question"),
      answer1: this.createInput("Answer", 1),
      answer2: this.createInput("Answer", 2),
      answer3: this.createInput("Answer", 3),
      answer4: this.createInput("Answer", 4),
    };
  };

  state = {
    formControls: this.createFormControl(),
    rightAnswerId: 1,
    isFormValid: false,
  };

  validateField = (value, rule) => {
    if (!rule) {
      return true;
    }

    return value.trim().length > 0;
  };

  onChangeHandler = (value, field) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[field] };

    control.value = value;
    control.touched = true;
    control.valid = this.validateField(control.value, control.validation);

    formControls[field] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((input) => {
      isFormValid = formControls[input].valid && isFormValid;
    });

    this.setState({ formControls, isFormValid });
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((field, index) => {
      const control = this.state.formControls[field];
      return (
        <React.Fragment key={field + index}>
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

  addQuestionHandler = (event) => {
    event.preventDefault();
    const {
      formControls: { question, answer1, answer2, answer3, answer4 },
      rightAnswerId,
    } = this.state;

    const questionItem = {
      question: question.value,
      id: this.props.quiz.length + 1,
      answers: [
        { text: answer1.value, id: answer1.id },
        { text: answer2.value, id: answer2.id },
        { text: answer3.value, id: answer3.id },
        { text: answer4.value, id: answer4.id },
      ],
      rightAnswerId: rightAnswerId,
    };

    this.props.createQuizQuestion(questionItem)
    // quiz.push(questionItem);

    // we leave here setState just for local changes
    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: this.createFormControl(),
    });
  };

  createQuizHandler = (event) => {
    event.preventDefault()
    console.log(this.state.quiz);
    // axios.post(
    //   // "https://react-quiz-37a08.firebaseio.com/tests.json",
    //   "tests.json",
    //   this.state.quiz
    // );
    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: this.createFormControl(),
    });
    this.props.finishCreateQuiz()

  };

  selectChangeHandler = (event) => {
    this.setState({ rightAnswerId: +event.target.value });
  };

  render() {
    const select = (
      <Select
        label="Choose correct answer"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Create New Test</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderInputs()}
            <hr color="#54b4eb" />

            {select}

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Add new Question
            </Button>

            <Button
              type="success"
              onClick={this.createQuizHandler}
              disabled={this.props.quiz.length === 0}
            >
              Submit Test
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { quiz } = state.create
  return {
    quiz
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createQuizQuestion: item => dispatch(createQuizQuestion(item)),
    finishCreateQuiz: () => dispatch(finishCreateQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator)
