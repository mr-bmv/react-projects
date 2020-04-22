import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/button/button";
import Input from "../../components/UI/input/input";

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Incorrect E-mail",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        label: "Password",
        errorMessage: "Incorrect Password - minimal length 6 symbols",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  loginHandler = () => {
    console.log("click-click");
  };

  regHandler = () => {
    console.log("reg");
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  validateCredential = (value, rule) => {
    if (!rule) {
      return true;
    }

    let isValid = true;
    if (rule.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rule.email) {
      isValid = validateEmail(value) && isValid;
    }

    if (rule.minLength) {
      isValid = value.trim().length >= rule.minLength && isValid;
    }

    return isValid;
  };

  onChangeHandler = (event, credential) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[credential] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateCredential(control.value, control.validation);

    formControls[credential] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((input) => {
      isFormValid = formControls[input].valid && isFormValid;
    });

    this.setState({ formControls, isFormValid });
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((credential, index) => {
      const control = this.state.formControls[credential];
      return (
        <Input
          key={credential + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => this.onChangeHandler(event, credential)}
        />
      );
    });
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div className={classes.AuthWrapper}>
          <h1>Authorization</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {/* <Input label="E-mail" />
            <Input label="Password" errorMessage="TEST" /> */}
            {this.renderInputs()}
            <Button
              type="success"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Log In
            </Button>
            <Button
              type="primary"
              onClick={this.regHandler}
              disabled={!this.state.isFormValid}
            >
              Registration
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
